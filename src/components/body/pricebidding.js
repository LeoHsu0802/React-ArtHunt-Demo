import React, { Component } from 'react'
import socketIOClient from "socket.io-client";
import Countdown from 'react-countdown-now';
import './Pricebidding.css' 

class Pricebidding extends Component {
    constructor(props) {
        super(props)
        //endpoint為server端用於處理socket.io事件 price用於在每次出價時setState
        this.state = {
            endpoint: "http://localhost:3000/",
            price : this.props.price,
            bidprice : '',
            id : this.props.id,
            showItem: true,
        }
        this.bidhandler = this.bidhandler.bind(this);
        this.enterprice = this.enterprice.bind(this);
        this.renderer = this.renderer.bind(this);
    }
    //客戶出價輸入判別
    enterprice(e){
        e.preventDefault()
        this.setState({bidprice: e.target.value})
        //當客戶輸入出價時 onChange，並在輸入價格低於現價時做出提醒
        
        if(parseInt(this.state.bidprice) < parseInt(this.state.price)){
            console.log(this.props.id)
            console.log("出價太低了!")
        }

        
    }
    
    //出價送出判斷處理
    bidhandler(e){
        e.preventDefault()
        const socket = socketIOClient(this.state.endpoint);
        // int(this.element.value)為用戶出價，int(this.state.price)為當前最高價 
        //故出價高於當前最高價時則通過，否則出價失敗
        if(parseInt(this.state.bidprice) > parseInt(this.state.price)){
            //將bidhandler的Fuction與參數傳出到Parent(Body.js)
            this.props.bidhandler(this.state.bidprice,this.props.id)
            //出價成功則將出價設為當前價位
            this.setState({
                price: this.state.bidprice
            })
            //socket 傳值 "成功的出價" 與 "該商品的id"
            socket.emit('bidding', {price: this.state.bidprice, id: this.props.id}) 
        }else{
            console.log('出價需大於現價')
        }   
    }
    
    // 倒數計時
    renderer({ days, hours, minutes, seconds, completed }) {
        if (completed) {
            return <span>此拍賣品已結束</span>
        } else {
            // Render a countdown
            return <a>還剩下{days}日{hours}時{minutes}分{seconds}秒</a>
        }
    }

    render() {
        const socket = socketIOClient(this.state.endpoint);
        socket.on('bidding', (data) => {
            console.log("this is id:",data.id)
            console.log("this is bid price:",data.price)
            //接收最新出價，若商品ID相同則改變該商品最新價格
            if(this.props.id == data.id){
                this.setState({                
                    price:data.price
                })
             }
        })
         return (
            <div>
                <div className="now-price">
                    <Countdown className="countdown" date={this.props.endtime} renderer={this.renderer}/>
                    <br/> 
                    <span id="now-high">NT$ {parseInt(this.state.price).toLocaleString()}</span>
                    <span className="now-price">出價者:</span>
                </div>

                <form className="bidform" onSubmit={this.bidhandler}>
                    <input className="bid-price" 
                            value={this.state.bidprice} 
                            type="text"
                            pattern="[0-9]*"
                            onChange={this.enterprice}>    
                    </input>
                    <button className="bid-btn" type="submit">出價</button>
                    <span>{this.state.bidprompt}</span>
                </form>
            </div>
        )
    }
}

export default Pricebidding