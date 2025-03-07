import styled from "@emotion/styled";
import { Link, useLocation } from "react-router-dom";

import { media, PAGE_URL, RightArr } from "@/shared";

export const Header = ({ isMain }: { isMain: boolean }) => {
  const { pathname } = useLocation();

  const isSignIn = pathname === PAGE_URL.SignIn;
  const isSignUp = pathname === PAGE_URL.SignUp;

  const MdBackGround = styled.div`
    width: 100%;
    height: 70px;

    position: fixed;
    top: 0px;
    left: 0px;

    padding-top: 10px;

    z-index: 10;

    display: none;
    justify-content: space-between;
    align-items: center;

    ${!isSignIn
      ? "background-color: white;"
      : "background: linear-gradient(90deg, #ffffff, #e4e6ff, #e4e6ff);"}

    ${media.md`
    display: flex;
  `}
  `;

  return (
    <>
      <BackGround>
        {isMain ? (
          <img src="/image/side.png"></img>
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
          <Container>
            <img style={{ width: "155px" }} src="/logo/title.png" />
          </Container>
        </Link>
        <Link to={"/alarm"} onClick={() => console.log("??")}>
          <img style={{ width: "26px" }} src="/image/alarm.png" />
        </Link>
      </BackGround>

      <MdBackGround>
        <Link to={"/home"}>
          <Container>
            <img style={{ width: "53px" }} src="/logo/default.png" />
            <img
              style={{ width: "160px", marginTop: "8px" }}
              src="/logo/title.png"
            />
          </Container>
        </Link>
        <Link to={PAGE_URL.Ticket}>
          <Title>Ticket</Title>
        </Link>
        <Link to={PAGE_URL.MyInfo}>
          <Title>My Page</Title>
        </Link>
        <Container>
          <img style={{ width: "26px" }} src="/image/alarm.png" />
          <img style={{ width: "26px" }} src="/image/side.png" />
        </Container>
      </MdBackGround>

      {isSignIn || isSignUp ? <Shield /> : null}
    </>
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

  ${media.md`
    display: none;
  `}
`;

const Container = styled.div`
  margin: -9px 40px 0 40px;

  display: flex;
  align-items: center;

  height: 100%;

  gap: 20px;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: bolder;
  color: black;
`;

const Shield = styled.div`
  position: fixed;
  z-index: 30;
  width: 100%;
  height: 70px;

  position: fixed;
  top: 0px;
  left: 0px;
`;
