import React, { Component } from "react";
import Axios from "axios";

export default class LifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      posts: []
    };
  }

  componentDidMount() {
    Axios.get("https://jsonplaceholder.typicode.com/posts").then(response =>
      this.setState({
        posts: response.data
      })
    );

    // this.setState({
    //   posts: response.data
    // });
  }
  render() {
    return (
      <div>
        <h1>LifeCycle</h1>
        {this.state.posts.map(post => {
          return <h3>{post.title}</h3>;
        })}
      </div>
    );
  }
}
