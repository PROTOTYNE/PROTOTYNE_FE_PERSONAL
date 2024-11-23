import styled from "@emotion/styled";
import { BottomContainer } from "./DetailBottom";
import BasicToggle from "./BasicToggle";

interface NewAddressFormProps {
  isBasic: boolean;
  onToggleBasic: () => void;
  formData: {
    name: string;
    phone: string;
    address: string;
    detail: string;
  };
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
}

const NewAddressForm = ({
  isBasic,
  onToggleBasic,
  formData,
  onChange,
  onSubmit,
}: NewAddressFormProps) => (
  <AddressInfoContainer>
    <BasicToggle isBasic={isBasic} onToggle={onToggleBasic} />
    <InputContainer>
      <div>이름</div>
      <Input name="name" value={formData.name} onChange={onChange} />
    </InputContainer>
    <InputContainer>
      <div>우편번호</div>
      <div style={{ display: "flex", gap: "10px" }}>
        <Input />
        <BlueBorderButton>우편번호 검색</BlueBorderButton>
      </div>
    </InputContainer>
    <InputContainer>
      <div>주소</div>
      <Input
        name="address"
        placeholder="주소 입력"
        value={formData.address}
        onChange={onChange}
      />
      <Input
        name="detail"
        placeholder="상세 주소 입력"
        value={formData.detail}
        onChange={onChange}
      />
    </InputContainer>
    <InputContainer>
      <div>연락처</div>
      <Input name="phone" value={formData.phone} onChange={onChange} />
    </InputContainer>
    <BottomContainer>
      <div style={{ width: "80%" }}>
        {formData.name &&
        formData.address &&
        formData.detail &&
        formData.phone ? (
          <BlueButton onClick={onSubmit}>체험 신청하기</BlueButton>
        ) : (
          <DisableBlueButton>체험 신청하기</DisableBlueButton>
        )}
      </div>
    </BottomContainer>
  </AddressInfoContainer>
);

export default NewAddressForm;

const Input = styled.input`
  width: 100%;
  height: 33px;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  margin: 5px 0;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 90%;
`;

const BlueBorderButton = styled.button`
  width: 200px;
  display: inline-block;
  background: #ffffff;
  border: 1px solid #0500ff;
  border-radius: 5px;
  margin: 5px 0;
`;

const AddressInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
`;

export const BlueButton = styled.button`
  padding: 10px;
  width: 100%;
  height: 51px;
  background: #0500ff;
  border: none;
  border-radius: 9px;
  color: white;

  font-size: 18px;
  line-height: 17px;
  /* or 94% */
  text-align: center;
  color: #ffffff;
`;

export const DisableBlueButton = styled(BlueButton)`
  background: none;
  background-color: #d9d9d9;
`;
