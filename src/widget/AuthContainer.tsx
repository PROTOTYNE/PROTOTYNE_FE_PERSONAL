import styled from "@emotion/styled";
import { Outlet } from "react-router";

import { Header } from "@/entities";
import { useLayoutStore } from "@/shared";

export const AuthContainer = () => {
  const md = useLayoutStore((state) => state.md);
  console.log(md);

  return (
    <>
      {md ? <Header isMain={false} /> : null}
      <ContentContainer>
        <Outlet />
      </ContentContainer>
    </>
  );
};

const ContentContainer = styled.div`
  position: fixed;

  top: 80px;
  left: 0px;

  width: 100%;
  height: calc(100% - 80px);

  overflow-y: auto;
`;
