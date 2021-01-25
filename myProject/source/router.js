module.exports = {
    route: function ( url, handler ) {
        if ( typeof handler[ url ] == "function" ) {
            return handler[ url ]();
        } else {
            return "404 not found";
        };
    }
}