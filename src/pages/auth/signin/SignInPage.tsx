import { useState, useEffect } from "react";
import styled from "@emotion/styled";

import { Splash } from "@/entities";
import { useLayoutStore } from "@/shared";

const SignInPage = () => {
  const [show, setShow] = useState(false);
  const md = useLayoutStore((state) => state.md);

  useEffect(() => {
    setShow(true);
    const timer = setTimeout(() => {
      setShow(false);
    }, 0);

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
      ) : md ? (
        <>
          <Background />
          <PcContainer>
            <div>
              <PcTitle>
                앞서나가는 당신을 위한 <br />
                특별한 기회
                <div>시제품 소비자 반응 테스트</div>
              </PcTitle>
              <img
                onClick={() => {
                  signInHandler();
                }}
                src="/image/kakao_login_pc.png"
                alt="kakao_login"
                style={{ width: "260px" }}
              ></img>
            </div>
            <div>
              <img
                src="/logo/default.png"
                alt="logo"
                style={{ width: "360px" }}
              ></img>
              <img
                src="/logo/title.png"
                alt="logo_title"
                style={{ width: "400px" }}
              ></img>
            </div>
          </PcContainer>
        </>
      ) : (
        <Container>
          <div>
            <span> 앞서나가는 당신을 위한 특별한 기회</span>
            <img src="/image/main_title.png" alt="main_title"></img>
          </div>

          <img
            onClick={() => {
              signInHandler();
            }}
            src="/image/kakao_login.png"
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

  gap: 120px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 5px;

    margin-top: 130px;

    > span {
      width: 295px;
      font-size: 16px;
    }

    > img {
      width: 295px;
    }
  }
`;

const Background = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, #ffffff, #e4e6ff, #e4e6ff);
`;

const PcContainer = styled.div`
  position: absolute;

  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  justify-content: space-between;

  width: 70%;

  > div {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

const PcTitle = styled.div`
  font-size: 50px;
  font-weight: 700;
  width: 600px;

  > div {
    font-size: 25px;
    font-weight: 500;

    margin-top: 25px;
    margin-bottom: 45px;
  }
`;

export default SignInPage;
