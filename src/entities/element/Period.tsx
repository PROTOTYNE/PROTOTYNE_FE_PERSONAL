import styled from "@emotion/styled";

interface PeriodProps {
  content: string;
  isNow: boolean;
  dateContent: string;
}

const Period = ({ content, isNow, dateContent }: PeriodProps) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "30px" }}>
      <StyledPeriod isNow={isNow}>
        <div>{content}</div>
      </StyledPeriod>
      <div>{dateContent}</div>
    </div>
  );
};

const StyledPeriod = styled.div<{ isNow: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  margin: 10px 0;
  border-radius: 6px;
  width: 130px;

  background: ${(props) => (props.isNow ? "#0500FF" : "#f6f5ff")};
  color: ${(props) => (props.isNow ? "white" : "#000000")};
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 500;
`;

export default Period;
/* Frame 225 */
