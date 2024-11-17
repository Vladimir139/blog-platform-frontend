import { EditorState } from "draft-js";

export interface TextEditorProps {
  editorState: EditorState;
  onEditorStateChange: (editorState: EditorState) => void;
}
