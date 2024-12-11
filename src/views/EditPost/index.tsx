import { ContentState, convertToRaw, EditorState } from "draft-js";
import draftToHtml from "draftjs-to-html";
import { useUnit } from "effector-react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { FC, useEffect, useState } from "react";

import { $post, $updatePostLoading, clearPost, getPost, updatePost } from "@/entities/posts/model";
import { CreatePostProps } from "@/entities/posts/model/types";
import { Button, Input, Loader, Textarea } from "@/shared/ui/atoms";

import * as S from "./styles";

let htmlToDraft: any;

if (typeof window !== "undefined") {
  import("html-to-draftjs").then((mod) => {
    htmlToDraft = mod.default || mod;
  });
}

const TextEditor = dynamic<any>(
  () => import("../../shared/ui/molecules/TextEditor").then((mod) => mod.TextEditor),
  { ssr: false },
);

export const EditPostPage: FC = () => {
  const router = useRouter();
  const post = useUnit($post);
  const updatePostLoading = useUnit($updatePostLoading);

  const [editorState, setEditorState] = useState(EditorState.createEmpty());
  const [preview, setPreview] = useState("");

  const [title, setTitle] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [previewImage, setPreviewImage] = useState("");

  const postId = Array.isArray(router.query.id) ? router.query.id[0] : router.query.id;

  useEffect(() => {
    if (postId) getPost({ id: postId });

    return () => clearPost();
  }, [postId]);

  const handleEditorChange = (state: EditorState) => {
    setEditorState(state);
    setPreview(draftToHtml(convertToRaw(state.getCurrentContent())));
  };

  useEffect(() => {
    if (post && htmlToDraft) {
      setTitle(post.title);
      setShortDesc(post.shortDesc);
      setPreviewImage(post.previewImage || "");

      // Инициализируем контент редактора
      const blocksFromHtml = htmlToDraft(post.content || "");
      const contentState = ContentState.createFromBlockArray(blocksFromHtml.contentBlocks);
      setEditorState(EditorState.createWithContent(contentState));
      setPreview(post.content || "");
    }
  }, [post]);

  const handleSave = () => {
    if (postId) {
      updatePost({
        id: postId,
        payload: {
          title,
          shortDesc,
          previewImage,
          content: preview,
        } as CreatePostProps,
      });
      router.push(`/posts/${postId}`);
    }
  };

  return (
    <S.Wrapper>
      <S.Title>Редактирование поста</S.Title>
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
      {/* Поле для превью картинки */}
      <Input
        label="Превью картинка"
        placeholder="Введите URL превью картинки"
        value={previewImage}
        onChange={(e) => setPreviewImage(e.target.value)}
      />
      <br />
      {/* @ts-ignore */}
      <TextEditor editorState={editorState} onEditorStateChange={handleEditorChange} />
      <S.WrapperButton>
        <Button stretch onClick={handleSave}>
          Сохранить изменения {updatePostLoading && <Loader style={{ marginLeft: 6 }} />}
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
