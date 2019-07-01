const mysql = require("mysql");

const config = require('config');
const dbConfig = config.get('dbConfig');

exports.connect = (sql, param, callback) => {
    var db=mysql.createConnection({
        host: dbConfig.host,
        port: dbConfig.port,
        user: dbConfig.username,  
        password: dbConfig.password,
        database: dbConfig.dbName
    });
    db.connect();
    db.query(sql,param,callback);
    db.end();
};