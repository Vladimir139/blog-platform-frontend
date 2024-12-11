import { useUnit } from "effector-react";
import { useRouter } from "next/router";
import React, { FC, useEffect } from "react";

import { $post, clearPost, getPostFx } from "@/entities/posts/model";
import { Container } from "@/shared/ui/atoms";

import * as S from "./styles";

export const PostPage: FC = () => {
  const router = useRouter();
  const post = useUnit($post);

  useEffect(() => {
    const postId = Array.isArray(router.query.id) ? router.query.id[0] : router.query.id;

    if (postId) {
      getPostFx({ id: postId });
    }

    return () => {
      clearPost();
    };
  }, [router.query.id]);

  if (!post) return <div>Загрузка...</div>;

  return (
    <Container>
      <S.WrapperPost>
        <h2>{post.title}</h2>
        <br />
        <p>{post.shortDesc}</p>
        <br />
        <div style={{ fontSize: 18, lineHeight: "20px", color: "#169cff" }}>
          <strong>Автор:</strong> {post.author.firstName} {post.author.lastName}&nbsp;<b>·</b>&nbsp;
          Обновлено: {new Date(post.updatedAt).toLocaleDateString()}
        </div>
        <br />
        <br />
        <div dangerouslySetInnerHTML={{ __html: post.content }} />
      </S.WrapperPost>
    </Container>
  );
};
