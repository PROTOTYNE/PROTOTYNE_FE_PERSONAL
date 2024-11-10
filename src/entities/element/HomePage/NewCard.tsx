import styled from "@emotion/styled";

interface NewCardProps {
  id: number;
  title: string;
  date: string;
  image: string;
}

export const NewCard = ({ title, date, image }: NewCardProps) => {
  return (
    <CardContainer>
      <ImageBox>
        <img src={image} alt="new card" />
      </ImageBox>
      <DescContainer>
        <p id="title">{title}</p>
        <p id="date">결과 발표일: {date}</p>
      </DescContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

const ImageBox = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 9px;
  border: 1px solid #0500ff;
  padding: 10px;
  img {
    width: 100%;
    height: 100%;
  }
`;

const DescContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  p {
    margin: 0;
  }
  #title {
    font-size: 14px;
    font-weight: bold;
  }
  #date {
    font-size: 12px;
    color: #bebebe;
  }
`;
