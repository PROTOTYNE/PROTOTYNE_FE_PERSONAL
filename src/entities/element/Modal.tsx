import styled from "@emotion/styled";
import { BlueButton, DisableBlueButton } from "./NewAddressForm";

export const SuccessModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <BackScreen>
      <ModalContainer>
        <h2>체험 신청 완료</h2>
        <div>{"마이페이지 > 신청한 시제품에서"}</div>
        <div> {"확인할 수 있습니다."}</div>
        <div style={{ display: "flex", gap: "10px", marginTop: "20px" }}>
          <DisableBlueButton onClick={onClose}>닫기</DisableBlueButton>
          <BlueButton>바로가기</BlueButton>
        </div>
      </ModalContainer>
    </BackScreen>
  );
};

export const FailedModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <BackScreen>
      <ModalContainer>
        <h2>체험 신청 실패</h2>
        <div>{"보유한 티켓이 부족하여"}</div>
        <div> {"신청이 불가능합니다."}</div>
        <div style={{ marginTop: "20px" }}>
          <DisableBlueButton onClick={onClose}>닫기</DisableBlueButton>
        </div>
      </ModalContainer>
    </BackScreen>
  );
};

const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  box-sizing: border-box;
  padding: 30px;
  background: #ffffff;
  border-radius: 9px;
  text-align: center;
`;

const BackScreen = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 100;
`;
