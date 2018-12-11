import React, {Component} from "react";
import styled from "styled-components";
import draftToHtml from "draftjs-to-html";
import {Editor, EditorState, convertFromRaw} from "draft-js";

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
    editorState: EditorState.createEmpty(),
  };

  componentDidMount() {
    const contentState = convertFromRaw(this.props.theStory);
    const editorState = EditorState.createWithContent(contentState);
    this.setState({editorState});
  }
  render() {
    return (
      <StyledPost>
        <h2 style={{marginBottom: 0}}>Post title</h2>

        {/* <Editor editorState={this.state.editorState} readOnly /> */}

        <div dangerouslySetInnerHTML={{__html: draftToHtml(this.props.theStory)}} />
        {this.props.isAdmin && <button>delete</button>}
      </StyledPost>
    );
  }
}

export default Post;
