import React, { FC, useState } from "react";
import ReactPaginate, { ReactPaginateProps } from "react-paginate";

import { LeftArrowIcon } from "@/shared/lib/icons";
import { Container, PostCard } from "@/shared/ui/atoms";

import * as S from "./styles";

const ReactPaginateComponent = ReactPaginate as unknown as React.FC<ReactPaginateProps>;

export const MainPage: FC = () => {
  const posts = [
    {
      _id: "1",
      image: "/images/testPreviewPhoto.png",
      title: "Уроки лидерства от Билла Уолша",
      date: "1 Янв 2023",
      firstname: "Алексей",
      surname: "Иванов",
      shortDesc: "Узнайте секреты превращения команды с 2-14 в 3-кратных победителей Супербоула.",
    },
    {
      _id: "2",
      image: "/images/testPreviewPhoto.png",
      title: "Искусство войны в бизнесе",
      date: "5 Фев 2023",
      firstname: "Светлана",
      surname: "Петрова",
      shortDesc: "Применение стратегий Сунь Цзы к современным бизнес-задачам.",
    },
    {
      _id: "3",
      image: "/images/testPreviewPhoto.png",
      title: "Осознанность для продуктивности",
      date: "12 Мар 2023",
      firstname: "Дмитрий",
      surname: "Сидоров",
      shortDesc: "Как практики осознанности повышают эффективность работы.",
    },
    {
      _id: "4",
      image: "/images/testPreviewPhoto.png",
      title: "Исследуя космос",
      date: "22 Апр 2023",
      firstname: "Елена",
      surname: "Кузнецова",
      shortDesc: "Путешествие по последним открытиям в космических исследованиях.",
    },
    {
      _id: "5",
      image: "/images/testPreviewPhoto.png",
      title: "Здоровое питание на бюджете",
      date: "10 Май 2023",
      firstname: "Михаил",
      surname: "Попов",
      shortDesc: "Советы и хитрости для питательных блюд без лишних затрат.",
    },
    {
      _id: "6",
      image: "/images/testPreviewPhoto.png",
      title: "Будущее искусственного интеллекта",
      date: "18 Июн 2023",
      firstname: "Анна",
      surname: "Волкова",
      shortDesc: "Прогнозы и возможности ИИ в нашей жизни.",
    },
    {
      _id: "7",
      image: "/images/testPreviewPhoto.png",
      title: "Путешествие по миру виртуально",
      date: "27 Июл 2023",
      firstname: "Сергей",
      surname: "Соколов",
      shortDesc: "Исследуйте мировые достопримечательности, не выходя из дома.",
    },
    {
      _id: "8",
      image: "/images/testPreviewPhoto.png",
      title: "Основы устойчивого образа жизни",
      date: "15 Авг 2023",
      firstname: "Мария",
      surname: "Лебедева",
      shortDesc: "Простые шаги к снижению экологического следа.",
    },
    {
      _id: "9",
      image: "/images/testPreviewPhoto.png",
      title: "Мастерство кулинарии",
      date: "30 Сен 2023",
      firstname: "Андрей",
      surname: "Козлов",
      shortDesc: "От новичка до шефа: ваш путь к успеху в кулинарии.",
    },
  ];

  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 6;

  const offset = currentPage * postsPerPage;
  const currentPosts = posts.slice(offset, offset + postsPerPage);
  const pageCount = Math.ceil(posts.length / postsPerPage);

  const handlePageClick = ({ selected }: { selected: number }) => {
    setCurrentPage(selected);
  };

  return (
    <Container>
      <S.WrapperMainPage>
        <S.Divider />
        <S.Title>THE BLOG</S.Title>
        <S.Divider />
        <S.TitlePostsList>All blog posts</S.TitlePostsList>
        <S.PostsList>
          {currentPosts.map((post) => (
            <PostCard
              key={post._id}
              image={post.image}
              title={post.title}
              date={post.date}
              firstname={post.firstname}
              surname={post.surname}
              shortDesc={post.shortDesc}
            />
          ))}
        </S.PostsList>
        <ReactPaginateComponent
          previousLabel={
            <S.WrapperPrevBtn>
              <LeftArrowIcon /> Previous
            </S.WrapperPrevBtn>
          }
          nextLabel={
            <S.WrapperNextBtn>
              Next
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
