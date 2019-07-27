import React, { Component } from 'react'

class fetchdata extends Component {
//建立items來放資料，isLoaded判斷是否成功取到
  constructor(props) {
    super(props);
<<<<<<< HEAD
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
          <div>
            <ul>
               {items.map(item => (
                 <li key={item.id}>
                     Name: {item.name} |
                     EndTime:{item.endtime}
                     <img src ={item.image}></img>   
                </li>
               ))}
            </ul>
          </div>
        )
      }
}

export default fetchdata
