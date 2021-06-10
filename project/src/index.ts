// You need to import the default export from express instead of the namespace (which is an object with all named exports)

import express, { NextFunction, Request, Response } from 'express';
import session from 'express-session';
import apiRouter from './apiRouter';
import mvcRouter from './htmlRouter';
import excute from './DBcon';

(async function a ():Promise<void>{
    var a = await excute( 'mapper1', 'test', {})
    for(var i in a){
        console.log(a[i]);
    }
})();

const app = express();
app.use( express.static( 'project/view' ) );

app.use( session( {
    secret: 'abcd',
    resave: false,
    saveUninitialized: true
} ) )

// api 라우터
app.use( '/api', apiRouter );

// view url 라우터
app.use( '/', mvcRouter );


// 에러처리 핸들러
app.use( function ( err: Error, req: Request, res: Response, next: NextFunction ) {
    console.log( err.name );
    console.log( err.message );
    console.log( err.stack );
    res.status( 404 ).send( err.name );
} );



app.listen( 7000, 'localhost' );
