import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { Home, Ticket, Search, My } from "@/shared";
import { colors } from "@/shared";

const naviationInfo = [
  { path: "/home", imgName: "home", svg: Home },
  { path: "/ticket", imgName: "ticket", svg: Ticket },
  { path: "/search", imgName: "search", svg: Search },
  { path: "/myinfo", imgName: "my", svg: My },
];

export const Navigation = () => {
  return (
    <BackGround>
      {naviationInfo.map((element) => (
        <NavLinkStyle
          key={element.path}
          to={element.path}
          name={element.imgName}
        >
          <element.svg />
        </NavLinkStyle>
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

const NavLinkStyle = styled(NavLink)<{ name: string }>`
  stroke: ${colors.black};
  &.active {
    path {
      fill: ${colors.main};
      stroke: ${(props) =>
        props.name === "ticket" ? colors.white : colors.main};
    }
  }
`;
