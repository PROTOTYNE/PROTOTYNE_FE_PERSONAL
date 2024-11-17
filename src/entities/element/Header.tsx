import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import { PAGE_URL, RightArr } from "@/shared";

export const Header = () => {
  const location = useLocation();

  return (
    <BackGround>
      {location.pathname === PAGE_URL.Home ||
      location.pathname === PAGE_URL.Search ||
      location.pathname === PAGE_URL.MyInfo ||
      location.pathname === PAGE_URL.Ticket ? (
        <img src="./image/side.png"></img>
      ) : (
        <Link to={".."}>
          <RightArr
            onClick={() => {}}
            stroke="black"
            transform="rotate(180) scale(2)"
          />
        </Link>
      )}

      <Link to={"/home"}>
        <Logo src="./logo/defualt.png"></Logo>
      </Link>
      <Link to={"/alarm"}>
        <img style={{ width: "26px" }} src="./image/alarm.png"></img>
      </Link>
    </BackGround>
  );
};

const BackGround = styled.div`
  background-color: white;
  width: 100%;
  height: 70px;

  position: fixed;
  top: 0px;
  left: 0px;

  padding-top: 10px;

  z-index: 10;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);

  > img {
    width: 25px;
  }
`;

const Logo = styled.img`
  width: 155px;

  margin: 5px 40px 0 40px;
`;
