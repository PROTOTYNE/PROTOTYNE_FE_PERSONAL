import { useState, useEffect } from "react";
import styled from "@emotion/styled";

export const Splash = () => {
  const [width, setWidth] = useState(80); // 시작 크기 (20%로 시작)
  const [isFirst, setFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFirst(false);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (isFirst) return;

    const interval = setInterval(() => {
      setWidth((prevWidth) => (prevWidth < 260 ? prevWidth + 5 : 260));
    }, 10);

    return () => {
      clearInterval(interval);
    };
  }, [isFirst]);

  const Containe = styled.div`
    position: relative;

    width: ${width}px;
    height: 44px;

    overflow: hidden;

    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  `;

  return (
    <Containe>
      <Img src="logo/splash.png" alt="splash" />
    </Containe>
  );
};

const Img = styled.img`
  width: 258px;
  position: absolute;
  right: 0px;
`;
