const mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8080;

var db = mysql.createPool({
    host: "localhost",
    port: '3306',
    user: "root",
    password: "yoann",
    database: "project"
});

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'POST');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
  
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.post('/', (req, res) => {
    db.query(req.body.sqlRequest, function (err, result) {
        if (err) {
            console.error(err);
       }
       res.send(result);
       console.log("Execution of the query " + req.body.sqlRequest);
    });
});
  
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});
