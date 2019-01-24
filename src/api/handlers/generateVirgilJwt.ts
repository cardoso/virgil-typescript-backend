import { JwtGenerator, Jwt, PrivateKeyStorage } from 'virgil-sdk'
import { VirgilCrypto, VirgilAccessTokenSigner, VirgilPrivateKey } from 'virgil-crypto'
import { Request, Response } from 'express'
import config from '../config'

const virgilCrypto = new VirgilCrypto()

const generator = new JwtGenerator({
    appId: config.virgil.appId,
    apiKeyId: config.virgil.apiKeyId,
    apiKey: virgilCrypto.importPrivateKey(config.virgil.apiPrivateKey),
    accessTokenSigner: new VirgilAccessTokenSigner(virgilCrypto)
})

export default (req: Request, res: Response) => {
    if (!req.user) {
        return
    }

    try {
        console.log(generator)
        const virgilJwtToken = generator.generateToken(req.user.identity)
        res.json({ virgilToken: virgilJwtToken.toString() })
        return
    } catch(e) {
        res.statusMessage = `Could not generate Jwt token: ${e}`
        res.status(400).send()
        return
    }
}