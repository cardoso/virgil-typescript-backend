"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const virgil_crypto_1 = require("virgil-crypto");
const crypto = new virgil_crypto_1.VirgilCrypto();
const usersStorage = {};
exports.usersStorage = usersStorage;
const generateUserToken = () => crypto.getRandomBytes(32).toString('base64');
exports.generateUserToken = generateUserToken;
const pseudoEncodeToken = (identity, token) => usersStorage[token] = identity;
exports.pseudoEncodeToken = pseudoEncodeToken;
const pseudoDecodeToken = (token) => usersStorage[token];
exports.pseudoDecodeToken = pseudoDecodeToken;
//# sourceMappingURL=methods.js.map