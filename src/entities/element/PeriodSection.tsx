import Period from "./Period";
import Result, { ResultContainer } from "./Result";
import { MdOutlinePeopleOutline } from "react-icons/md";
import { PiNotePencil } from "react-icons/pi";
import { LiaVoteYeaSolid } from "react-icons/lia";

interface PeriodSectionProps {
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

export const PeriodSection = ({ dateInfo, investInfo }: PeriodSectionProps) => {
  const currentDate = new Date().toISOString().split("T")[0]; // 현재 날짜 (YYYY-MM-DD)

  const isNow = (start: string, end: string): boolean => {
    return currentDate >= start && currentDate <= end;
  };

  return (
    <div>
      <Period
        content={"체험 신청 기간"}
        isNow={isNow(dateInfo.eventStart, dateInfo.eventEnd)}
        dateContent={`${dateInfo.eventStart} ~ ${dateInfo.eventEnd}`}
        icon={
          <LiaVoteYeaSolid
            size={24}
            color={
              isNow(dateInfo.eventStart, dateInfo.eventEnd)
                ? "white"
                : "#0500FF"
            }
          />
        }
      />
      <Period
        content="당첨자 발표"
        isNow={isNow(dateInfo.releaseStart, dateInfo.releaseEnd)}
        dateContent={`${dateInfo.releaseStart} ~ ${dateInfo.releaseEnd}`}
        icon={
          <MdOutlinePeopleOutline
            size={24}
            color={
              isNow(dateInfo.releaseStart, dateInfo.releaseEnd)
                ? "white"
                : "#0500FF"
            }
          />
        }
      />
      {isNow(dateInfo.releaseStart, dateInfo.releaseEnd) && (
        <Result investInfo={investInfo} />
      )}
      <Period
        content="후기 작성 기간"
        isNow={isNow(dateInfo.feedbackStart, dateInfo.feedbackEnd)}
        dateContent={`${dateInfo.feedbackStart} ~ ${dateInfo.feedbackEnd}`}
        icon={
          <PiNotePencil
            size={24}
            color={
              isNow(dateInfo.feedbackStart, dateInfo.feedbackEnd)
                ? "white"
                : "#0500FF"
            }
          />
        }
      />
      {isNow(dateInfo.releaseStart, dateInfo.releaseEnd) && (
        <ResultContainer>
          정해진 기한 내에 제출해야 하며, 이를 준수하지 않을 경우
          <span style={{ fontWeight: "bold" }}> 패널티</span>가 적용될 수 있으니
          유의하시기 바랍니다.
        </ResultContainer>
      )}
      {currentDate >= dateInfo.endDate && investInfo.penalty ? (
        <ResultContainer>
          리뷰가 기준에 미달하여
          <span style={{ fontWeight: "bold", color: "red" }}> 패널티</span>가
          부과되었습니다.
          <a href="">
            <div style={{ textAlign: "center" }}>
              {"패널티 사유 확인하기 >"}
            </div>
          </a>
        </ResultContainer>
      ) : null}
    </div>
  );
};
