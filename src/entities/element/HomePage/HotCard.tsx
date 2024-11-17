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
  participant?: boolean;
}

export const HotCard = ({
  // id,
  title,
  company,
  apply,
  ticket,
  image,
  participant,
}: HotCardProps) => {
  return (
    <CardContainer>
      <ImageBox participant>
        <img src={image} alt="hot card" />
        <div>
          <TicketImg /> X {ticket}개
        </div>
      </ImageBox>
      <DescContainer>
        <p id="title">{title}</p>
        <div>
          <p id="company">{company}</p>
          {participant && <p id="apply">{apply}명 신청</p>}
        </div>
      </DescContainer>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ImageBox = styled.div<{ participant: boolean }>`
  position: relative;
  width: ${(participant) => (participant ? "85%" : "137px")};
  height: ${(participant) => (participant ? "85%" : "137px")};
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
  margin-top: 10px;
  flex-direction: column;
  #title {
    font-size: 14px;
    color: ${colors.black};
    font-weight: bold;
    margin: 0;
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
