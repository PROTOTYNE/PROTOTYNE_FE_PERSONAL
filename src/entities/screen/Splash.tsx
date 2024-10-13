import styled from "@emotion/styled";
import { DotLoader } from "react-spinners";

import { colors } from "@/shared";

export const Splash = () => (
  <Container>
    <img src="./image/main_logo.png" alt="main_title"></img>
    <DotLoader color={colors.sub2} speedMultiplier={1} />
  </Container>
);

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;

  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 10px;

  > img {
    width: 400px;
  }
`;
