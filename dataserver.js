const app    = require('express') ();
const server = require('http').Server(app);
//將Server送給Socket.io處理
const io = require('socket.io')(server);
const cors = require('cors')
const mysql      = require('mysql');
//設置localhost的Port端口
const port = 3000
//連接MySQL的設定
const DBconnection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '830802',
  database : 'art'
});
// //避免CORS同源政策阻擋，設為"*"表示允許所有地址呼叫，這邊設置客戶端的URL表示僅允許該端存取
// let allowCrossDomain = function(req, res, next) {
//   res.header('Access-Control-Allow-Origin, http://localhost:9000');
//   res.header('Access-Control-Allow-Headers,Content-Type, Authorization');
//   res.header('Access-Control-Allow-Credentials, true');
//   next();
// }
// app.use(allowCrossDomain);

app.use(cors({credentials: true, origin: 'http://localhost:9000'}));
app.get('/', function (req, res) {
    //MySQL連線，連線成功將 Schema:art_item 的資料送到Server端
    DBconnection.query('SELECT * FROM art_item', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
});

io.on('connection', socket => {
  console.log('User connected')

  socket.on('change color', (color) => {
  console.log('Color Changed to: ', color)
  io.sockets.emit('change color', color)
  })
  //出價廣播
  socket.on('bidding',(price) => {
    console.log('Bidding NT$ ', price)
    io.sockets.emit('bidding', price)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected')
  })
});

// 啟動伺服器
server.listen(port, () => console.log(`Listening on port ${port}`))





