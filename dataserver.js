const express    = require('express');
const bodyParser = require('body-parser');
const mysql      = require('mysql');
const app = express();

const connection = mysql.createConnection({
  host     : '10.99.103.198',
  user     : '354admin',
  password : '354354354',
  database : 'db354'
});
//避免CORS同源政策阻擋，設為"*"表示允許所有地址呼叫
let allowCrossDomain = function(req, res, next) {
  res.header('Access-Control-Allow-Origin', "*");
  res.header('Access-Control-Allow-Headers', "*");
  next();
}
app.use(allowCrossDomain);
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




