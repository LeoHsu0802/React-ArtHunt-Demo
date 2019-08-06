import React, { Component } from 'react'
import socketIOClient from "socket.io-client";

class pricebidding extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            endpoint: "http://localhost:3000/",
            price : this.props.price
        }
        this.bidhandler = this.bidhandler.bind(this);
    }
    //出價處理
    bidhandler(e){
        e.preventDefault()
        if(this.element.value > this.state.price){
            this.props.bidhandler(this.state.price)
            this.setState({
                price: this.element.value
            })   
        }else{
            alert('出價需大於現價')
        }
    }


    render() {
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

