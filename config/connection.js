//Set up my MySql Connection

var mysql = require ("mysql");

var connection;
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    port: 8889,
    host: "localhost",
    user: "root",
    password:"root",
    database: "burgers_db"
});
};

connection.connect(function(err){
    if(err) {
        console.log("error connecting: "+ err.stack);
        return;
    }
    console.log("connected as id"+ connection.threadId);
})

module.exports = connection;