// You need to import the default export from express instead of the namespace (which is an object with all named exports)

import express from 'express';
import apiRouter from './apiRouter';
import mvcRouter from './htmlRouter';


const app = express();

// 정적 파일추가
app.use( express.static( 'myProject/view' ) );
// api 라우터
app.use( '/api', apiRouter );

// view url 라우터
app.use( '/', mvcRouter );

app.use( function ( req, res, next ) {
    res.status(404).send('404 Not found');
} )

app.listen( 7000, 'localhost' );
