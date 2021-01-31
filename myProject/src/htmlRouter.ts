import * as e from 'express';
import * as fs from 'fs';
const router = e.Router();

router.get( "/*", function ( req, res ) {

    console.log( 'path:', req.path );
    console.log( 'url:', req.url );
    console.log( 'base:', req.baseUrl );
    console.log( 'original:', req.originalUrl );

    let url = req.originalUrl;
    if ( url === '/' ) {
        url = 'main';
    }
    fs.readFile( 'myProject/view/' + url + '.html', { encoding: 'utf-8' }, function ( err, data ) {
        res.writeHead( 200, { 'Content-Type': 'text/html; charset=utf-8' } );
        res.end( data );
    } )
} )

export = router;


