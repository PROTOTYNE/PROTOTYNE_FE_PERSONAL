import styled from "@emotion/styled";
import { BookmarkOutlined, TicketImg } from "@/shared";
import { colors } from "@/shared";

interface DdayCardProps {
  id: number;
  title: string;
  company: string;
  apply: number;
  ticket: number;
  image: string;
}

export const DdayCard = ({
  // id,
  title,
  company,
  ticket,
  image,
}: DdayCardProps) => {
  return (
    <CardContainer>
      <ImageBox>
        <img src={image} alt="hot card" />
        <div>
          <TicketImg /> X {ticket}개
        </div>
      </ImageBox>
      <DescContainer>
        <div>
          <p id="title">{title}</p>
          <p id="company">{company}</p>
        </div>
        <BookmarkOutlined />
      </DescContainer>
      <DdayBox>D-2</DdayBox>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const DdayBox = styled.div`
  position: absolute;
  top: -10px;
  width: 50px;
  height: 22px;
  background-color: ${colors.main};
  color: white;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;

const ImageBox = styled.div`
  position: relative;
  width: 140px;
  height: 135px;
  border-radius: 9px;
  border: 1px solid #0500ff;
  padding: 10px;
  img {
    width: 100%;
    height: 100%;
  }
  div {
    color: #667197;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 8px;
    right: 8px;
  }
`;

const DescContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  div {
    font-size: 11px;
    display: flex;
    flex-direction: column;
    p {
      margin: 0;
    }
    #company {
      color: #667197;
    }
    #title {
      font-size: 14px;
      color: ${colors.black};
      font-weight: bold;
    }
  }
`;
