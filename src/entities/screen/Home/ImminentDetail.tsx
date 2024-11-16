import { DdayCard } from "@/entities";
import { DivLine, PageWrapper, TitleContainer, NewCard } from "@/entities";
import styled from "@emotion/styled";

export const ImminentDetail = () => {
  return (
    <PageWrapper>
      <TitleContainer>
        <div>
          <h1>체험 신청 마감 임박</h1>
        </div>
      </TitleContainer>

      <DdayCardWrapper>
        {DdayHotCardList.map((card) => (
          <DdayCard key={card.id} {...card} />
        ))}
      </DdayCardWrapper>
      <DivLine />

      <TitleContainer>
        <div>
          <h1>빠르게 신청해 보세요!</h1>
        </div>
      </TitleContainer>

      <NewCardWrapper>
        {NewCardList.map((card) => (
          <NewCard key={card.id} {...card} type="imminent" />
        ))}
      </NewCardWrapper>
    </PageWrapper>
  );
};

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
