import { colors } from "@/shared";
import styled from "@emotion/styled";
// import { colors } from "@/styles";

export const DivLine = styled.div`
  height: 1px;
  width: 100%;
  background-color: #f6f5ff;
`;
export const PageWrapper = styled.div`
  padding: 20px 0 20px 26px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 26px 0 0;
  h1 {
    margin: 0;
    font-size: 21px;
  }
  h3 {
    margin: 5px 0 0 0;
    color: ${colors.gray[3]};
    font-size: 18px;
  }
  p {
    font-size: 12px;
    cursor: pointer;
  }
  div {
    display: flex;
    align-items: center;
    height: 30px;
    gap: 3px;
    h1 {
      margin: 5px 0 0 0;
      font-size: 21px;
    }
  }
`;
