import React, {Component} from "react";
import dynamic from "next/dynamic";
import {EditorState} from "draft-js";
import StyledEditor from "./styles/StyledEditor";

const Editor = dynamic(import("react-draft-wysiwyg").then((module) => module.Editor), {
  ssr: false,
});

class EditorComponent extends Component {
  state = {
    editorState: EditorState.createEmpty(),
  };

  onEditorStateChange = (editorState) => {
    this.setState({
      editorState,
    });
  };

  render() {
    const {editorState} = this.state;
    return (
      <StyledEditor>
        <Editor
          editorState={editorState}
          wrapperClassName="demo-wrapper"
          editorClassName="demo-editor"
          onEditorStateChange={this.onEditorStateChange}
          toolbar={{
            options: ["inline", "blockType", "image", "history"],
            inline: {options: ["bold", "italic", "underline"]},
            blockType: {
              options: ["Normal", "H2", "H3"],
            },
          }}
        />
      </StyledEditor>
    );
  }
}

export default EditorComponent;
