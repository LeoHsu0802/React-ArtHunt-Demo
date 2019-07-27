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

=======
    this.state = { posts: [] }
    fetch('http://localhost:3000/')
    .then((response) => {
        console.log(response)
        return response.json()
        //return response.text()
    }).then((myJson) => {
        console.log(myJson)
    })
  }

  render() {
    return (
      <div>
      Hello World
      <ul>
        {this.state.posts.map(post => 
        <h2>{post.title}</h2>}
      </ul>
    </div>);
>>>>>>> 896a6b79b9d9fe381ef86318f7eb63338170d342
  }
}

export default fetchdata
