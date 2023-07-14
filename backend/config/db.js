const mysql = require('mysql')
const config = require('./config');
const db = mysql.createConnection({
    host: config.database.host,
    user: config.database.user,
    password: config.database.password,
    database: config.database.database
})
db.connect((error) => {
    if (error) {
        console.error('Error connecting to MySQL database:', error);
        return;
    }

    console.log('Connected to MySQL database!');
});

module.exports = db;