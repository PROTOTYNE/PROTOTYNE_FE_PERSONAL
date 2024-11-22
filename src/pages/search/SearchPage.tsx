import { HotCard, PageWrapper } from "@/entities";
import { CloseCircle, colors, Search } from "@/shared";
import styled from "@emotion/styled";
import { useState } from "react";

const SearchPage = () => {
  const [search, setSearch] = useState("");
  return (
    <PageWrapper>
      <SearchBar>
        <Search stroke="black" strokeWidth={2} />
        <input
          type="text"
          placeholder="조서영님에게 딱 맞는 시제품 찾기!"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </SearchBar>
      {!search ? (
        <>
          <h3 style={{ margin: 0 }}>최근 검색어</h3>
          <SearchResult>
            {SearchContents.map((content) => (
              <SearchCard key={content.id}>
                <p>{content.title}</p>
                <CloseCircle />
              </SearchCard>
            ))}
          </SearchResult>
        </>
      ) : (
        <>
          <p style={{ margin: 0 }}>
            '{search}'에 대한{" "}
            <p style={{ color: colors.main, display: "inline" }}>
              5개의 시제품
            </p>
            이 조회되었습니다!
          </p>
          <CardWrapper>
            {HotCardList.map((card) => (
              <HotCard key={card.id} {...card} />
            ))}
          </CardWrapper>
        </>
      )}
    </PageWrapper>
  );
};

export default SearchPage;

const SearchBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 90%;
  height: 50px;
  border: 2px solid ${colors.main};
  border-radius: 6px;
  padding: 0 5px;
  gap: 12px;
  input {
    width: 80%;
    height: 60%;
    border: none;
    outline: none;
    font-size: 16px;
  }
`;

const SearchResult = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const SearchCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 30px;
  padding: 8px;
  border-radius: 6px;
  gap: 5px;
  background-color: #f6f5ff;
`;
const CardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const SearchContents = [
  {
    id: 1,
    title: "아디다스",
  },
  {
    id: 2,
    title: "나이키",
  },
  {
    id: 3,
    title: "조서영",
  },
];
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
