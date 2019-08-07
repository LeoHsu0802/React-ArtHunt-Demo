import React, { Component } from 'react'
import socketIOClient from "socket.io-client";

class pricebidding extends Component {
    constructor(props) {
        super(props)
        //endpoint為server端用於處理socket.io事件 price用於在每次出價時setState
        this.state = {
            endpoint: "http://localhost:3000/",
            price : this.props.price
        }
        this.bidhandler = this.bidhandler.bind(this);
    }
    //出價處理
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
            socket.emit('bidding', this.element.value) 
        }else{
            alert('出價需大於現價')
        }
    }

    render() {
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
                    <input ref={el => this.element = el} type="number" onfocus="this.value=''"></input>
                    <button type="submit">我要出價</button>
                </form> 
            </div>
        )
    }
}

export default pricebidding

