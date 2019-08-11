import React, { Component } from 'react'
import Logo from '../../image/headlogo.png'
import './Header.css'
import { Link } from 'react-router-dom'

export class header extends Component {
    render() {
        return (
            <div className="header">
                <img src={Logo} alt="Logo"/>
                <div className="router-page">
                    <Link to='./home' className="router-page-name">
                        <a>Home </a>
                    </Link>
                    <Link to='./about' className="router-page-name">
                        <a>About </a>
                    </Link>
                    <Link to='./' className="router-page-name">
                        <a>Art </a>
                    </Link>
                </div>
            </div>
        )
    }
}

export default header
