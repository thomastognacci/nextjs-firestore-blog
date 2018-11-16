import React, {Component} from "react";

class Posts extends Component {
  render() {
    return (
      <ul>
        <li>
          <h2 style={{marginBottom: 0}}>Post title</h2>
          <div>Post content</div>
        </li>
        <li>
          <h2 style={{marginBottom: 0}}>Post title</h2>
          <div>Post content</div>
        </li>
        <li>
          <h2 style={{marginBottom: 0}}>Post title</h2>
          <div>Post content</div>
        </li>
      </ul>
    );
  }
}

export default Posts;
