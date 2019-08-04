import React, { Component } from 'react'
import socketIOClient from "socket.io-client";

class pricebidding extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            endpoint: "http://localhost:3000/",
            price : 0
        }
    }
    
    render() {
        return (
            <div>
                 <span>{this.props.price.toLocaleString("en-US", { style: "currency", currency: "TWD" })}</span>
                 <span>出價者:</span>
                 <form>
                    <input type="number" onfocus="this.value=''"></input>
                    <button type="submit">我要出價</button>
                </form> 
            </div>
        )
    }
}

export default pricebidding

