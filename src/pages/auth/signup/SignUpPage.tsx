import styled from "@emotion/styled";
import { useState } from "react";

import { Button } from "@/entities";
import { AgreeForm, BasicInfoForm, AdditionalInfoForm } from "@/widget";

const SignUpPage = () => {
  const [phase, setPhase] = useState(1);
  return (
    <Container>
      {phase < 2 ? (
        <AgreeForm />
      ) : phase < 3 ? (
        <BasicInfoForm />
      ) : (
        <AdditionalInfoForm />
      )}

      <Button>계속하기</Button>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;

  width: 100%;
  height: 100vh;

  padding-top: 30px;

  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

export default SignUpPage;
