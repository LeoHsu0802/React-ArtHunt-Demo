import React, { Component } from 'react'
import './fetchitems.css'

class fetchitems extends Component {
//建立items來放資料，isLoaded判斷是否成功取到
  constructor(props) {
    super(props);
    this.state ={
      items:[],
      isLoaded: false,
    }
  }

  componentDidMount(){
//使用fetch抓取商品資料
    fetch('http://localhost:3000/', {mode: 'cors'})
      .then(res => res.json())
      .then(json =>{
        this.setState({
            isLoaded: true,
            items: json,
        })
      });
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
                 <h3 >{item.name}</h3>
                 <p>{item.price.toLocaleString("en-US", { style: "currency", currency: "TWD" })}</p>
                 <div>剩餘時間:{item.endtime}</div>
                 <from>
                    <input></input>
                    <button>我要出價</button>
                </from>
              </div>  
            ))}
          </article>


        )
      }
  }
}

export default fetchitems
