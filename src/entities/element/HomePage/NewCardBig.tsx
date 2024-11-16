import { BookmarkOutlined, TicketImg } from "@/shared";
import styled from "@emotion/styled";

interface NewCardProps {
  id: number;
  company: string;
  title: string;
  ticket: number;
  image: string;
}

export const NewCardBig = ({
  title,
  date,
  image,
  company,
  ticket,
}: NewCardProps) => {
  return (
    <CardWrapper>
      <img src={image} alt="new card" />
      <div className="right-info">
        <div id="title">
          {title} <BookmarkOutlined />
        </div>
        <div id="company">{company}</div>
      </div>
      <div id="ticket">
        <TicketImg />
        <div>x {ticket}개</div>
      </div>
    </CardWrapper>
  );
};

const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 168px;
  border: 1px solid #0500ff;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0px 4px 4px 0px rgba(5, 0, 255, 0.1);
  img {
    position: absolute;
    top: -30px;
    left: -30px;
    width: 232px;
    height: 232px;
    border-radius: 10px;
  }
  .right-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    position: absolute;
    height: 100%;
    width: 45%;
    right: 0;
    #title {
      font-size: 21px;
      font-weight: bold;
    }
    #company {
      font-size: 12px;
      color: #8e8e8e;
    }
  }
  #ticket {
    position: absolute;
    bottom: 10px;
    right: 14px;
    display: flex;
    align-items: start;
    font-size: 12px;
    color: #667197;
    div {
      padding-top: 2px;
    }
  }
`;
