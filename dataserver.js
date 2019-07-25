const express    = require('express');
const server = express();
const bodyParser = require('body-parser');
const mysql      = require('mysql');
const cors       = require('cors');
server.use(cors());

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '830802',
  database : 'art'
});

// Initialize the app
const app = express();

// https://expressjs.com/en/guide/routing.html
app.get('/', function (req, res) {
    connection.connect();

    connection.query('SELECT * FROM art_item', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });

    connection.end();
});
// Start the server
app.listen(3000, () => {
 console.log('Go to http://localhost:3000 to see posts');
});








