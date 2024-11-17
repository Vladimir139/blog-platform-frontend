import React, { FC } from "react";
import { Editor } from "react-draft-wysiwyg";

import { TextEditorProps } from "./types";

export const TextEditor: FC<TextEditorProps> = ({ editorState, onEditorStateChange }) => (
  <div
    style={{
      border: "1px solid #ddd",
      padding: "10px",
      minHeight: "300px",
      position: "relative",
      zIndex: 1,
    }}
  >
    <Editor
      editorState={editorState}
      onEditorStateChange={onEditorStateChange}
      toolbar={{
        options: [
          "inline",
          "blockType",
          "fontSize",
          "list",
          "textAlign",
          "colorPicker",
          "link",
          "emoji",
          "image",
          "history",
        ],
        inline: { inDropdown: true },
        list: { inDropdown: true },
        textAlign: { inDropdown: true },
        link: { inDropdown: true },
        history: { inDropdown: true },
      }}
    />
  </div>
);
