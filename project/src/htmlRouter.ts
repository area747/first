import * as e from 'express';
import session from 'express-session';
import * as fs from 'fs';

const mvcRouter = e.Router();

mvcRouter.get( '/:serviceCode', function ( req, res, next ) {

    const serviceCode = req.params.serviceCode || 'index';
    fs.readFile( 'project/view/' + serviceCode + '.html', { encoding: 'utf-8' }, function ( err, data ) {
        res.writeHead( 200, { 'Content-Type': 'text/html; charset=utf-8' } );
        res.end( data );
    } );


} );

mvcRouter.get( '/', function ( req, res, next ) {
    console.log( req.session.id );
    console.log( req.session );

    fs.readFile( 'project/view/main.html', { encoding: 'utf-8' }, function ( err, data ) {
        res.writeHead( 200, { 'Content-Type': 'text/html; charset=utf-8' } );
        res.end( data );
    } );
} );

export = mvcRouter;


