import * as e from 'express';
import * as fs from 'fs';
const mvcRouter = e.Router();

mvcRouter.get( '/:serviceCode', function ( req, res, next ) {

    let serviceCode = req.params.serviceCode || 'main';
    console.log( '서비스코드 :', serviceCode );
    if ( serviceCode === '404not' ) {
        next( '404error!' );
        return;
    }
    fs.readFile( 'myProject/view/' + serviceCode + '.html', { encoding: 'utf-8' }, function ( err, data ) {
        res.writeHead( 200, { 'Content-Type': 'text/html; charset=utf-8' } );
        res.end( data );
    } );


} );

mvcRouter.get( '/', function ( req, res, next ) {
    console.log( 'mainpage' );
    fs.readFile( 'myProject/view/main.html', { encoding: 'utf-8' }, function ( err, data ) {
        res.writeHead( 200, { 'Content-Type': 'text/html; charset=utf-8' } );
        res.end( data );
    } );
} );

export = mvcRouter;


