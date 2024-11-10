import {
  Star,
  RightArr,
  New,
  Sports,
  Food,
  Clothes,
  Electronic,
  Toy,
} from "@/shared";
import { colors, All, Beauty } from "@/shared";
import styled from "@emotion/styled";
import { HotCard, DdayCard, DivLine, NewCard } from "@/entities";

const HomePage = () => {
  return (
    <PageWrapper>
      <TitleContainer>
        <h1>
          시제품 HOT <Star fill={colors.main} style={{ marginLeft: 7 }} />
        </h1>
        <p>
          더보기 <RightArr stroke={colors.main} style={{ marginLeft: 7 }} />
        </p>
      </TitleContainer>
      <CardWrapper>
        {HotCardList.map((card) => (
          <HotCard key={card.id} {...card} />
        ))}
      </CardWrapper>
      <DivLine />
      <CategoryContainer>
        {Categories.map((category, idx) => (
          <>
            <Category key={category.name} onClick={category.onclick}>
              <category.icon />
              {category.name}
            </Category>
            {idx + 1 === Categories.length || <CategoryDivline />}
          </>
        ))}
      </CategoryContainer>
      <DivLine />
      <TitleContainer>
        <h1>체험 신청 마감 임박</h1>
        <p>
          더보기 <RightArr stroke={colors.main} style={{ marginLeft: 7 }} />
        </p>
      </TitleContainer>
      <DdayCardWrapper>
        {DdayHotCardList.map((card) => (
          <DdayCard key={card.id} {...card} />
        ))}
      </DdayCardWrapper>
      <DivLine />
      <TitleContainer>
        <h1>
          신규 등록된 시제품 <New style={{ marginLeft: 7 }} />
        </h1>
        <p>
          더보기 <RightArr stroke={colors.main} style={{ marginLeft: 7 }} />
        </p>
      </TitleContainer>
      <NewCardWrapper>
        {NewCardList.map((card) => (
          <NewCard key={card.id} {...card} />
        ))}
      </NewCardWrapper>
    </PageWrapper>
  );
};

export default HomePage;

const PageWrapper = styled.div`
  padding: 20px 0 20px 26px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 26px 0 0;
  h1 {
    margin: 0;
    font-size: 21px;
  }
  p {
    font-size: 12px;
  }
`;

const CategoryContainer = styled.div`
  overflow-x: scroll;
  display: flex;
  align-items: center;
  padding-right: 26px;
  gap: 20px;
`;

const CategoryDivline = styled.div`
  min-width: 1px;
  height: 20px;
  background-color: #f6f5ff;
`;

const Category = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 50px;
  gap: 12px;
  font-size: 12px;
`;

const CardWrapper = styled.div`
  overflow-x: scroll;
  display: flex;
  gap: 20px;
`;

const DdayCardWrapper = styled.div`
  overflow-x: scroll;
  display: flex;
  gap: 20px;
`;

const NewCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const HotCardList = [
  {
    id: 1,
    title: "시제품1",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "시제품2",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "시제품3",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "시제품4",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "시제품5",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    title: "시제품6",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    title: "시제품7",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    title: "시제품8",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    title: "시제품9",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    title: "시제품10",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
];
const DdayHotCardList = [
  {
    id: 1,
    title: "시제품1",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "시제품2",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "시제품3",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "시제품4",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "시제품5",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    title: "시제품6",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 7,
    title: "시제품7",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 8,
    title: "시제품8",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 9,
    title: "시제품9",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
  {
    id: 10,
    title: "시제품10",
    company: "company1",
    apply: 100,
    ticket: 2,
    image: "https://via.placeholder.com/150",
  },
];
const NewCardList = [
  {
    id: 1,
    title: "시제품1",
    date: "2021.09.01",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 2,
    title: "시제품2",
    date: "2021.09.01",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 3,
    title: "시제품3",
    date: "2021.09.01",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 4,
    title: "시제품4",
    date: "2021.09.01",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 5,
    title: "시제품5",
    date: "2021.09.01",
    image: "https://via.placeholder.com/150",
  },
  {
    id: 6,
    title: "시제품6",
    date: "2021.09.01",
    image: "https://via.placeholder.com/150",
  },
];

const Categories = [
  {
    name: "전체",
    icon: All,
    onclick: () => {},
  },
  {
    name: "뷰티",
    icon: Beauty,
    onclick: () => {},
  },
  {
    name: "스포츠",
    icon: Sports,
    onclick: () => {},
  },
  {
    name: "식품",
    icon: Food,
    onclick: () => {},
  },
  {
    name: "의류",
    icon: Clothes,
    onclick: () => {},
  },
  {
    name: "전자기기",
    icon: Electronic,
    onclick: () => {},
  },
  {
    name: "장난감",
    icon: Toy,
    onclick: () => {},
  },
];
