// @flow

const express = require( "express" );
const server = express();
server.listen( 7000, "localhost" );
server.get( "/hi", function () {
    console.log( "hi" );
} );

var a: number = 30;
var b: string = "hi";