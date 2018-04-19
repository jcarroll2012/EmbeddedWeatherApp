// Establish db instance connection
var mysql = require('mysql')
var pool = mysql.createPool({
    host     : 'jcarrolldb.coabmzguluyz.us-east-2.rds.amazonaws.com',
    user     : 'jcarroll2012',
    password : 'embed2daY!',
    database : 'jcarrollEmbeded'
});

// Return test table data
exports.getData = function(callback) {
    //// console.log('somehow made it here');
    // get all amps
    var sql = 'SELECT testMessage FROM TestTable WHERE testId = 1';

    pool.getConnection(function(err, connection) {

        // Handle connection acquire error
        if(err) {
            console.log(err);
            callback(true);
            return;
        }

        // Use the connection
        connection.query(sql, function (error, results, fields) {
            // And done with the connection
            connection.release();
            // Handle query error after the connection release
            if (error) {
                console.log(error);
                callback(true);
                return;
            }
            // Return results and success
            callback(false, results);
        });
    });
};

exports.getToday = function(callback) {
    //// console.log('somehow made it here');
    // get all amps
    var sql = 'SELECT * FROM Today';

    pool.getConnection(function(err, connection) {

        // Handle connection acquire error
        if(err) {
            console.log(err);
            callback(true);
            return;
        }

        // Use the connection
        connection.query(sql, function (error, results, fields) {
            // And done with the connection
            connection.release();
            // Handle query error after the connection release
            if (error) {
                console.log(error);
                callback(true);
                return;
            }
            // Return results and success
            callback(false, results);
        });
    });
};

exports.getCurrent = function(callback) {
    //// console.log('somehow made it here');
    // get all amps
    var sql = 'SELECT * FROM Current';

    pool.getConnection(function(err, connection) {

        // Handle connection acquire error
        if(err) {
            console.log(err);
            callback(true);
            return;
        }

        // Use the connection
        connection.query(sql, function (error, results, fields) {
            // And done with the connection
            connection.release();
            // Handle query error after the connection release
            if (error) {
                console.log(error);
                callback(true);
                return;
            }
            // Return results and success
            callback(false, results);
        });
    });
};

exports.getArchive = function(callback) {
    //// console.log('somehow made it here');
    // get all amps
    var sql = 'SELECT * FROM History';

    pool.getConnection(function(err, connection) {

        // Handle connection acquire error
        if(err) {
            console.log(err);
            callback(true);
            return;
        }

        // Use the connection
        connection.query(sql, function (error, results, fields) {
            // And done with the connection
            connection.release();
            // Handle query error after the connection release
            if (error) {
                console.log(error);
                callback(true);
                return;
            }
            // Return results and success
            callback(false, results);
        });
    });
};