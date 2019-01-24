import { Request, Response, NextFunction } from 'express'

import { pseudoDecodeToken } from '../methods'

declare module 'express' {
    interface Request {
        user?: { identity: string };
    }
}

export default (req: Request, res: Response, next: NextFunction) => {
    if ((!req.headers.authorization)) {
        res.statusMessage = 'No Authorization Header'
        res.status(401).send('Unauthorized')
        return 
    }

    const userToken = req.headers.authorization.split('Bearer ')[1]

    const identity = pseudoDecodeToken(userToken)

    if (!identity) res.status(401).send('Unauthorized')

    req.user = { identity: pseudoDecodeToken(userToken) }

    next()
}
