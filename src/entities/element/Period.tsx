import styled from "@emotion/styled";

const Rectangle = styled.div<{ isSelected?: boolean }>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  display: inline;
  width: 125px;
  height: 20px;
  text-align: center;
  background: #ffffff;
  /* Main */
  border: ${(props) => (props.isSelected ? "" : "0.7px solid #0500FF")};
  border-radius: 6px;

  /* Main */
  background: ${(props) => (props.isSelected ? "#0500ff" : "#FFFFFF")};

  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  /* identical to box height, or 157% */

  color: ${(props) => (props.isSelected ? "#ffffff" : "#000000")};
`;

const DateText = styled.div``;

const PeriodContainer = styled.div`
  display: flex;
  gap: 30px;
  align-items: center;
`;

export const Period = ({ content, isSelected, dateContent }) => {
  return (
    <PeriodContainer>
      <Rectangle isSelected={isSelected}>{content}</Rectangle>
      <DateText>{dateContent}</DateText>
    </PeriodContainer>
  );
};
