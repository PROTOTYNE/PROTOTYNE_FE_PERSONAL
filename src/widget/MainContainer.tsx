import styled from "@emotion/styled";
import { Header, Navigation } from "@/entities";
import { PAGE_URL } from "@/shared";
import { Outlet } from "react-router";

import { useLocation } from "react-router-dom";

export const MainContainer = () => {
  const location = useLocation();

  const isMain =
    location.pathname === PAGE_URL.Home ||
    location.pathname === PAGE_URL.Search ||
    location.pathname === PAGE_URL.MyInfo ||
    location.pathname === PAGE_URL.Ticket;

  const ContentContainer = styled.div`
    position: fixed;

    top: 80px;
    left: 0px;

    width: 100%;
    height: ${isMain ? "calc(100% - 160px)" : "calc(100% - 80px)"};

    overflow-y: auto;
  `;

  return (
    <>
      <Header isMain={isMain} />
      <Navigation isMain={isMain} />
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </>
  );
};
