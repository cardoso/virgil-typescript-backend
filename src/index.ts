import * as express from 'express'
import * as bodyParser from 'body-parser';

import { generateVirgilJwt, authenticate } from './api/handlers'
import { requireAuthHeader } from './api/middlewares'

const app = express()

app.use(bodyParser.json())

app.post('/authenticate', authenticate)
app.get('/virgil-jwt', requireAuthHeader, generateVirgilJwt)


const port = process.env.PORT || 4000

console.log(`[STATUS] Kalendo server listening on port ${port}`)

app.listen(process.env.PORT || 4000)