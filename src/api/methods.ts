import { VirgilCrypto } from 'virgil-crypto'

const crypto = new VirgilCrypto()
const usersStorage: { [key: string]: string; } = {}
const generateUserToken = () => crypto.getRandomBytes(32).toString('base64')
const pseudoEncodeToken = (identity: string, token: string) => usersStorage[token] = identity
const pseudoDecodeToken = (token: string) => usersStorage[token]

export {
    usersStorage,
    generateUserToken,
    pseudoEncodeToken,
    pseudoDecodeToken
}