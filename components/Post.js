import React, {Component} from "react";
import styled from "styled-components";
import {db} from "../lib/firebase";
import draftToHtml from "draftjs-to-html";

const StyledPost = styled.div`
  border: 1px solid grey;
  padding: 1em 2em;
  margin: 1em 0;
  img {
    max-width: 100%;
  }
  h2 {
    margin: 0;
  }
`;

class Post extends Component {
  state = {
    story: null,
  };
  renderPost = () => {
    const ref = db.collection("stories").doc("story-1");

    ref
      .get()
      .then(function(doc) {
        if (doc.exists) {
          return doc.data().content;
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      })
      .then((story) => {
        this.setState({story});
      })
      .catch(function(error) {
        console.log("Error getting document:", error);
      });
  };
  componentDidMount() {
    this.renderPost();
  }
  render() {
    return (
      <StyledPost>
        <h2 style={{marginBottom: 0}}>Post title</h2>
        {draftToHtml(this.state.story)}

        {/* <div dangerouslySetInnerHTML={{__html: this.state.story}} /> */}
        {this.props.isAdmin && <button>delete</button>}
      </StyledPost>
    );
  }
}

export default Post;
