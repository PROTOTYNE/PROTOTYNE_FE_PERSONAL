import styled from "@emotion/styled";
import { BlueButton } from "./NewAddressForm";
import { BottomContainer } from "./DetailBottom";
import { FailedModal, SuccessModal } from "./Modal";
import { useState } from "react";

interface SavedAddressInfoProps {
  data: {
    id: number;
    deliveryName: string;
    deliveryPhone: string;
    postCode: string;
    baseAddress: string;
    detailAddress: string;
    default: boolean;
  }[];
}

const SavedAddressInfo = ({ data }: SavedAddressInfoProps) => {
  const [selected, setSelected] = useState<number | null>(0);
  const [success, setSuccess] = useState(false);
  const [failed, setFailed] = useState(false);
  const response = "response";

  const handleSubmit = () => {
    if (response) {
      console.log("체험 신청 완료");
      setSuccess(true);
    } else {
      console.log("체험 신청 실패");
      setFailed(true);
    }
  };

  const handleSelect = (id: number) => {
    setSelected(id); // 선택된 ID를 상태로 설정
  };

  return (
    <>
      <h2 style={{ marginLeft: "25px" }}>배송 주소</h2>
      <SavedAddressInfoContainer>
        {data.map((address) => (
          <BasicAddressContainer
            onClick={() => handleSelect(address.id)} // 클릭 시 ID 설정
            key={address.id}
            isSelected={selected === address.id}
          >
            <div style={{ display: "flex", gap: "7px" }}>
              <BlueBoldText>{address.deliveryName}</BlueBoldText>
              {address.default && <BasicTextContainer>기본</BasicTextContainer>}
            </div>
            <div>
              <div>{address.baseAddress}</div>
              <div>{address.detailAddress}</div>
              <div>({address.postCode})</div>
              <div>{address.deliveryPhone}</div>
            </div>
            <div style={{ display: "flex", gap: "10px" }}>
              <SmallButton isSelected={selected === address.id}>
                수정
              </SmallButton>
              <SmallButton isSelected={selected === address.id}>
                삭제
              </SmallButton>
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
  color: #0500ff;
`;

const BasicTextContainer = styled.div`
  padding: 0 10px;
  display: inline-block;
  border: 0.5px solid #0500ff;
  border-radius: 9px;
  color: #0500ff;
`;

const SmallButton = styled.button<{ isSelected: boolean }>`
  display: inline-block;
  height: 28px;
  border: none;
  border-radius: 6px;
  padding: 0 10px;
  background: ${({ isSelected }) =>
    isSelected ? "white" : "linear-gradient(0deg, #f6f5ff, #f6f5ff)"};
`;

const BasicAddressContainer = styled.div<{ isSelected: boolean }>`
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  background: ${({ isSelected }) =>
    isSelected ? "linear-gradient(0deg, #f6f5ff, #f6f5ff)" : "#ffffff"};
  border: 1px solid ${({ isSelected }) => (isSelected ? "#0500ff" : "#d9d9d9")};
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
