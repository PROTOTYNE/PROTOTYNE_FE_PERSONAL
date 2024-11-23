import styled from "@emotion/styled";
import { BlueButton } from "./NewAddressForm";
import { BottomContainer } from "./DetailBottom";
import { FailedModal, SuccessModal } from "./Modal";
import { useState } from "react";

interface SavedAddressInfoProps {
  data: {
    apply: boolean;
    deliveryName: string;
    baseAddress: string;
    detailAddress: string;
    deliveryPhone: string;
  }[];
}

const SavedAddressInfo = ({ data }: SavedAddressInfoProps) => {
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const response = "";

  const handleSubmit = () => {
    if (response) {
      console.log("체험 신청 완료");
      setSuccess(true);
    } else {
      console.log("체험 신청 실패");
      setFailed(true);
    }
  };

  return (
    <>
      <h2>배송 주소</h2>

      <SavedAddressInfoContainer>
        {data.map((address, index) => (
          <BasicAddressContainer key={index} apply={address.apply}>
            <div style={{ display: "flex", gap: "7px" }}>
              <BlueBoldText>{address.deliveryName}</BlueBoldText>
              {address.apply && <BasicTextContainer>기본</BasicTextContainer>}
            </div>
            <div>
              <div>{address.baseAddress}</div>
              <div>{address.detailAddress}</div>
              <div>{address.deliveryPhone}</div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <SmallButton apply={address.apply}>수정</SmallButton>
              <SmallButton apply={address.apply}>삭제</SmallButton>
            </div>
          </BasicAddressContainer>
        ))}
        <BottomContainer>
          <div style={{ width: "80%" }}>
            <BlueButton onClick={handleSubmit}>체험 신청하기</BlueButton>
          </div>
        </BottomContainer>
        {success && <SuccessModal onClose={() => setSuccess(false)} />}
        {failed && <FailedModal onClose={() => setFailed(false)} />}
      </SavedAddressInfoContainer>
    </>
  );
};

export default SavedAddressInfo;

const BlueBoldText = styled.div`
  font-weight: 700;
  font-size: 18px;
  /* Main */
  color: #0500ff;
`;

const BasicTextContainer = styled.div`
  padding: 0 10px;
  display: inline-block;
  /* Main */
  border: 0.5px solid #0500ff;
  border-radius: 9px;
  color: #0500ff;
`;

const SmallButton = styled.button<{ apply: boolean }>`
  display: inline-block;
  height: 28px;
  border: none;
  border-radius: 6px;
  padding: 0 10px;
  background: ${({ apply }) =>
    apply ? "white" : "linear-gradient(0deg, #f6f5ff, #f6f5ff)"};
  color: ${({ apply }) => (apply ? "#0500ff" : "#333333")};
`;

const BasicAddressContainer = styled.div<{ apply: boolean }>`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${({ apply }) =>
    apply ? "linear-gradient(0deg, #f6f5ff, #f6f5ff)" : "#ffffff"};
  border: 1px solid ${({ apply }) => (apply ? "#0500ff" : "#d9d9d9")};
  border-radius: 9px;
  margin: 10px 0;
  padding: 15px;
  gap: 15px;
  box-sizing: border-box;
`;

const SavedAddressInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
