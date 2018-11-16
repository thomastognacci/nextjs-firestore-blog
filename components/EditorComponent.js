import React, {Component} from "react";
import dynamic from "next/dynamic";
import {EditorState} from "draft-js";
import StyledEditor from "./styles/StyledEditor";
import {uploadImageToFirebase} from "../lib/uploadToFirebase";

const Editor = dynamic(import("react-draft-wysiwyg").then((module) => module.Editor), {
  ssr: false,
});

const uploadImageCallBack = uploadImageToFirebase;

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
          onEditorStateChange={this.onEditorStateChange}
          toolbar={{
            options: ["inline", "blockType", "image", "history"],
            inline: {options: ["bold", "italic", "underline"]},
            blockType: {
              options: ["Normal", "H2", "H3"],
            },
            image: {
              uploadCallback: uploadImageCallBack,
              previewImage: true,
              alt: {present: true, mandatory: true},
            },
          }}
        />
      </StyledEditor>
    );
  }
}

export default EditorComponent;
