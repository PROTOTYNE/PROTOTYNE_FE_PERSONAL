import { colors, My, TicketImg } from "@/shared";
import styled from "@emotion/styled";

interface NewCardProps {
  id: number;
  title: string;
  date: string;
  image: string;
  type?:
    | "new"
    | "hot"
    | "imminent"
    | "myregister"
    | "myprize"
    | "myreview"
    | "myend";
}

const HotInfo = () => {
  return (
    <div className="right-info">
      <div id="people">
        <My fill="#0500FF" stroke="#0500FF" />
        <div>85</div>
      </div>
      <div id="ticket">
        <TicketImg />
        <div>X 2개</div>
      </div>
    </div>
  );
};

const ImminentInfo = () => {
  return (
    <div className="right-info">
      <div id="dday">D-2</div>
      <div id="ticket">
        <TicketImg />
        <div>X 2개</div>
      </div>
    </div>
  );
};

const MyRegisterInfo = () => {
  return (
    <div className="dday">
      <div id="title">발표일</div>
      <div id="day">D-15</div>
    </div>
  );
};

const MyPrizeInfo = () => {
  return true ? (
    <div className="unprize">
      <div id="title">미당첨</div>
    </div>
  ) : (
    <div className="prize">
      <div id="title">당첨</div>
    </div>
  );
};
const MyEndInfo = () => {
  return true ? (
    <div className="unend">
      <div id="title">페널티</div>
    </div>
  ) : (
    <div className="end">
      <div id="title">완료</div>
    </div>
  );
};

export const NewCard = ({ title, date, image, type }: NewCardProps) => {
  return (
    <CardContainer>
      <ImageBox>
        <img src={image} alt="new card" />
      </ImageBox>
      <DescContainer>
        <p id="title">{title}</p>
        <p id="date">결과 발표일: {date}</p>
      </DescContainer>
      {(() => {
        switch (type) {
          case "hot":
            return <HotInfo />;
          case "imminent":
            return <ImminentInfo />;
          case "myregister":
            return <MyRegisterInfo />;
          case "myprize":
            return <MyPrizeInfo />;
          case "myend":
            return <MyEndInfo />;
          default:
            return null;
        }
      })()}
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  padding-right: 30px;
  justify-content: space-between;
  font-weight: 700;
  .right-info {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
    margin-right: 22px;
    flex-direction: column;
    gap: 6px;
    #dday {
      font-size: 13px;
      color: white;
      background-color: ${colors.main};
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: bold;
      width: 54px;
      height: 22px;
      border-radius: 3px;
    }
    #ticket {
      display: flex;
      align-items: start;
      font-size: 12px;
      color: #667197;
      div {
        padding-top: 2px;
      }
    }
  }
  .dday {
    width: 59px;
    height: 59px;
    border-radius: 50%;
    background-color: ${colors.back};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    #title {
      font-size: 12px;
      color: #8e8e8e;
    }
    #day {
      font-size: 14px;
      font-weight: bold;
    }
  }
  .prize {
    width: 59px;
    height: 59px;
    border-radius: 50%;
    background-color: ${colors.back};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    #title {
      font-size: 12px;
      color: #000;
    }
  }
  .unprize {
    width: 59px;
    height: 59px;
    border-radius: 50%;
    background-color: ${colors.main};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    #title {
      font-size: 12px;
      color: ${colors.white};
    }
  }
  .unend {
    width: 59px;
    height: 59px;
    border-radius: 50%;
    background-color: ${colors.back};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    #title {
      font-size: 12px;
      color: ${colors.error};
    }
  }
  .end {
    width: 59px;
    height: 59px;
    border-radius: 50%;
    background-color: ${colors.main};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    #title {
      font-size: 12px;
      color: ${colors.white};
    }
  }
`;

const ImageBox = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 9px;
  border: 1px solid #0500ff;
  padding: 10px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  margin-right: auto;
  p {
    margin: 0;
  }
  #title {
    font-size: 14px;
    font-weight: bold;
  }
  #date {
    font-size: 12px;
    color: #bebebe;
  }
`;
