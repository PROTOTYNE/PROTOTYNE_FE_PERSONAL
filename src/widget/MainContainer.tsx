import styled from "@emotion/styled";
import { Header, Navigation } from "@/entities";
import { Outlet } from "react-router";

export const MainContainer = () => (
  <>
    <Header />
    <ContentContainer>
      <Outlet />
    </ContentContainer>
    <Navigation />
  </>
);

const ContentContainer = styled.div`
  position: fixed;

  top: 80px;
  left: 0px;

  width: 100%;
  height: calc(100% - 160px);

  overflow-y: auto;
`;
