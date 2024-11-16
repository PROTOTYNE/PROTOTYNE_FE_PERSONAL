import { HotCard } from "@/entities";
import { DivLine, PageWrapper, TitleContainer, NewCard } from "@/entities";
import { colors, Star } from "@/shared";
import styled from "@emotion/styled";

export const PopularDetail = () => {
  return (
    <PageWrapper>
      <TitleContainer>
        <div>
          <h1>이번주 베스트</h1>
          <Star fill={colors.main} style={{ marginLeft: 7 }} />
        </div>
      </TitleContainer>

      <CardWrapper>
        {HotCardList.map((card) => (
          <HotCard key={card.id} {...card} />
        ))}
      </CardWrapper>
      <DivLine />

      <TitleContainer>
        <div>
          <h1>HOT 전체 둘러보기</h1>
          <h3>219</h3>
        </div>
      </TitleContainer>

      <NewCardWrapper>
        {NewCardList.map((card) => (
          <NewCard key={card.id} {...card} type="hot" />
        ))}
      </NewCardWrapper>
    </PageWrapper>
  );
};

const CardWrapper = styled.div`
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
