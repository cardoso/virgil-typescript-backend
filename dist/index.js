"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const handlers_1 = require("./api/handlers");
const middlewares_1 = require("./api/middlewares");
const app = express();
app.use(bodyParser.json());
app.post('/authenticate', handlers_1.authenticate);
app.get('/virgil-jwt', middlewares_1.requireAuthHeader, handlers_1.generateVirgilJwt);
const port = process.env.PORT || 4000;
console.log(`[STATUS] Kalendo server listening on port ${port}`);
app.listen(process.env.PORT || 4000);
//# sourceMappingURL=index.js.map