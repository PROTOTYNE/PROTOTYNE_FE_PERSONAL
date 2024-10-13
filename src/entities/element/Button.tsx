import styled from "@emotion/styled";
import { colors } from "@/shared";

export const Button = styled.button`
  position: fixed;

  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0%);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 345px;
  height: 48px;

  background: ${colors.main};

  font-size: 17px;
  font-weight: bold;
  color: white;

  border-radius: 8px;
  border-color: ${colors.main};
`;

export const DisableButton = styled(Button)`
  background: none;
  background-color: ${colors.gray};
`;

export const TwoOptionsButton = ({
  leftText,
  rightText,
  onClickLeft,
  OnClickRight,
}: {
  leftText: string;
  rightText: string;
  onClickLeft: () => void;
  OnClickRight: () => void;
}) => {
  return (
    <BottomContainer>
      <LeftButton onClick={onClickLeft}>{leftText}</LeftButton>
      <RightButton onClick={OnClickRight}>{rightText}</RightButton>
    </BottomContainer>
  );
};

const BottomContainer = styled.div`
  position: fixed;

  bottom: 30px;
  left: 50%;
  transform: translate(-50%, 0%);

  width: 345px;
  height: 48px;

  display: flex;
  flex-direction: row;
`;

const LeftButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 17px;
  color: white;

  border-radius: 8px;

  width: 28%;
  height: 100%;

  background-color: ${colors.gray};
`;

const RightButton = styled(LeftButton)`
  margin-left: 10px;

  width: 70%;

  background: ${colors.main};
`;
