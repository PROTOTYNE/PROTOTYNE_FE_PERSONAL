import styled from "@emotion/styled";

interface IndexProps {
  indexText: string;
}

export const Index = ({ indexText }: IndexProps) => {
  return <StyledIndex>{indexText}</StyledIndex>;
};

const StyledIndex = styled.div`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 10px;
  margin: 10px 0;
  display: inline-block;

  text-align: center;
  background: #f6f5ff;
  border-radius: 6px;

  font-weight: 700;
  font-size: 15px;

  color: #000000;
`;
