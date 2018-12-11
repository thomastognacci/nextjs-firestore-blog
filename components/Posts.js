import React, {Component} from "react";
import Post from "./Post";
class Posts extends Component {
  render() {
    return (
      <ul style={{listStyle: "none", padding: 0}}>
        <li>
          <Post theStory={this.props.theStory} isAdmin={this.props.isAdmin} />
        </li>
      </ul>
    );
  }
}

export default Posts;
