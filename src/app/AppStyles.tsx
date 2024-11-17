import { Global, css } from "@emotion/react";

const Styles = css`
  * {
    font-family: "Pretendard", "sans-seri";
  }
  body {
    overflow-x: hidden;
    -ms-overflow-style: none;
    margin: 0;
  }
  ::-webkit-scrollbar {
    display: none;
  }
`;

const AppStyles = () => <Global styles={Styles}></Global>;

export default AppStyles;
