import styled from "@emotion/styled";
import {
  TwoOptionsButton,
  SelectInput,
  MultiSelectInput,
  Button,
} from "@/entities";
import {
  colors,
  useUserStore,
  additionalInfoOptions,
  useLayoutStore,
  media,
} from "@/shared";

export const AdditionalInfoForm = () => {
  const userStore = useUserStore();
  const md = useLayoutStore();
  return (
    <>
      <Title>
        <span>추가정보</span>를 입력하면 <br />더 많은 시제품을 체험할 수
        있어요!
      </Title>
      <SubTitle>
        추가 정보를 모두 입력하지 않아도 <br />
        <span>서비스 이용이 가능</span>합니다.
      </SubTitle>
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
                long={index === 6}
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
      {md ? null : (
        <TwoOptionsButton
          leftText="건너뛰기"
          rightText="가입하기"
          OnClickRight={() => {}}
          onClickLeft={() => {}}
        />
      )}
    </>
  );
};

const GradientBox = styled.div`
  z-index: 2;
  position: absolute;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 101%;
  pointer-events: none;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(0, 0, 0, 0) 80%,
    #ffffff 100%
  );
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
  margin-bottom: 10px;

  > span {
    color: ${colors.main};
  }
`;

const ScrollArea = ({ children }: { children: React.ReactNode }) => (
  <div style={{ position: "relative", width: "100%" }}>
    <GradientBox />
    <ScrollBox>
      <ScrollContainer>{children}</ScrollContainer>
      <div style={{ height: "30px" }}></div>
    </ScrollBox>
  </div>
);

const ScrollBox = styled.div`
  position: relative;
  background-color: #ffffffbe;

  width: calc(100% - 0px);
  height: 50vh;

  margin-top: 10px;

  border-radius: 4px;

  overflow-y: scroll;

  padding-top: 20px;
  //padding-left: 5px;
  padding-right: 5px;

  /* ::-webkit-scrollbar {
    width: 6px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #152662b7;

    border-radius: 5px;
  }
  ::-webkit-scrollbar-track {
    background-color: #dcdcdc;

    border-radius: 5px;
  } */
`;

const ScrollContainer = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  flex-direction: column;
`;
