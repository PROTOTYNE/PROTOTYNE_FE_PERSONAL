import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";

const naviationInfo = [
  { path: "/home", imgName: "home" },
  { path: "/ticket", imgName: "ticket" },
  { path: "/search", imgName: "search" },
  { path: "/myinfo", imgName: "my" },
];

export const Navigation = () => {
  const location = useLocation();

  return (
    <BackGround>
      {naviationInfo.map((element) => (
        <Link key={element.path} to={element.path}>
          <img
            src={`./image/${element.imgName}-${
              location.pathname.includes(element.path) ? "on" : "off"
            }.png`}
          ></img>
        </Link>
      ))}
    </BackGround>
  );
};

const BackGround = styled.div`
  background-color: white;
  width: 100%;
  height: 80px;

  position: fixed;
  bottom: 0px;
  left: 0px;

  z-index: 10;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2);

  a {
    width: 20px;
  }
`;
