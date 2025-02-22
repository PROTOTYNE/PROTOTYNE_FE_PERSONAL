import styled from "@emotion/styled";
import { colors, My, Shoes } from "@/shared";
import {
  NewCard,
  PageWrapper,
  TitleContainer,
  DivLine,
  HotCard,
} from "@/entities";
import { useState } from "react";

type NewCardProps = "myregister" | "myprize" | "myreview" | "myend";

type TabType = {
  id: number;
  title: string;
  type: NewCardProps;
};

const MyInfoPage = () => {
  const [tab, setTab] = useState<NewCardProps>("myregister");
  const [category, setCategory] = useState("all");
  const percent = 80;

  return (
    <div>
      <Header>
        <Profile>
          <MyImg>
            <My fill="black" stroke="black" />
          </MyImg>
          <div className="profile">
            <div className="name">
              <h2>조서영 님</h2>
              <button>프로필 수정</button>
            </div>
            <p>12개의 티켓으로 총 4개의 시제품을 체험했어요!</p>
          </div>
        </Profile>
        <Speed>
          YOUR SPEED
          <ProgressBar>
            <Progress width={percent} />
            <ShoeImg width={percent}>
              <Ms width={percent}>{percent}m/s</Ms>
              <Shoes />
            </ShoeImg>
          </ProgressBar>
        </Speed>
      </Header>
      <PageWrapper style={{ gap: 0 }}>
        <TitleContainer>
          <h1>나의 시제품 체험</h1>
        </TitleContainer>
        <Tabs>
          {TabContent.map((content) => (
            <p
              key={content.id}
              className={tab === content.type ? "selected" : ""}
              onClick={() => setTab(content.type)}
            >
              {content.title} {content.id}
            </p>
          ))}
        </Tabs>
        <Order>・ 최신순</Order>
        <NewCardWrapper>
          {NewCardList.map((card) => {
            return (
              <>
                <NewCard key={card.id} {...card} type={tab} />
                {tab === "myreview" && (
                  <DeliveryReview delivery>
                    <div id="delivery">배송 완료</div>
                    <div id="review">리뷰 쓰기</div>
                  </DeliveryReview>
                )}
                <DivLine />
              </>
            );
          })}
        </NewCardWrapper>
        <br />
        <TitleContainer>
          <h1>관심 목록</h1>
        </TitleContainer>
        <CategoryTab>
          {Categories.map((content) => (
            <div
              key={content.name}
              className={category === content.type ? "selected" : ""}
              onClick={() => setCategory(content.type)}
            >
              {content.name}
            </div>
          ))}
        </CategoryTab>
        <Order>・ 최신순</Order>
        <CardWrapper>
          {HotCardList.map((card) => (
            <HotCard key={card.id} {...card} />
          ))}
        </CardWrapper>
      </PageWrapper>
    </div>
  );
};

export default MyInfoPage;

const Header = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f6f5ff;
  padding: 20px;
`;

const Profile = styled.div`
  display: flex;
  align-items: center;
  .profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 5px;
    button {
      background-color: transparent;
      border-radius: 6px;
      border: 0.5px solid #8e8e8e;
      color: #8e8e8e;
      text-align: center;
      cursor: pointer;
      width: 83px;
      height: 25px;
    }
    p {
      font-size: 12px;
      color: #2e2e2e;
      margin: 0;
    }
  }
  .name {
    display: flex;
    align-items: center;
    gap: 10px;
    h2 {
      font-size: 18px;
      margin: 0;
    }
  }
`;

const MyImg = styled.div`
  width: 50px;
  height: 50px;
  margin: 10px;
  background-color: #fff;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Speed = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 20px auto 10px auto;
  height: 55px;
  background-color: #fff;
  border-radius: 10px;
  color: #0500ff;
  text-align: center;
  font-family: Pretendard;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 13px;
`;
const ProgressBar = styled.div`
  position: relative;
  width: 60%;
  height: 6px;
  background-color: #f6f5ff;
  border-radius: 12px;
  margin-left: 10px;
`;

const Progress = styled.div<{ width: number }>`
  width: ${(props) => props.width}%;
  height: 6px;
  padding: 0;
  border-radius: 12px;
  text-align: center;
  background-color: ${colors.main};
`;

const ShoeImg = styled.div<{ width: number }>`
  left: ${(props) => props.width - 7}%;
  top: -10px;
  position: absolute;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Ms = styled.div<{ width: number }>`
  position: absolute;
  right: ${(props) => (props.width > 90 ? 55 : 0)}px;
  top: -8px;
  font-size: 10px;
  color: ${colors.main};
  margin-right: 5px;
  font-size: 10px;
  font-weight: normal;
`;

const Tabs = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-right: 20px;
  p {
    cursor: pointer;
    color: #000;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  .selected {
    text-decoration: underline;
    text-underline-offset: 6px;
    text-decoration-thickness: 2px;
  }
`;

const CategoryTab = styled.div`
  display: flex;
  gap: 10px;
  padding: 0 10px 0 0;
  overflow-x: scroll;
  margin-top: 10px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 10px;
    height: 24px;
    border-radius: 6px;
    border: 0.5px solid #000;
    font-size: 14px;
    word-break: keep-all;
  }
  .selected {
    background-color: #0500ff;
    color: #fff;
  }
`;

const Order = styled.div`
  color: #8e8e8e;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: 12px;
`;

const NewCardWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const CardWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px;
  margin-top: 26px;
`;

const DeliveryReview = styled.div<{ delivery: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 28px;
  height: 35px;
  div {
    width: 129px;
    height: 35px;
    border-radius: 9px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    font-weight: 700;
  }
  #delivery {
    background-color: ${(props) =>
      props.delivery ? colors.back : colors.main};
    color: ${(props) => (props.delivery ? colors.black : colors.white)};
  }
  #review {
    background-color: ${(props) =>
      !props.delivery ? colors.back : colors.main};
    color: ${(props) => (!props.delivery ? colors.black : colors.white)};
  }
`;

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
const TabContent: TabType[] = [
  {
    id: 1,
    title: "신청",
    type: "myregister",
  },
  {
    id: 2,
    title: "당첨",
    type: "myprize",
  },
  {
    id: 3,
    title: "후기",
    type: "myreview",
  },
  {
    id: 4,
    title: "종료",
    type: "myend",
  },
];

const Categories = [
  {
    name: "전체",
    type: "all",
  },
  {
    name: "뷰티",
    type: "beauty",
  },
  {
    name: "스포츠",
    type: "sports",
  },
  {
    name: "식품",
    type: "food",
  },
  {
    name: "의류",
    type: "clothes",
  },
  {
    name: "전자기기",
    type: "electronic",
  },
  {
    name: "장난감",
    type: "toy",
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
