import styled from "@emotion/styled";
import { useState } from "react";
import { BsBookmarkCheckFill } from "react-icons/bs";
import { useNavigate } from "react-router";

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
  const navigate = useNavigate();

  const currentDate = new Date().toISOString().split("T")[0]; // 현재 날짜 (YYYY-MM-DD)

  const isNow = (start: string, end: string): boolean => {
    return currentDate >= start && currentDate <= end;
  };

  const handleBookmark = () => {
    setIsBookmark(!isBookmark);
  };

  const handleApply = () => {
    navigate("/addressinfo/:id");
  };

  // 북마크 등록 API 연결

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
        {currentDate < dateInfo.eventStart && (
          <DisableButton>체험 신청하기</DisableButton>
        )}
        {isNow(dateInfo.eventStart, dateInfo.eventEnd) && (
          <Button onClick={handleApply}>체험 신청하기</Button>
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

export const BottomContainer = styled.div`
  width: 100vw;
  height: 100px;
  box-sizing: border-box;
  position: fixed; /* Fixed to the viewport */
  bottom: 80px; /* Stick to the bottom */
  z-index: 10;
  background: #ffffff;
  display: flex;

  justify-content: space-evenly;
  align-items: center;
  box-shadow: 0px -10px 5px -2px rgba(0, 0, 0, 0.05);
`;
