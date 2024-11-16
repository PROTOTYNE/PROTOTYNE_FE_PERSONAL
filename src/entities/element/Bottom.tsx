import styled from "@emotion/styled";
import { Button } from "./Button";
import bookmark from "../../../public/icons/bookmark.svg";

const BottomContainer = styled.div`
  width: 100vw;
  height: 100px;
  box-sizing: border-box;
  /* Rectangle 11188 */

  position: sticky;
  display: block;
  border: 1px solid black;

  background: #ffffff;
  box-shadow: 0px -5px 10px rgba(0, 0, 0, 0.05);
`;

export const Bottom = () => {
  return (
    <BottomContainer>
      <img src={bookmark} /> <Button>체험 신청하기</Button>
    </BottomContainer>
  );
};
