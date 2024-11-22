import { media } from "@/shared";
import styled from "@emotion/styled";

export const Title = styled.span`
  width: 100%;
  font-weight: bold;
  font-size: 21px;
  border-bottom: 1px solid black;

  ${media.md`
    height: 65px;  
    font-size: 25px;
    text-align: center;  

    margin-bottom: 40px;
    margin-top: 20px;
  `};
`;
