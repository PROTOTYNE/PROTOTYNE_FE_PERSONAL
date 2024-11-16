import styled from "@emotion/styled";

interface Props {
  productText?: string;
}

const ProductTitle = ({ productText }: Props) => (
  <StyledTitle>{productText}</StyledTitle>
);

const StyledTitle = styled.h2`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 700;
  font-size: 21px;
  color: #000000;
`;

export default ProductTitle;
