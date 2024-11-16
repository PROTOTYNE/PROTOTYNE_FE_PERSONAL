import Period from "./Period";

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
}

const PeriodSection = ({ dateInfo }: PeriodSectionProps) => {
  const currentDate = new Date().toISOString().split("T")[0]; // 현재 날짜 (YYYY-MM-DD)

  // 특정 기간이 현재인지 확인하는 함수
  const isNow = (start: string, end: string): boolean => {
    return currentDate >= start && currentDate <= end;
  };

  return (
    <div>
      <Period
        content="체험 신청 기간"
        isNow={isNow(dateInfo.eventStart, dateInfo.eventEnd)}
        dateContent={`${dateInfo.eventStart} ~ ${dateInfo.eventEnd}`}
      />
      <Period
        content="제품 출시 기간"
        isNow={isNow(dateInfo.releaseStart, dateInfo.releaseEnd)}
        dateContent={`${dateInfo.releaseStart} ~ ${dateInfo.releaseEnd}`}
      />
      <Period
        content="피드백 작성 기간"
        isNow={isNow(dateInfo.feedbackStart, dateInfo.feedbackEnd)}
        dateContent={`${dateInfo.feedbackStart} ~ ${dateInfo.feedbackEnd}`}
      />
    </div>
  );
};

export default PeriodSection;
