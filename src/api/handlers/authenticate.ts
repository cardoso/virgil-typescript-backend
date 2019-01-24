import { Request, Response } from 'express'

import { generateUserToken, pseudoEncodeToken } from '../methods'

interface AuthenticateBody {
    identity: string
}

export default (req: Request, res: Response) => {
    const body = req.body as AuthenticateBody

    if (!body) {
        res.statusMessage = 'You should specify identity in body'
        res.status(400).end()
        return
    }

    const token = generateUserToken()

    pseudoEncodeToken(body.identity, token)

    res.json({ authToken: token })
}