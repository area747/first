import mysql from 'mysql2/promise';
import mybatis, { Format, Params } from 'mybatis-mapper';
import fs from 'fs';

const connection = mysql.createPool( {
    host: 'localhost',
    user: 'root',
    password: '1234',
    port: 3306,
    database: 'sams'
} )
const filePath = 'project/DB/mapper/'

const ls = fs.readdirSync( filePath )
const list: string[] = [];
const format: Format = { language: 'sql', indent: '  ' };
ls.forEach( element => {
    list.push( filePath + element );
} );

mybatis.createMapper( list );

const excute = async ( namespace: string, sql: string, param: Params ): Promise<Array<any>> => {
    const conn = await connection.getConnection();
    try {
        const query = mybatis.getStatement( namespace, sql, param, format )
        const [ row, etc ] = await conn.query( query, param );
        conn.release();
        return JSON.parse( JSON.stringify( row ) );
    } catch ( error ) {
        console.log( error );
        conn.release();
        return [];
    }

}
export = excute;