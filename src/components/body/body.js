import React, { Component } from 'react'
import './Body.css'
import Pricebidding from './Pricebidding';
import Login from '../login/Login'

class Body extends Component {
//建立items來放資料，isLoaded判斷是否成功取到
  constructor(props) {
    super(props);
    this.state ={
      items:[],
      CustomerName:'',
    }
    this.hanelCusName=this.hanelCusName.bind(this)
    this.helloCusname=this.helloCusname.bind(this)
  }
  componentDidMount(){
//使用fetch抓取商品資料，放在Item[]中並顯示在localhost:3000
    fetch('http://localhost:3000/', {mode: 'cors'})
      .then(res => res.json())
      .then(json =>{
        this.setState({
            items: json, 
        })
      });
  }
//接收從child (Pricebidding.js)傳來出價成功的商品 price 與 id
  bidhandler(price,id){
    console.log(price,id)
  }
  
//接收Login的客戶暱稱，之後傳入pricebidding做客戶出價用
  hanelCusName(CusName){
    this.setState({
      CustomerName:CusName
    })
  }

  //傳送客戶暱稱到app再到header做打招呼
  helloCusname(){
    this.props.CustomerName(this.state.CustomerName)
  }

  render() {
    //判斷式，若無取得資料則顯示Loading..若取得資料則返回
      const{items} =this.state;
        return (
          <article className='itemContainer'>
              {items.map(item =>(
                  <div key={item.id} className='itemBox'>
                      <img className='itemImg' key={item.id} src ={item.img}></img>
                      <div className='itemText'>
                          <h3 id="itemName">{item.name}</h3>
                          <Pricebidding
                          price={item.price} 
                          id={item.id} 
                          endtime={item.endtime} 
                          bidhandler={this.bidhandler} 
                          CustomerName={this.state.CustomerName}
                          />
                      </div>   
                  </div>  
              ))}
              <Login hanelCusName={this.hanelCusName} />
          </article>

        )
      }
  }

export default Body
