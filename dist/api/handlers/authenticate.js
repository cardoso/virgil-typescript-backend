"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const methods_1 = require("../methods");
exports.default = (req, res) => {
    const body = req.body;
    if (!body) {
        res.statusMessage = 'You should specify identity in body';
        res.status(400).end();
        return;
    }
    const token = methods_1.generateUserToken();
    methods_1.pseudoEncodeToken(body.identity, token);
    res.json({ authToken: token });
};
//# sourceMappingURL=authenticate.js.map