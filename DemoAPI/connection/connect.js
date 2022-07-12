var sql = require("mssql");
var connect = function()
{
    var conn = new sql.ConnectionPool({
        user: 'sa',
        password: 'root',
        server: 'localhost',
        database: 'TESTDB',
        "options": {"trustServerCertificate": true}
    });
 
    return conn;
};

module.exports = connect;