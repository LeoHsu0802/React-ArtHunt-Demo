const express    = require('express');
const server = express();
const bodyParser = require('body-parser');
const mysql      = require('mysql');
const cors       = require('cors');
server.use(cors());

const connection = mysql.createConnection({
  host     : '10.99.103.198',
  user     : '354admin',
  password : '354354354',
  database : 'db354123456'
});

// Initialize the app
const app = express();

// get data from database and error function
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








