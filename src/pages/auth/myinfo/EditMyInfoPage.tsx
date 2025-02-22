// import { useNavigate } from "react-router";

import styled from "@emotion/styled";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

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
        <SubTitle>정보가 정확하지 않을 시 불이익이 있을 수 있습니다.</SubTitle>
        <SubTitle>개인 정보 수정은 6개월에 한 번만 가능합니다.</SubTitle>
        <Title>
          추가정보를 입력하면 <br />더 많은 시제품을 체험할 수 있어요!
        </Title>
        <SubTitle>모두 입력하지 않아도 서비스 이용이 가능합니다.</SubTitle>
        <SubTitle>추가 정보 수정은 3개월에 한 번만 가능합니다.</SubTitle>
        <ScrollArea>
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
                      else if (
                        additionalInfoOption.name === "familyComposition"
                      )
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
        </ScrollArea>
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

  align-items: flex-start;
`;

const Element = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  margin-top: 12px;

  color: black;
  text-decoration: none;
  font-size: 18px;

  > span {
    color: #152662;
    margin-right: 10px;
  }

  > svg {
    position: absolute;
    right: 0px;
    font-size: 20px;
    color: #c4c4c4;
  }
`;

const ScrollArea = ({ children }: { children: React.ReactNode }) => (
  <div style={{ position: "relative" }}>
    <ScrollBox>
      <ScrollContainer>{children}</ScrollContainer>
      <div style={{ height: "30px" }}></div>
    </ScrollBox>
  </div>
);

const ScrollBox = styled.div`
  position: relative;
  background-color: #ffffffbe;

  width: calc(100% - 16px);
  height: 50vh;

  margin-top: 10px;

  border-radius: 4px;

  overflow-y: scroll;

  padding-top: 20px;
  padding-left: 5px;
  padding-right: 5px;

  ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #152662b7;

    border-radius: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: #dcdcdc;

    border-radius: 5px;
  }
`;

const ScrollContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
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
