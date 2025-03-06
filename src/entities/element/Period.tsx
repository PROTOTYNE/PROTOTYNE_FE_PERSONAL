import styled from "@emotion/styled";
import { ReactNode } from "react";

interface PeriodProps {
  content: string;
  isNow: boolean;
  dateContent: string;
  icon?: ReactNode; // 아이콘을 prop으로 받음
}

const Period = ({ content, isNow, dateContent, icon }: PeriodProps) => {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
      <StyledPeriod isNow={isNow}>
        {icon && <IconWrapper>{icon}</IconWrapper>}
        <TextWrapper>
          <div>{content}</div>
        </TextWrapper>
      </StyledPeriod>
      <div>{dateContent}</div>
    </div>
  );
};

const StyledPeriod = styled.div<{ isNow: boolean }>`
  display: flex;
  align-items: center;
  padding: 5px;
  margin: 10px 0;
  border-radius: 6px;
  width: 140px;

  background: ${(props) => (props.isNow ? "#0500FF" : "white")};
  color: ${(props) => (props.isNow ? "white" : "black")};
  box-shadow: ${(props) => !props.isNow && "0 0 0 1px #0500FF inset"};

  font-size: 14px;
  font-weight: 500;
`;

const IconWrapper = styled.div`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export default Period;
