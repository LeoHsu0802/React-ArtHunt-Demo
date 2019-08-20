import React, { Component } from 'react'
import Modal from 'react-modal';
import Alert from 'react-bootstrap/Alert'
import './Login.css'

export class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalIsOpen: true,
            waring:"",
            username:""
        }
        this.openModal = this.openModal.bind(this)
        this.closeModal = this.closeModal.bind(this)
        this.hanelCusName = this.hanelCusName.bind(this)
        this.onchangeName = this.onchangeName.bind(this)
      }
      //關閉彈窗
      openModal() {
        this.setState({modalIsOpen: true})
      }
      //開啟彈窗
      closeModal() {
        this.setState({modalIsOpen: false})
      }
      //onChange 用戶名
      onchangeName(e){
        this.setState({username:e.target.value})
      }
      //送出用戶名
      hanelCusName(e){
        e.preventDefault()
        if (e.target.username.value=="") {
            this.setState({
                warning:"請輸入名稱"
            })
        }else{
        e.preventDefault()
        //props傳出function與值到Body
        this.props.hanelCusName(this.state.username)
        this.closeModal()
        }
      }

      componentWillMount() {
        Modal.setAppElement('body');
     }
  
      render () {

        return (
            <Modal 
               isOpen={this.state.modalIsOpen}
               //onRequestClose={this.closeModal}
               className="loginform"
               overlayClassName="backdrop"
            >   
                <div>
                    <div className="circle">?</div>
                    <span className="warning">{this.state.warning}</span>
                    <form onSubmit={this.hanelCusName}>
                        <input className="name-input" 
                                type="text" 
                                name="username"
                                placeholder="請輸入暱稱"
                                onChange={this.onchangeName}
                        />
                        <br />
                        <input className="name-btn" type="submit" />
                    </form>
                </div>
            </Modal>
        );
      }
    }

export default Login
