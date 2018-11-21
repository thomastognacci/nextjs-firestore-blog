import React, {Component} from "react";
import styled from "styled-components";

const StyledPost = styled.div`
  border: 1px solid grey;
  padding: 1em 2em;
  margin: 1em 0;

  h2 {
    margin: 0;
  }
`;

class Post extends Component {
  render() {
    return (
      <StyledPost>
        <h2 style={{marginBottom: 0}}>Post title</h2>
        <div>Post content</div>
        {this.props.isAdmin && <button>delete</button>}
      </StyledPost>
    );
  }
}

export default Post;
