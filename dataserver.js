const express    = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');
const app = express();

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '83082',
  database : 'art'
});
//避免CORS同源政策阻擋，設為"*"表示允許所有地址呼叫
let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
}
app.use(allowCrossDomain);

<<<<<<< HEAD
=======
// Initialize the app
const app = express();

// get data from database and error function
>>>>>>> 896a6b79b9d9fe381ef86318f7eb63338170d342
app.get('/', function (req, res) {

    connection.query('SELECT * FROM art_item', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
});
// Start the server
app.listen(3000, () => {
 console.log('Go to http://localhost:3000 to see posts');
});




