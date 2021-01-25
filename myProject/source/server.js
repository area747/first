const http = require( "http" );
module.exports = {
    server: function ( router, handler, path ) {
        http.createServer( function ( req, res ) {
            let url = path.normalize( req.url );
            let urlPath = path.basename( url );
            let page = router.route( urlPath, handler );
            res.setHeader( "Content-Type", "text/html; charset=utf-8" );
            res.end( page );
        } ).listen( 7000, "localhost" );

        function requestListener( req, res ) {
            res.end( "hello World!" );
        }

    },
}