import styled from "@emotion/styled";
import { useState } from "react";

interface StyledProps {
  active: boolean;
}

const Toggle: React.FC = () => {
  const [active, setActive] = useState<boolean>(false); // 상태 타입 명시

  const handleToggle = () => {
    setActive(!active);
  };

  return (
    <ToggleContainer onClick={handleToggle}>
      <Rectangle active={active}>
        <Ellipse active={active} />
        <TextContainer active={active}>{"잔여 티켓"} </TextContainer>
      </Rectangle>
    </ToggleContainer>
  );
};

export default Toggle;

const Ellipse = styled.div<StyledProps>`
  box-sizing: border-box;
  position: absolute;
  left: ${(props) => (props.active ? "70%" : "5%")};
  top: 3.5px;
  border-radius: 50%;
  background: #fafafa;
  width: 18px;
  height: 18px;

  background: #ffffff;
`;

const Rectangle = styled.div<StyledProps>`
  width: 74px;
  height: 25px;
  position: relative;
  background: ${(props) => (props.active ? "#0500FF" : "#b8b8b8")};
  border-radius: 15px;
  cursor: pointer;
`;

const ToggleContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const TextContainer = styled.div<StyledProps>`
  position: absolute;
  width: 48px;
  color: ${(props) => (props.active ? "white" : "#d9d9d9")};
  font-weight: bold;
  font-size: 10px;
  top: 4.5px;
  left: ${(props) => (props.active ? "12%" : "35%")};
`;
