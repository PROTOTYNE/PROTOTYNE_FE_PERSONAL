import React from "react";
import styled from "@emotion/styled";

interface ResultProps {
  investInfo: {
    apply: boolean;
    status: string;
    shipping: string;
    transportNum: string;
    penalty: boolean;
  };
}

interface TextProps {
  status: string;
}

const Result = ({ investInfo }: ResultProps) => {
  return (
    <ResultContainer>
      <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
        <div style={{ fontWeight: "bold", fontSize: "17px" }}>당첨결과</div>
        {investInfo.status === "당첨" ? (
          <TextContainer status={investInfo.status}>{"당첨"}</TextContainer>
        ) : (
          <TextContainer status={investInfo.status}>{"미당첨"}</TextContainer>
        )}
      </div>
      <div>
        {investInfo.status === "당첨" ? (
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            배송상태 | {investInfo.shipping}
            {investInfo.shipping === "배송중" && (
              <div>{investInfo.transportNum}</div>
            )}
          </div>
        ) : (
          <div>{"아쉽지만 체험단에 선정되지 않았습니다."}</div>
        )}
      </div>
    </ResultContainer>
  );
};

export default Result;

export const ResultContainer = styled.div`
  /* Rectangle 11190 */
  margin: 10px 0;
  display: inline-block;
  width: 85%;
  padding: 20px 30px;
  /* Back */
  background: #f6f5ff;
  border-radius: 9px;
  gap: 10px;
`;

const TextContainer = styled.div<TextProps>`
  box-sizing: border-box;
  display: inline-block;
  padding: 3px 10px;
  /* Main */
  border: 1px solid
    ${(props) => (props.status === "당첨" ? "#0500ff" : "#FF0000")};
  font-weight: bold;
  color: ${(props) => (props.status === "당첨" ? "#0500ff" : "#FF0000")};
  border-radius: 9px;
`;
