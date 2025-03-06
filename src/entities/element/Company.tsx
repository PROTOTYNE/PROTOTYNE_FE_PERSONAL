import styled from "@emotion/styled";

interface Props {
  companyText?: string;
}

export const Company = ({ companyText }: Props) => (
  <StyledCompany>{companyText}</StyledCompany>
);

const StyledCompany = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 13px;
  line-height: 22px;
  color: #8e8e8e;
`;

