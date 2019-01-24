"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
dotenv_1.config();
const requiredParams = [
    'APP_ID',
    'API_PRIVATE_KEY',
    'API_KEY_ID',
].filter(name => !process.env[name]);
if (requiredParams.length > 0) {
    throw new Error(`Invalid configuration. Missing: ${requiredParams.join(', ')} in .env file`);
}
exports.default = {
    virgil: {
        appId: process.env.APP_ID || "",
        apiPrivateKey: process.env.API_PRIVATE_KEY || "",
        apiKeyId: process.env.API_KEY_ID || ""
    }
};
//# sourceMappingURL=config.js.map