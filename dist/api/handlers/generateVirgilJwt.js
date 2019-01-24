"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const virgil_sdk_1 = require("virgil-sdk");
const virgil_crypto_1 = require("virgil-crypto");
const config_1 = require("../config");
const virgilCrypto = new virgil_crypto_1.VirgilCrypto();
const generator = new virgil_sdk_1.JwtGenerator({
    appId: config_1.default.virgil.appId,
    apiKeyId: config_1.default.virgil.apiKeyId,
    apiKey: virgilCrypto.importPrivateKey(config_1.default.virgil.apiPrivateKey),
    accessTokenSigner: new virgil_crypto_1.VirgilAccessTokenSigner(virgilCrypto)
});
exports.default = (req, res) => {
    if (!req.user) {
        return;
    }
    try {
        console.log(generator);
        const virgilJwtToken = generator.generateToken(req.user.identity);
        res.json({ virgilToken: virgilJwtToken.toString() });
        return;
    }
    catch (e) {
        res.statusMessage = `Could not generate Jwt token: ${e}`;
        res.status(400).send();
        return;
    }
};
//# sourceMappingURL=generateVirgilJwt.js.map