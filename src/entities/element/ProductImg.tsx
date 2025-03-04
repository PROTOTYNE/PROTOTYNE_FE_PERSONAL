import styled from "@emotion/styled";

interface ProductImgProps {
  src: string;
  alt: string;
}

export const ProductImg = ({ src, alt }: ProductImgProps) => {
  return (
    <StyledProductImg>
      <img src={src} alt={alt} />
    </StyledProductImg>
  );
};

const StyledProductImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;
