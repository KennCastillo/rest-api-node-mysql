const mssql = require('mssql');

const config = {
    server: 'kcastillo',
    user: 'sa',
    password: 'Abrh1l2007',
    database: 'server_abrhil',
    parseJSON: true 
}

const mysqlConnection = new mssql.ConnectionPool(config);

mysqlConnection.connect((err) => {
    if(err){
        console.log(err);
        return;
    } else {
        console.log('Se ha conectado a la base de datos de SqlServer');
    }
});

module.exports = mysqlConnection;