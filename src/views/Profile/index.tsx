import { useUnit } from "effector-react";
import { useRouter } from "next/router";
import React, { FC, useMemo, useState } from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";

import { deletePost } from "@/entities/posts/model";
import { $loadingEditUser, $user, editMe } from "@/entities/user/model";
import { IUser } from "@/entities/user/model/types";
import { api } from "@/shared/lib/api";
import { LeftArrowIcon, UserBigIcon } from "@/shared/lib/icons";
import { Button, Container, Input, Loader, PostCard } from "@/shared/ui/atoms";

import * as S from "./styles";

const ReactPaginateComponent = ReactPaginate as unknown as React.FC<ReactPaginateProps>;

export const ProfilePage: FC = () => {
  const user = useUnit($user);
  const loadingEditUser = useUnit($loadingEditUser);
  const { push } = useRouter();

  const [selectedTypePosts, setSelectedTypePosts] = useState<"myPosts" | "favorites">("myPosts");
  const [currentPage, setCurrentPage] = useState(0);

  const [editableUser, setEditableUser] = useState({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    password: "",
  });

  const isEdited = useMemo(
    () =>
      editableUser.firstName !== user?.firstName ||
      editableUser.lastName !== user?.lastName ||
      editableUser.email !== user?.email,
    [editableUser, user],
  );

  const handleInputChange = (field: string, value: string) => {
    setEditableUser((prev) => ({ ...prev, [field]: value }));
  };

  const getGreeting = (): string => {
    const currentHour = new Date().getHours();

    if (currentHour >= 5 && currentHour < 12) {
      return "Доброе утро";
    }
    if (currentHour >= 12 && currentHour < 18) {
      return "Добрый день";
    }
    if (currentHour >= 18 && currentHour < 22) {
      return "Добрый вечер";
    }
    return "Доброй ночи";
  };

  const postsPerPage = 6;

  const offset = currentPage * postsPerPage;
  const currentPosts = user?.posts?.slice(offset, offset + postsPerPage);
  const pageCount = Math.ceil(user?.posts?.length || 0 / postsPerPage);

  const filteredPosts = useMemo(
    () =>
      currentPosts?.filter((post) => {
        if (selectedTypePosts === "favorites") return post.featured;
        return true;
      }),
    [currentPosts, selectedTypePosts],
  );

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <Container>
      <S.HeaderProfileLine>
        <S.WelcomeInfo>
          <S.TitleWelcome>
            {getGreeting()}, {user?.firstName}
          </S.TitleWelcome>
          <S.DateText>
            {(() => {
              const dateStr = new Date().toLocaleDateString("ru-RU", {
                weekday: "short",
                day: "2-digit",
                month: "long",
                year: "numeric",
              });
              return dateStr.charAt(0).toUpperCase() + dateStr.slice(1);
            })()}
          </S.DateText>
        </S.WelcomeInfo>
        <Button theme="orange" onClick={() => push("/posts/create")}>
          Создать новый пост &nbsp;🎉
        </Button>
      </S.HeaderProfileLine>
      <S.BlockUserInfo>
        <S.DecorBackground />
        <S.InnerWrapperUserInfo>
          <S.Line>
            <S.UserInfo>
              <S.UserPhoto>
                <UserBigIcon />
              </S.UserPhoto>
              <S.WrapperUserData>
                <S.Username>
                  {user?.firstName} {user?.lastName}
                </S.Username>
                <S.UserEmail>{user?.email}</S.UserEmail>
              </S.WrapperUserData>
            </S.UserInfo>
            <S.WrapperUserActions>
              {isEdited && (
                <>
                  <Button theme="orange" onClick={() => editMe(editableUser as IUser)}>
                    Сохранить {loadingEditUser && <Loader style={{ marginLeft: 6 }} />}
                  </Button>
                  <Button
                    onClick={() =>
                      setEditableUser({
                        firstName: user?.firstName || "",
                        lastName: user?.lastName || "",
                        email: user?.email || "",
                        password: "",
                      })
                    }
                  >
                    Очистить
                  </Button>
                </>
              )}
              <Button theme="grey" onClick={() => api.auth.logout()}>
                Выйти
              </Button>
            </S.WrapperUserActions>
          </S.Line>
          <S.WrapperInputs>
            <Input
              stretch
              label="Имя:"
              placeholder="Введите имя"
              onChange={(e) => handleInputChange("firstName", e.target.value)}
              value={editableUser.firstName}
            />
            <Input
              stretch
              label="Фамилия:"
              placeholder="Введите фамилию"
              onChange={(e) => handleInputChange("lastName", e.target.value)}
              value={editableUser.lastName}
            />
            <Input
              stretch
              label="Почта:"
              placeholder="test@gmail.com"
              onChange={(e) => handleInputChange("email", e.target.value)}
              value={editableUser.email}
            />
          </S.WrapperInputs>
        </S.InnerWrapperUserInfo>
      </S.BlockUserInfo>
      <S.TitlePostsList>
        <S.ActiveTitlePostsList
          isActive={selectedTypePosts === "myPosts"}
          onClick={() => setSelectedTypePosts("myPosts")}
        >
          Мои посты
        </S.ActiveTitlePostsList>{" "}
        /{" "}
        <S.ActiveTitlePostsList
          isActive={selectedTypePosts === "favorites"}
          onClick={() => setSelectedTypePosts("favorites")}
        >
          Избранные
        </S.ActiveTitlePostsList>
      </S.TitlePostsList>
      <S.PostsList>
        {filteredPosts?.length ? (
          filteredPosts.map((post) => (
            <PostCard
              onEdit={() => push(`/posts/${post.id}/edit`)}
              onClick={() => {
                push(`/posts/${post.id}`);
              }}
              onDelete={() => {
                deletePost({ id: post.id });
              }}
              key={post.id}
              image={post.previewImage}
              title={post.title}
              date={new Date(post.updatedAt).toLocaleDateString("ru-RU")}
              firstname={post.author.firstName}
              surname={post.author.lastName}
              shortDesc={post.shortDesc}
            />
          ))
        ) : (
          <div>Пока нет постов :(</div>
        )}
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
    </Container>
  );
};
