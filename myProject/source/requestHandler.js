const path = require( "path" );
const fs = require( "fs" );
module.exports = {
    start: function () {
        console.log(path.join(__dirname,"../view/main.html"));
        return fs.readFileSync( path.resolve( "myProject/view/main.html" ) );
    },
}