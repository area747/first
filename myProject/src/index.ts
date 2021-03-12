// You need to import the default export from express instead of the namespace (which is an object with all named exports)

import express, { NextFunction, Request, Response } from 'express';
import apiRouter from './apiRouter';
import mvcRouter from './htmlRouter';


const app = express();

// 정적 파일추가
app.use( express.static( 'myProject/view' ) );
// api 라우터
app.use( '/api', apiRouter );

// view url 라우터
app.use( '/', mvcRouter );


// 에러처리 핸들러
app.use( function ( err:any, req:Request, res:Response, next:NextFunction ) {
    console.log(err);
    res.status(404).send('404 Not Found!!!');
} );



app.listen( 7000, 'localhost' );
