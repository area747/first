//You need to import the default export from express instead of the namespace (which is an object with all named exports).

import * as express from "express";

const app: express.Application = express.default();
const router = express.Router();

app.listen( 7000, "localhost" );