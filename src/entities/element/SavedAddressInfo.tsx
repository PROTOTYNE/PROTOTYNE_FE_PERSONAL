import styled from "@emotion/styled";
import { BlueButton } from "./NewAddressForm";
import { AiOutlineExclamationCircle, AiFillPlusCircle } from "react-icons/ai";
import { BottomContainer } from "./DetailBottom";
import { useNavigate } from "react-router";

interface SavedAddressInfoProps {
  deliveryName: string;
  baseAddress: string;
  detailAddress: string;
  deliveryPhone: string;
}

const SavedAddressInfo = ({
  deliveryName,
  baseAddress,
  detailAddress,
  deliveryPhone,
}: SavedAddressInfoProps) => {
  const navigate = useNavigate();
  return (
    <div>
      <div>배송 주소</div>
      <BasicAddressContainer>
        <div>
          <BlueBoldText>{deliveryName}</BlueBoldText>
          <BasicTextContainer>기본</BasicTextContainer>
        </div>
        <div>{baseAddress}</div>
        <div>{detailAddress}</div>
        <div>{deliveryPhone}</div>
        <SmallButton>수정</SmallButton>
        <SmallButton>삭제</SmallButton>
      </BasicAddressContainer>
      <StyledAiFillPlusCircle onClick={() => navigate("/address")} />
      <div>
        <AiOutlineExclamationCircle />
        배송 주소는 최대 10개까지 등록할 수 있습니다.
      </div>
      <BottomContainer>
        <div style={{ width: "80%" }}>
          <BlueButton>체험 신청하기</BlueButton>
        </div>
      </BottomContainer>
    </div>
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

const SmallButton = styled.button`
  display: inline-block;
  height: 28px;
  border: none;
  background: #ffffff;
  border-radius: 6px;
`;

const BasicAddressContainer = styled.div`
  width: 90%;
  display: inline-block;
  background: linear-gradient(0deg, #f6f5ff, #f6f5ff), #d9d9d9;
  /* Main */
  border: 1px solid #0500ff;
  border-radius: 9px;
`;

const StyledAiFillPlusCircle = styled(AiFillPlusCircle)`
  color: #d9d9d9;
  background-color: #0500ff;
  border-radius: 150%;
`;
