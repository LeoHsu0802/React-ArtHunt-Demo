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

app.use(cors({credentials: true, origin: 'http://localhost:9000'}));
app.get('/', function (req, res) {
    //MySQL連線，連線成功將 Schema:art_item 的資料送到Server端
    DBconnection.query('SELECT * FROM art_item', function (error, results, fields) {
      if (error) throw error;
      res.send(results)
    });
});

io.on('connection', socket => {
  //console.log('User connected')

  //出價接收
  socket.on('bidding',(data) => {
    console.log("Item ID:",data.id,"| New Bid NT$ ",data.price | "User Name:",data.user )

    //出價廣播
    io.sockets.emit('bidding', data)
  })

  socket.on('disconnect', () => {
  })
});

// 啟動伺服器
server.listen(port, () => console.log(`Listening on port ${port}`))





