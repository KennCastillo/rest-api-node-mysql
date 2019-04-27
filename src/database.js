const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'abrhil'
});

mysqlConnection.connect(function (err) {
    if(err){
        console.log(err);
        return;
    } else {
        console.log('Se ha conectado a la base de datos mysql');
    }
});

module.exports = mysqlConnection;