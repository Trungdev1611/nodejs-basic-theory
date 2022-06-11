// get the client
const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'nodejsbasic'
});

// simple query
// connection.query(
//     'SELECT * FROM `users`',
//     function (err, results, fields) {
//         console.log(results); // results contains rows returned by server
//         var resultArray = Object.values(JSON.parse(JSON.stringify(results)))
//         console.log(resultArray)
//     }
// );

export default connection
