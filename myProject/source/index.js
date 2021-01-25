let server = require( "./server" );
let router = require( "./router" );
let handler = require( "./requestHandler" );
var path = require( "path" );
server.server( router, handler, path );