import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { HomeOn, HomeOff, Ticket, Search, My, media, colors } from "@/shared";

const naviationInfo = [
  { path: "/home", imgName: "home", svg: HomeOn },
  { path: "/ticket", imgName: "ticket", svg: Ticket },
  { path: "/search", imgName: "search", svg: Search },
  { path: "/myinfo", imgName: "my", svg: My },
];

export const Navigation = ({ isMain }: { isMain: boolean }) => {
  return (
    <>
      {isMain ? (
        <BackGround>
          {naviationInfo.map((element) => (
            <NavLinkStyle
              key={element.path}
              to={element.path}
              name={element.imgName}
            >
              {({ isActive }) => (
                <>
                  {element.imgName === "home" ? (
                    isActive ? (
                      <HomeOn />
                    ) : (
                      <HomeOff />
                    )
                  ) : (
                    <element.svg />
                  )}
                  <span>{element.imgName}</span>
                </>
              )}
            </NavLinkStyle>
          ))}
        </BackGround>
      ) : null}
    </>
  );
};

const BackGround = styled.div`
  background-color: white;
  width: 100%;
  height: 90px;

  position: fixed;
  bottom: 0px;
  left: 0px;

  z-index: 10;

  display: flex;
  justify-content: space-around;
  align-items: center;

  box-shadow: 0 -4px 8px rgba(0, 0, 0, 0.2);

  a {
    width: 20px;
  }

  ${media.md`
    display: none;
  `}
`;

const NavLinkStyle = styled(NavLink)<{ name: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  height: 46px;

  color: inherit;
  text-decoration: none;

  stroke: ${(props) => (props.name === "home" ? "none" : colors.black)};
  &.active {
    path {
      fill: ${(props) =>
        props.name === "search" ? colors.white : colors.main};
      stroke: ${(props) =>
        props.name === "ticket" ? colors.white : colors.main};
      stroke-width: ${(props) => (props.name === "search" ? "2px" : "1px")};
    }

    > span {
      color: ${colors.main};
    }
  }

  > span {
    margin-left: 1px;
    font-size: 14px;
  }
`;
