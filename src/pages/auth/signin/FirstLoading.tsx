import { useState, useEffect } from "react";
import styled from "@emotion/styled";

import { Background } from "@/entities";

export const FirstLoading = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {show ? (
        <Container>
          <Background src="/background/first_loading.jpg" />
        </Container>
      ) : null}
    </>
  );
};

const Container = styled.div`
  z-index: 100;
  position: fixed;
  top: 0px;
  left: 0px;

  width: 100%;
  height: 100vh;
`;
