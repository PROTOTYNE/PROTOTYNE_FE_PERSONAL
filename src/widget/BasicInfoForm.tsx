import styled from "@emotion/styled";
import { colors, useUserStore } from "@/shared";
import { Button, DisableButton } from "@/entities";

export const BasicInfoForm = ({ nextHandler }: { nextHandler: () => void }) => {
  const userStore = useUserStore();

  return (
    <>
      <Title>
        시제품 체험 신청을 하기 위해서는 <br />
        <span>기본정보</span>가 필요해요!
      </Title>
      <SubTitle>
        기업이 체험 신청자를 확인하기 위해서 사용되는 <br />
        필수로 입력해야 하는 정보입니다.
      </SubTitle>
      <div style={{ height: "30px" }}></div>
      <Ladel>이름</Ladel>
      <NameInput
        onChange={(event) => {
          userStore.setName(event.target.value);
        }}
      />
      <Ladel>생년월일</Ladel>
      <InputContainer>
        <BirthInput
          placeholder="YYYY"
          type="number"
          onChange={(event) => {
            userStore.setBirthYear(event.target.value);
          }}
        />
        <BirthInput
          placeholder="MM"
          onChange={(event) => {
            userStore.setBirthMonth(event.target.value);
          }}
        />
        <BirthInput
          placeholder="DD"
          onChange={(event) => {
            userStore.setBirthDay(event.target.value);
          }}
        />
      </InputContainer>
      <Ladel>성별</Ladel>
      <InputContainer>
        {userStore.gender === "MALE" ? (
          <>
            <SelectedGenderButton>남성</SelectedGenderButton>
            <GenderButton
              onClick={() => {
                userStore.setGender("FEMALE");
              }}
            >
              여성
            </GenderButton>
          </>
        ) : (
          <>
            <GenderButton
              onClick={() => {
                userStore.setGender("MALE");
              }}
            >
              남성
            </GenderButton>
            <SelectedGenderButton>여성</SelectedGenderButton>
          </>
        )}
      </InputContainer>
      <Ladel>가구 구성원수</Ladel>
      <InputContainer>
        <div style={{ width: "calc(32% - 30px)" }}></div>
        <FamilyNumButton
          onClick={() => {
            userStore.downFamilyNum();
          }}
        >
          -
        </FamilyNumButton>
        <FamilyNum>{userStore.familyNum}</FamilyNum>
        <FamilyNumButton
          onClick={() => {
            userStore.upFamilyNum();
          }}
        >
          +
        </FamilyNumButton>
      </InputContainer>
      {userStore.name &&
      userStore.birthYear &&
      userStore.birthMonth &&
      userStore.birthDay ? (
        <Button onClick={nextHandler}>계속하기</Button>
      ) : (
        <DisableButton>모든 항목을 입력해주세요!</DisableButton>
      )}
    </>
  );
};

const Title = styled.div`
  width: 100%;

  position: relative;
  font-weight: bold;
  font-size: 23px;

  margin-top: 30px;

  > svg {
    position: absolute;
    right: 0px;
    top: 10px;
    font-size: 20px;
    color: #c4c4c4;
  }

  > span {
    color: ${colors.main};
  }
`;

const SubTitle = styled.div`
  font-size: 16px;

  margin-top: 10px;
  margin-bottom: -20px;
`;

const Ladel = styled.div`
  font-weight: bold;
  font-size: 16px;

  margin-top: 5px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;

  width: 100%;
`;

const NameInput = styled.input`
  margin-top: 10px;
  margin-bottom: 15px;

  width: calc(100% - 10px);

  height: 30px;

  border: 1px solid #c4c4c4;

  border-radius: 7px;

  font-size: 16px;

  padding-left: 10px;
`;

const BirthInput = styled(NameInput)`
  margin-left: 2%;
  margin-right: 2%;

  text-align: center;

  padding-left: 0px;

  ::placeholder {
    text-align: center;

    font-size: 16px;
  }
`;

const GenderButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-top: 10px;
  margin-bottom: 15px;

  background-color: #ffffff;

  width: 35%;

  margin-left: 10%;

  height: 30px;
  border-radius: 7px;

  border: 2px solid #e3e2eb;
`;

const FamilyNum = styled(GenderButton)`
  margin-left: 1%;
  margin-right: 1%;
  width: 30%;

  color: ${colors.main};
`;

const FamilyNumButton = styled(FamilyNum)`
  font-weight: bold;
  color: #000000;

  width: 30px;
  background-color: #f6f5ff;

  border: 2px solid #f6f5ff;
`;

const SelectedGenderButton = styled(GenderButton)`
  background-color: ${colors.main};
  border: 2px solid ${colors.main};

  color: white;
`;
