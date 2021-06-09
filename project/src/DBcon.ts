import mysql from 'mysql';
import mybatis, { Format, Params } from 'mybatis-mapper';
import fs from 'fs';

const connection = mysql.createPool( {
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306,
    database: 'sams'
} )

const ls = fs.readdirSync( 'project/DB/mapper' )
const list: string[] = [];
const format: Format = { language: 'sql', indent: '  ' };
ls.forEach( element => {
    list.push( 'project/DB/mapper/' + element );
} );

mybatis.createMapper( list );

const excute = function ( namespace: string, sql: string, param: Params, callback: ( res: [] ) => void ): void {
    const query: string = mybatis.getStatement( namespace, sql, param, format )
    connection.getConnection( function ( err, con ) {
        con.query( query, function ( err, res ) {
            console.log( query );
            console.log( err );
            callback( res );
        } )
        con.release();
    } )
}

export = excute;