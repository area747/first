//You need to import the default export from express instead of the namespace (which is an object with all named exports)

import * as express from "express";
import apiRouter from "./apiRouter";
import router from "./htmlRouter";


const app: express.Application = express.default();

app.use( '/js', express.static( '/myProject/view/js' ) );
console.log( __dirname );
app.use( '/api', apiRouter );
app.use( '/', router );
app.listen( 7000, "localhost" );

export = express;

