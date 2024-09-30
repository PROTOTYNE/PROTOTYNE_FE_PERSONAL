import { Background } from "@/entities";

const SignInPage = () => {
  const kakaoSignInLink = `https://kauth.kakao.com/oauth/authorize?client_id=${
    import.meta.env.VITE_KAKAO_REST_API_KEY
  }&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}&response_type=code`;

  const signInHandler = () => {
    window.location.href = kakaoSignInLink;
  };

  return (
    <>
      <Background src="/background/first_loading.jpg" />
      <img
        src="./image/kakao_login_medium_wide.png"
        alt="signin"
        onClick={signInHandler}
      ></img>
    </>
  );
};

export default SignInPage;
