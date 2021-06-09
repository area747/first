import * as e from 'express';
const apiRouter = e.Router();

apiRouter.get( '/*', function ( req, res, next ) {
    next( '404' );

} )

apiRouter.get( '/:serviceCode', function ( req, res, next ) {
    const params = req.params;

    console.log( params.serviceCode );
    next( new Error( 'woops' ) );

} );

apiRouter.get( '/', function ( req, res, next ) {
    const url = req.originalUrl;

    console.log( 'api origin', url );
} );

export = apiRouter;