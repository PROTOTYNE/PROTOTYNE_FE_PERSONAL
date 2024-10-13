import { useState, useEffect } from "react";
import styled from "@emotion/styled";

import { Splash } from "@/entities";

const SignInPage = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const kakaoSignInLink = `https://kauth.kakao.com/oauth/authorize?client_id=${
    import.meta.env.VITE_KAKAO_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`;

  const signInHandler = () => {
    window.location.href = kakaoSignInLink;
  };

  return (
    <>
      {show ? (
        <Splash />
      ) : (
        <Container>
          <div>
            <span> 앞서가는 당신을 위한 특별한 기회</span>
            <img src="./image/main_title.png" alt="main_title"></img>
          </div>

          <img
            onClick={() => {
              signInHandler();
            }}
            src="./image/kakao_login.png"
            alt="kakao_login"
          ></img>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;

  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 200px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    margin-top: 200px;

    > span {
      width: 295px;
      font-size: 19px;
      font-weight: bold;
    }

    > img {
      width: 295px;
    }
  }
`;

export default SignInPage;
