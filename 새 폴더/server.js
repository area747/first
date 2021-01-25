const http = require( "http" );
const path = require("path");
module.exports = {
    server: function ( router, handler ) {
        http.createServer( function ( req, res ) {
            let baseUrl = path.basename(req.url);
            let urlPath = path.normalize(baseUrl);
            router.route( urlPath, handler );

            res.end( "hello, World!" );
        } ).listen( 7000, "localhost" );

        function requestListener( req, res ) {
            res.end( "hello World!" );
        }

    },
}