import React, { Component } from 'react'
import socketIOClient from "socket.io-client";

class pricebidding extends Component {
    constructor(props) {
        super(props)
        //endpoint為server端用於處理socket.io事件 price用於在每次出價時setState
        this.state = {
            endpoint: "http://localhost:3000/",
            price : this.props.price,
            id : this.props.id
        }
        this.bidhandler = this.bidhandler.bind(this);
        this.enterprice = this.enterprice.bind(this);
    }
    //客戶出價輸入判別
    enterprice(e){
        e.preventDefault()
        //當客戶輸入出價時 onChange監聽並提醒，防止出價低於現價
        if(parseInt(this.element.value) < parseInt(this.state.price)){
            console.log("出價太低了!")
        }
    }

    //出價送出判斷處理

    bidhandler(e){
        e.preventDefault()
        const socket = socketIOClient(this.state.endpoint);
        // int(this.element.value)為用戶出價，int(this.state.price)為當前最高價 
        //故出價高於當前最高價時則通過，否則出價失敗
        if(parseInt(this.element.value) > parseInt(this.state.price)){
            //傳到Parent component body.js ----////
            this.props.bidhandler(this.state.price)
            //出價成功則將出價設為當前價位
            this.setState({
                price: this.element.value
            })

            //socket 傳值 "成功的出價" 與 "該商品的id"
            socket.emit('bidding', {price: this.element.value, id: this.props.id}) 
        }else{
            alert('出價需大於現價')
        }
    }
    
    render() {
        //接收來自Socket Server端的價格並SetState
        const socket = socketIOClient(this.state.endpoint);
        socket.on('bidding', (data) => {
            console.log("this is id:",data.id)
            console.log("this is bid price:",data.price)
            if(this.props.id == data.id){
                this.setState({                
                    price:data.price
                })
             }
         
        })
        return (
            <div>
                <span>當前出價 NT${this.state.price} </span>
                <span>出價者:</span>

                <form onSubmit={this.bidhandler}>
                    <input ref={el => this.element = el} type="number" onChange={this.enterprice}></input>
                    <button type="submit">我要出價</button>
                </form> 
            </div>
        )
    }
}

export default pricebidding

