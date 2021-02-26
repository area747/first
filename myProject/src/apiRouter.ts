import * as e from 'express'
const apiRouter = e.Router();



apiRouter.get( '/:serviceCode', function ( req, res, next ) {
    let params = req.params;

    console.log( params.serviceCode );
} );

apiRouter.get( '/', function ( req, res, next ) {
    let url = req.originalUrl;
    next(createError(404))

    console.log( 'api origin', url );
} );

export = apiRouter;