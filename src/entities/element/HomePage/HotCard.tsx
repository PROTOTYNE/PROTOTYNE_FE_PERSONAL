import styled from "@emotion/styled";
import { TicketImg } from "@/shared";
import { colors } from "@/shared";

interface HotCardProps {
  id: number;
  title: string;
  company: string;
  apply: number;
  ticket: number;
  image: string;
}

export const HotCard = ({
  id,
  title,
  company,
  apply,
  ticket,
  image,
}: HotCardProps) => {
  return (
    <CardContainer>
      <ImageBox>
        <img src={image} alt="hot card" />
        <div>
          <TicketImg /> X {ticket}개
        </div>
      </ImageBox>
      <DescContainer>
        <h3>{title}</h3>
        <div>
          <p id="company">{company}</p>
          <p id="apply">{apply}명 신청</p>
        </div>
      </DescContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageBox = styled.div`
  position: relative;
  width: 137px;
  height: 137px;
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
  flex-direction: column;
  h3 {
    margin: 10px 0 0 0;
  }
  div {
    font-size: 11px;
    display: flex;
    justify-content: space-between;
    p {
      margin: 0;
    }
    #company {
      color: #667197;
    }
    #apply {
      font-size: 10px;
      color: ${colors.main};
    }
  }
`;
