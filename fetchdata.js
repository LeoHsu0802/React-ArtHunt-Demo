import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Posts extends Component {
  constructor(props) {
    super(props);
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
  }
}

ReactDOM.render(
  <Posts />,
  mountNode
);