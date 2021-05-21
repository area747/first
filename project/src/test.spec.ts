import * as test from "./test";

describe( 'test01', function () {
    it( 'a+b=c', function ( done ) {
        if ( test.test01( 1, 2 ) === 3 ) {
            done();
        }
    } )
} )