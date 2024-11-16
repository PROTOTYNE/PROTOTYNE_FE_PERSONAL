import styled from "@emotion/styled";
import { useState } from "react";
import { BsBookmarkCheckFill } from "react-icons/bs";

interface DetailBottomProps {
  isBookmarked: boolean;
  dateInfo: {
    eventStart: string;
    eventEnd: string;
    releaseStart: string;
    releaseEnd: string;
    feedbackStart: string;
    feedbackEnd: string;
    judgeStart: string;
    judgeEnd: string;
    endDate: string;
  };
  investInfo: {
    apply: boolean;
    status: string;
    shipping: string;
    transportNum: string;
    penalty: boolean;
  };
}

export const DetailBottom = ({
  dateInfo,
  investInfo,
  isBookmarked,
}: DetailBottomProps) => {
  const [isBookmark, setIsBookmark] = useState(isBookmarked);
  const currentDate = new Date().toISOString().split("T")[0]; // 현재 날짜 (YYYY-MM-DD)

  const isNow = (start: string, end: string): boolean => {
    return currentDate >= start && currentDate <= end;
  };

  const handleBookmark = () => {
    setIsBookmark(!isBookmark);
  };

  return (
    <BottomContainer>
      {isBookmark ? (
        <BsBookmarkCheckFill
          onClick={handleBookmark}
          size={"38px"}
          color="#0500ff"
        />
      ) : (
        <BsBookmarkCheckFill
          onClick={handleBookmark}
          size={"38px"}
          color="#d9d9d9"
        />
      )}

      <div>
        {currentDate < dateInfo.endDate && (
          <DisableButton>체험 신청하기</DisableButton>
        )}
        {isNow(dateInfo.eventStart, dateInfo.eventEnd) && (
          <Button>체험 신청하기</Button>
        )}
        {isNow(dateInfo.eventEnd, dateInfo.releaseStart) && (
          <DisableButton>당첨자 발표 대기 중</DisableButton>
        )}
        {isNow(dateInfo.releaseStart, dateInfo.releaseEnd) &&
          (investInfo.status === "당첨" ? (
            investInfo.shipping === "배송중" ? (
              <DisableButton>배송 중</DisableButton>
            ) : (
              <DisableButton>배송 준비 중</DisableButton>
            )
          ) : (
            <DisableButton>미당첨</DisableButton>
          ))}
        {isNow(dateInfo.feedbackStart, dateInfo.feedbackEnd) && (
          <Button>
            후기 작성하기
            <div style={{ fontSize: "13px" }}>
              ({dateInfo.feedbackStart} ~ {dateInfo.feedbackEnd})
            </div>
          </Button>
        )}
        {currentDate >= dateInfo.endDate && (
          <DisableButton>종료된 체험</DisableButton>
        )}
      </div>
    </BottomContainer>
  );
};

const Button = styled.button`
  padding: 10px;
  width: 255px;
  height: 51px;
  background: #0500ff;
  border: none;
  border-radius: 9px;
  color: white;

  font-size: 18px;
  line-height: 17px;
  /* or 94% */
  text-align: center;
  color: #ffffff;
`;

const DisableButton = styled(Button)`
  background: none;
  background-color: #d9d9d9;
`;

const BottomContainer = styled.div`
  width: 100vw;
  height: 100px;
  box-sizing: border-box;
  /* Rectangle 11188 */
  position: sticky;
  bottom: 0; /* 뷰포트 하단에 고정 */
  z-index: 10; /* 다른 요소 위에 표시 */
  display: block;
  background: #ffffff;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px -10px 5px -2px rgba(0, 0, 0, 0.05);
`;
