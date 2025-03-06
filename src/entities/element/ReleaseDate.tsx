import styled from "@emotion/styled";

interface ReleaseDateProps {
  releaseDate?: string;
}

export const ReleaseDate = ({ releaseDate }: ReleaseDateProps) => {
  return (
    <StyledReleaseDate>
      {`제품 출시 예정일: ${releaseDate ?? "미정"}`}
    </StyledReleaseDate>
  );
};

const StyledReleaseDate = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 22px;
  color: #0500ff; /* 메인 색상 */
  margin: 10px 0;
`;
