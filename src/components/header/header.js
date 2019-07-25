import React, { Component } from 'react'
import Logo from '../../image/headlogo.png'
import './header.css'

export class header extends Component {
    render() {
        return (
            <div className="header">
                <img src={Logo} alt="Logo"/>
            </div>
        )
    }
}

export default header
