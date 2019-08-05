import React, { Component } from 'react'
import socketIOClient from "socket.io-client";

class pricebidding extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            endpoint: "http://localhost:3000/",
            price : this.props.price
        }
        this.bidhandler = this.bidhandler.bind(this)
    }

    bidhandler(e){
        e.preventDefault()
        alert('assa')
 
    }


    render() {
        return (
            <div>
                 <span>{this.state.price.toLocaleString("en-US", { style: "currency", currency: "TWD" })}</span>
                 <span>出價者:13</span>
                 <form>
                    <input type="number" onfocus="this.value=''"></input>
                    <button type="submit" onSubmit={this.bidhandler}>我要出價</button>
                </form> 
            </div>
        )
    }
}

export default pricebidding

