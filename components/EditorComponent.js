import React, {Component} from "react";
import dynamic from "next/dynamic";
import {EditorState, convertToRaw} from "draft-js";
import StyledEditor from "./styles/StyledEditor";
import {uploadImageToFirebase} from "../lib/uploadToFirebase";
import draftToHtml from "draftjs-to-html";

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
      <>
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
                alignmentEnabled: false,
                uploadCallback: uploadImageCallBack,
                previewImage: true,
                alt: false,
                urlEnabled: false,
                defaultSize: false,
              },
            }}
          />
        </StyledEditor>
        <p>Current content:</p>
        <textarea
          disabled
          style={{width: "100%", minHeight: "15rem"}}
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        />
      </>
    );
  }
}

export default EditorComponent;
