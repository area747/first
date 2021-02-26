import * as e from 'express'
const apiRouter = e.Router();

apiRouter.get( '/', function ( req, res ) {
    let url = req.originalUrl;

    console.log( 'api origin', url );
} )

apiRouter.get( '/:serviceCode', function ( req, res ) {
    let params = req.params;

    console.log( params.serviceCode );
} )

export = apiRouter;