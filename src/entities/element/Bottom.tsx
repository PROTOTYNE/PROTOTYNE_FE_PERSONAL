import styled from "@emotion/styled";
import { Button } from "./Button";

const BottomContainer = styled.div`
  width: 97vw;
  height: 100px;
  box-sizing: border-box;
  /* Rectangle 11188 */

  position: sticky;
  display: block;

  background: #ffffff;
  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.05);
`;

export const Bottom = () => {
  return (
    <BottomContainer>
      <div>BookMarkIcon</div> <Button>체험 신청하기</Button>
    </BottomContainer>
  );
};
