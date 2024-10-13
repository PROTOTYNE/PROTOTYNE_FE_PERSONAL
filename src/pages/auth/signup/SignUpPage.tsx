import styled from "@emotion/styled";
import { useState } from "react";
import { useNavigate } from "react-router";

import { Button } from "@/entities";
import { AgreeForm, BasicInfoForm, AdditionalInfoForm } from "@/widget";
import { PAGE_URL, RightArr } from "@/shared";

const SignUpPage = () => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState(1);

  const backHandler = () => {
    if (phase > 1) setPhase(phase - 1);
    else navigate(PAGE_URL.SignIn);
  };

  const nextHandler = () => {
    if (phase > 2) {
      navigate(PAGE_URL.SignIn);
    } else setPhase(phase + 1);
  };

  return (
    <>
      <Container>
        <RightArr
          onClick={backHandler}
          stroke="black"
          transform="rotate(180) scale(2)"
        />
        {phase < 2 ? (
          <AgreeForm />
        ) : phase < 3 ? (
          <BasicInfoForm />
        ) : (
          <AdditionalInfoForm />
        )}
      </Container>
      <Button onClick={nextHandler}>계속하기</Button>
    </>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 50%;

  width: 345px;
  height: 100vh;
  transform: translate(-50%, 0%);

  padding-top: 40px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
`;

export default SignUpPage;
