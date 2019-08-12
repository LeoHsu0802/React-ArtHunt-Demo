import React, { Component } from 'react'
import './Body.css'
import Countdown from './Countdown'
import Pricebidding from './Pricebidding';

class Body extends Component {
//建立items來放資料，isLoaded判斷是否成功取到
  constructor(props) {
    super(props);
    this.state ={
      items:[],
      isLoaded: false,
      endid:''
    }
  }
  componentDidMount(){
//使用fetch抓取商品資料，放在Item[]中並顯示在localhost:3000
    fetch('http://localhost:3000/', {mode: 'cors'})
      .then(res => res.json())
      .then(json =>{
        this.setState({
            isLoaded: true,
            items: json, 
        })
      });
  }
//接收從child (Pricebidding.js)傳來出價成功的商品 price 與 id
  bidhandler(price,id){
    console.log(price,id)
  }
//接收從child (Countdown.js)傳入的結束商品ID(endid)並做處理
  gameover(endid){
    console.log(endid)
  }

  render() {
    //判斷式，若無取得資料則顯示Loading..若取得資料則返回
      var{isLoaded, items} =this.state;
      if(!isLoaded){
        return<div>Loading...</div>;
      }
      else{ 
        return (
          <article className='itemContainer'>
              {items.map(item =>(
                  <div key={item.id} className='itemBox'>
                      <img className='itemImg' key={item.id} src ={item.img}></img>
                      <div className='itemText'>
                          <h3 id="itemName">{item.name}</h3>
                          <Countdown date={item.endtime} id={item.id} gameover={this.gameover} />
                          <Pricebidding price={item.price} id={item.id} bidhandler={this.bidhandler} />
                      </div>   
                  </div>  
              ))}
          </article>

        )
      }
  }
}

export default Body
