import styled from "@emotion/styled";
import { useState } from "react";
import { Link } from "react-router-dom";

import { PAGE_URL, CheckBox, CheckedBox, colors, RightArr } from "@/shared";

export const AgreeForm = () => {
  const [agree1, setAgree1] = useState<boolean>(false);
  const [agree2, setAgree2] = useState<boolean>(false);
  return (
    <>
      <Title>환영합니다!</Title>
      <SubTitle>회원 가입전 프로토타인 이용약관들을 확인해주세요.</SubTitle>
      {agree1 && agree2 ? (
        <MainElement>
          <CheckedBox
            onClick={() => {
              setAgree1(false);
              setAgree2(false);
            }}
          />
          전체 동의
        </MainElement>
      ) : (
        <MainElement>
          <CheckBox
            onClick={() => {
              setAgree1(true);
              setAgree2(true);
            }}
          />
          전체 동의
        </MainElement>
      )}

      {agree1 ? (
        <Element>
          <CheckedBox
            onClick={() => {
              setAgree1(false);
            }}
          />
          <span>필수</span>서비스 이용약관
          <Link to={PAGE_URL.TermsOfUse}>
            <RightArr transform="scale(1.2)" stroke={colors.main} />
          </Link>
        </Element>
      ) : (
        <Element>
          <CheckBox
            onClick={() => {
              setAgree1(true);
            }}
          />
          <span>필수</span>서비스 이용약관
          <Link to={PAGE_URL.TermsOfUse}>
            <RightArr transform="scale(1.2)" stroke={colors.main} />
          </Link>
        </Element>
      )}
      {agree2 ? (
        <Element>
          <CheckedBox
            onClick={() => {
              setAgree2(false);
            }}
          />
          <span>필수</span>개인정보 수집 동의서
          <Link to={PAGE_URL.PersonalInfo}>
            <RightArr transform="scale(1.2)" stroke={colors.main} />
          </Link>
        </Element>
      ) : (
        <Element>
          <CheckBox
            onClick={() => {
              setAgree2(true);
            }}
          />
          <span>필수</span>개인정보 수집 동의서
          <Link to={PAGE_URL.PersonalInfo}>
            <RightArr transform="scale(1.2)" stroke={colors.main} />
          </Link>
        </Element>
      )}
    </>
  );
};

export const Title = styled.div`
  width: 100%;

  position: relative;
  font-weight: bold;
  font-size: 23px;

  margin-top: 20px;
`;

export const SubTitle = styled.div`
  font-size: 16px;

  margin-top: 10px;
  margin-bottom: 10px;
`;

export const Element = styled.div`
  width: calc(100% - 40px);

  display: flex;
  align-items: center;
  gap: 5px;

  margin-top: 10px;

  color: black;
  text-decoration: none;
  font-size: 18px;

  padding-left: 20px;
  padding-right: 20px;

  > span {
    color: ${colors.main};
  }

  > a {
    position: absolute;
    right: 30px;

    > svg {
      margin-bottom: 1px;
    }
  }

  > svg {
    margin-top: 2px;
    margin-right: 5px;
  }
`;

export const MainElement = styled(Element)`
  background-color: #f6f5ff;

  border-radius: 8px;

  padding: 20px;

  margin-bottom: 10px;
`;
