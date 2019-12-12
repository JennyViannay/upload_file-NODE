const mysql = require('mysql')
const bdd_name = 'db_upload'
const port = 8889
const connection = mysql.createConnection({
    host: 'localhost',
    port: port,
    user: 'root',
    password: 'root',
    database: bdd_name
})

connection.connect(function (err) {
    if (!err) {
        console.log(`## 🤙 MySQL is connected to ${bdd_name} on port ${port}`);
    } else {
        console.log("### 👎 Error connecting database", err);
    }
});

module.exports = connection