import styled from "@emotion/styled";

interface DescriptionProps {
  description?: string;
}

export const Description = ({ description }: DescriptionProps) => {
  return <StyledDescription>{description}</StyledDescription>;
};

const StyledDescription = styled.div`
  font-size: 15px;
  line-height: 22px;
  margin: 15px 0;
`;
