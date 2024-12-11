import { convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { useUnit } from "effector-react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";

import { $createPostLoading, createPost, createPostFx } from "@/entities/posts/model";
import { Button, Input, Loader, Textarea } from "@/shared/ui/atoms";

import * as S from "./styles";

const TextEditor = dynamic<any>(
  () => import("../../shared/ui/molecules/TextEditor").then((mod) => mod.TextEditor),
  { ssr: false },
);

export const CreatePostPage: FC = () => {
  const router = useRouter();
  const createPostLoading = useUnit($createPostLoading);

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [preview, setPreview] = useState("");
  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  useEffect(() => {
    createPostFx.doneData.watch(() => {
      router.push("/");
    });
  }, [router]);

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
    setPreview(draftToHtml(convertToRaw(state.getCurrentContent())));
  };

  const handleCreatePost = () => {
    const content = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    if (!title || !shortDesc || !content) {
      alert("Пожалуйста, заполните все поля");
      return;
    }

    createPost({
      title,
      featured: false,
      shortDesc,
      content,
      previewImage,
    });
  };

  return (
    <S.Wrapper>
      <S.Title>Создание поста</S.Title>
      <br />
      {/* Поле для заголовка */}
      <Input
        label="Заголовок поста"
        placeholder="Введите заголовок поста"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      {/* Поле для краткого описания */}
      <Textarea
        label="Краткое описание поста"
        placeholder="Введите краткое описание поста"
        value={shortDesc}
        onChange={(e) => setShortDesc(e.target.value)}
      />
      <br />
      {/* Поле для Превью картинки */}
      <Input
        label="Превью картинка поста"
        placeholder="Введите url превью картинки"
        value={previewImage}
        onChange={(e) => setPreviewImage(e.target.value)}
      />
      <br />
      <br />
      {/* @ts-ignore */}
      <TextEditor editorState={editorState} onEditorStateChange={handleEditorChange} />
      <S.WrapperButton>
        <Button stretch onClick={handleCreatePost}>
          Создать пост {createPostLoading && <Loader style={{ marginLeft: 6 }} />}
        </Button>
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
