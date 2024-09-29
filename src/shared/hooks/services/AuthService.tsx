import { AxiosResponse } from "axios";

import { API, setAccess, storeAccess, useUserStore } from "@/shared";

export const AuthService = () => {
  const userStore = useUserStore((state) => state);

  const signin = async (code: string) => {
    const {
      data: {
        result: { access_token, signupComplete },
      },
    } = (await API.get("/oauth2/login", {
      params: { code: code },
    })) as AxiosResponse<User.SignInResDto>;

    setAccess(access_token);
    storeAccess(access_token);

    return signupComplete;
  };

  const signup = async () => {
    const reqData: {
      detailRequest: { [key: string]: string | number };
      addInfoRequest: { [key: string]: string | number | (string | number)[] };
    } = {
      detailRequest: {
        familyMember: userStore.familyNum,
        gender: userStore.gender,
        birth: `${userStore.birthYear}-${userStore.birthMonth}-${userStore.birthDay}`,
      },
      addInfoRequest: {},
    };

    if (userStore.occupation)
      reqData.addInfoRequest.occupation = userStore.occupation;
    if (userStore.income) reqData.addInfoRequest.income = userStore.income;
    if (userStore.interests)
      reqData.addInfoRequest.interests = userStore.interests;
    if (userStore.familyComposition)
      reqData.addInfoRequest.familyComposition = userStore.familyComposition;
    if (userStore.productTypes)
      reqData.addInfoRequest.productTypes = userStore.productTypes;
    if (userStore.phones) reqData.addInfoRequest.phones = userStore.phones;
    if (userStore.healthStatus)
      reqData.addInfoRequest.healthStatus = userStore.healthStatus;

    await API.post("/oauth2/signup", reqData);
  };

  const getUserInfo = async () => {
    const {
      data: {
        result: { username, detailInfo, addInfo },
      },
    } = (await API.get("/my/detail")) as AxiosResponse<User.GetUserResDto>;

    const birth = detailInfo.birth.split("-");

    userStore.setUserAllInfo({
      name: username,
      birthYear: birth[0],
      birthMonth: birth[1],
      birthDay: birth[2],
      gender: detailInfo.gender,
      familyNum: detailInfo.familyMember,
      ...addInfo,
    });
  };

  return {
    signin,
    getUserInfo,
    signup,
  };
};
