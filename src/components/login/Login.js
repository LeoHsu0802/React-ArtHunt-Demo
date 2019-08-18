import React, { Component } from 'react'
import Modal from 'react-modal';
import './Login.css'


export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: true
        }
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
      }

      openModal() {
        this.setState({modalIsOpen: true});
      }
    
      closeModal() {
        this.setState({modalIsOpen: false});
      }
  
      render () {
        return (
            <Modal 
               isOpen={this.state.modalIsOpen}
               onRequestClose={this.closeModal}
               className="loginform"
               overlayClassName="backdrop"
            >   
                <div>
                    <div className="circle">?</div>
                    <form>
                        <input className="name-input" type="text" placeholder="請輸入暱稱"></input>
                        <br />
                        <input className="name-btn" type="submit"></input>
                    </form>
                </div>
            </Modal>
        );
      }
    }

export default Login
