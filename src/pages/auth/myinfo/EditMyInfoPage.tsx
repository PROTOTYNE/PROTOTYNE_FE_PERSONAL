// import { useNavigate } from "react-router";

import styled from "@emotion/styled";

import { colors, media, additionalInfoOptions, useUserStore } from "@/shared";
import { Background, Button, MultiSelectInput, SelectInput } from "@/entities";

const EditMyInfoPage = () => {
  // const navigate = useNavigate();

  const userStore = useUserStore((state) => state);

  // const { updateAdditionalInfo } = AuthService();
  // const { updateBasicInfo } = AuthService();

  return (
    <>
      <Background src="/background/signup.jpg" />
      <Container>
        <Title>기본정보</Title>
        <Ladel>생년월일</Ladel>
        <InputContainer>
          <BirthInput
            placeholder={userStore.birthYear}
            type="number"
            onChange={(event) => {
              userStore.setBirthYear(event.target.value);
            }}
          />
          <BirthInput
            placeholder={userStore.birthMonth}
            onChange={(event) => {
              userStore.setBirthMonth(event.target.value);
            }}
          />
          <BirthInput
            placeholder={userStore.birthDay}
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
        <Title>추가정보</Title>
        {additionalInfoOptions.map((additionalInfoOption, index) => {
          if (index < 4)
            return (
              <SelectInput
                key={additionalInfoOption.name}
                label={additionalInfoOption.label}
                option={
                  additionalInfoOption.options as {
                    label: string;
                    value: string | number;
                  }[]
                }
                onChange={(newValue) => {
                  if (newValue) {
                    if (additionalInfoOption.name === "occupation")
                      userStore.setOccupation(newValue.value);
                    else if (additionalInfoOption.name === "income")
                      userStore.setIncome(newValue.value);
                    else if (additionalInfoOption.name === "familyComposition")
                      userStore.setFamilyComposition(newValue.value);
                    else if (additionalInfoOption.name === "healthStatus")
                      userStore.setHealthStatus(newValue.value);
                  }
                }}
              />
            );
          else
            return (
              <MultiSelectInput
                key={additionalInfoOption.name}
                label={additionalInfoOption.label}
                options={
                  additionalInfoOption.options as {
                    label: string;
                    value: string | number;
                  }[]
                }
                onClick={
                  additionalInfoOption.name === "interests"
                    ? (value) => {
                        if (!userStore.interests.includes(value))
                          userStore.addInterest(value);
                        else userStore.deleteInterest(value);
                      }
                    : additionalInfoOption.name === "productTypes"
                    ? (value) => {
                        if (
                          !userStore.productTypes.includes(
                            value as User.ProductType
                          )
                        )
                          userStore.addProductType(value as User.ProductType);
                        else
                          userStore.deleteProductType(
                            value as User.ProductType
                          );
                      }
                    : (value) => {
                        if (!userStore.phones.includes(value as User.Phone))
                          userStore.addPhone(value as User.Phone);
                        else userStore.deletePhone(value as User.Phone);
                      }
                }
              />
            );
        })}
      </Container>
      <Button
        onClick={() => {
          /* updateBasicInfo().then(() => {
            navigate(PAGE_URL.MyInfo);
          }); */
        }}
      >
        저장하기
      </Button>
    </>
  );
};

export default EditMyInfoPage;

const Container = styled.main`
  position: relative;
  left: 5%;
  width: 90%;
  margin-bottom: 50px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;
`;

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

  ${media.md`
    font-size: 28px;
    padding-bottom: 30px;
    border-bottom: 1px solid black;
    margin-bottom: 10px;
    margin-top: 100px;
  `};
`;

const Ladel = styled.div`
  font-weight: bold;
  font-size: 16px;

  margin-top: 5px;

  margin-left: 40px;
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
