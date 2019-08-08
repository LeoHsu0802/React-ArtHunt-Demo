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

    //輸入出價判斷
    enterprice(e){
        e.preventDefault()
        if(parseInt(this.element.value) < parseInt(this.state.price)){
            console.log("出價太低了!")
        }
    }

    //出價送出判斷處理
    bidhandler(e){
        e.preventDefault()
        const socket = socketIOClient(this.state.endpoint);
        //若出價大於現在最高價則更改價格，否則無法成功出價
        if(parseInt(this.element.value) > parseInt(this.state.price)){
            this.props.bidhandler(this.state.price)
            this.setState({
                price: this.element.value
            })
            console.log(this.element.value)
            console.log(this.state.id)
            //將高於現價的出價送到Socket Server端
            socket.emit('bidding', this.element.value) 
        }else{
            alert('出價需大於現價')
        }
    }

    render() {
        //接收來自Socket Server端的價格並SetState
        const socket = socketIOClient(this.state.endpoint);
        socket.on('bidding', (bidprice) => {
            this.setState({                
                price:bidprice
            })
        })
        return (
            <div>
                <span>NT${this.state.price}</span>
                <span>出價者:LEO</span>

                <form onSubmit={this.bidhandler}>
                    <input ref={el => this.element = el} type="number" onChange={this.enterprice}></input>
                    <button type="submit">我要出價</button>
                </form> 
            </div>
        )
    }
}

export default pricebidding

