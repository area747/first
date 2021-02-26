import * as e from 'express';
import * as fs from 'fs';
const mvcRouter = e.Router();

mvcRouter.get( '/:serviceCode', function ( req, res, next ) {

    let serviceCode = req.params.serviceCode;

    fs.readFile( 'myProject/view/' + serviceCode + '.html', { encoding: 'utf-8' }, function ( err, data ) {
        res.writeHead( 200, { 'Content-Type': 'text/html; charset=utf-8' } );
        res.end( data );
        next();
    } );
} );

export = mvcRouter;


