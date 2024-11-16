import styled from "@emotion/styled";

interface DescriptionProps {
  description?: string;
}

const Description = ({ description }: DescriptionProps) => {
  return <StyledDescription>{description}</StyledDescription>;
};

const StyledDescription = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #333;
  margin: 15px 0;
`;

export default Description;
