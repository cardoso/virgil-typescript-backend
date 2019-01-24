"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const methods_1 = require("../methods");
exports.default = (req, res, next) => {
    if ((!req.headers.authorization)) {
        res.statusMessage = 'No Authorization Header';
        res.status(401).send('Unauthorized');
        return;
    }
    const userToken = req.headers.authorization.split('Bearer ')[1];
    const identity = methods_1.pseudoDecodeToken(userToken);
    if (!identity)
        res.status(401).send('Unauthorized');
    req.user = { identity: methods_1.pseudoDecodeToken(userToken) };
    next();
};
//# sourceMappingURL=requireAuthHeader.js.map