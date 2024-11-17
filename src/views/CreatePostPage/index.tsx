import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import dynamic from "next/dynamic";
import React, { FC, useState } from "react";

import { Button } from "@/shared/ui/atoms";

import * as S from "./styles";

const TextEditor = dynamic<any>(
  () => import("../../shared/ui/molecules/TextEditor").then((mod) => mod.TextEditor),
  { ssr: false },
);

export const CreatePostPage: FC = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [preview, setPreview] = useState("");

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
    setPreview(draftToHtml(convertToRaw(state.getCurrentContent())));
  };

  return (
    <S.Wrapper>
      <S.Title>Создание поста</S.Title>
      {/* @ts-ignore */}
      <TextEditor editorState={editorState} onEditorStateChange={handleEditorChange} />
      <S.WrapperButton>
        <Button stretch>Создать пост</Button>
      </S.WrapperButton>
      <S.Divider />
      <S.Title>Предпросмотр</S.Title>
      {!preview ? (
        <S.NothingText>Пока здесь ничего нет :(</S.NothingText>
      ) : (
        <S.PreviewBlockContent dangerouslySetInnerHTML={{ __html: preview }} />
      )}
    </S.Wrapper>
  );
};
