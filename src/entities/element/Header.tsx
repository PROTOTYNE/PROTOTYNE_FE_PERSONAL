import styled from "@emotion/styled";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <BackGround>
      <img src="./image/side.png"></img>
      <Link to={"/home"}>
        <Logo src="./logo/defualt.png"></Logo>
      </Link>
      <Link to={"/alarm"}>
        <img src="./image/alarm.png"></img>
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

  z-index: 10;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;

const Logo = styled.img`
  width: 155px;

  margin: 5px 40px 0 40px;
`;
