import * as e from 'express'
const apiRouter = e.Router();

apiRouter.get( '/', function ( req, res ) {
    let url = req.originalUrl;

    console.log( url );
} )

apiRouter.get( '/*', function ( req, res ) {
    let url = req.originalUrl;

    console.log( url ,'abc임');
} )

export = apiRouter;