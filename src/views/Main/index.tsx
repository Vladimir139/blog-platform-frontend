import { useUnit } from "effector-react";
import React, { FC, useEffect, useState } from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";

import { $posts, getAllPosts } from "@/entities/posts/model";
import { LeftArrowIcon } from "@/shared/lib/icons";
import { Container, PostCard } from "@/shared/ui/atoms";

import * as S from "./styles";

const ReactPaginateComponent = ReactPaginate as unknown as React.FC<ReactPaginateProps>;

export const MainPage: FC = () => {
  const posts = useUnit($posts);

  console.log("posts", posts);

  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 6;

  const offset = currentPage * postsPerPage;
  const currentPosts = posts.slice(offset, offset + postsPerPage);
  const pageCount = Math.ceil(posts.length / postsPerPage);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  useEffect(() => {
    getAllPosts();
  }, []);

  return (
    <Container>
      <S.WrapperMainPage>
        <S.Divider />
        <S.Title>THE BLOG</S.Title>
        <S.Divider />
        <S.TitlePostsList>Все посты</S.TitlePostsList>
        <S.PostsList>
          {currentPosts.length > 0
            ? currentPosts.map((post) => (
                <PostCard
                  key={post.id}
                  image={post.previewImage}
                  title={post.title}
                  date={new Date(post.updatedAt).toLocaleDateString("ru-RU")}
                  firstname={post.author.firstName}
                  surname={post.author.lastName}
                  shortDesc={post.shortDesc}
                />
              ))
            : "Пока постов нет :("}
        </S.PostsList>
        <ReactPaginateComponent
          previousLabel={
            <S.WrapperPrevBtn>
              <LeftArrowIcon /> Предыдущая
            </S.WrapperPrevBtn>
          }
          nextLabel={
            <S.WrapperNextBtn>
              Следующая
              <LeftArrowIcon />
            </S.WrapperNextBtn>
          }
          breakLabel="..."
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={S.paginationContainer()}
          pageClassName={S.paginationItem()}
          pageLinkClassName={S.paginationLink()}
          activeLinkClassName={S.paginationActiveLink()}
          previousClassName={S.paginationPreviousItem()}
          previousLinkClassName={S.paginationItem()}
          nextClassName={S.paginationNextItem()}
          nextLinkClassName={S.paginationItem()}
          breakClassName={S.paginationBreak()}
          breakLinkClassName={S.paginationBreak()}
          disabledClassName={S.paginationDisabled()}
          activeClassName="active"
          renderOnZeroPageCount={null}
        />
      </S.WrapperMainPage>
    </Container>
  );
};
