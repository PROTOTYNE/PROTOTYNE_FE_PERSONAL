import styled from "@emotion/styled";
import ticket from "/image/ticket.svg";
import HistoryList from "./HistoryList";

const TicketCost = {
  5: 5000,
  10: 9000,
  20: 16000,
};

const entireHistory = [
  {
    createdAt: "2024-11-24T04:22:20.941Z",
    name: "프로토타인",
    ticketDesc: "7월 무료 제공 티켓",
    ticketChange: 10,
  },
  {
    createdAt: "2024-11-24T04:22:20.941Z",
    name: "루미큐브 클래식",
    ticketDesc: "시제품 체험",
    ticketChange: -2,
  },
];

const usedHistory = [
  {
    createdAt: "2024-11-24T05:54:37.626Z",
    name: "Adidas Samba 스니커즈",
    ticketDesc: "Adidas",
    ticketChange: -5,
  },
  {
    createdAt: "2024-11-24T05:54:37.626Z",
    name: "Mac Pro 13형",
    ticketDesc: "Apple",
    ticketChange: -20,
  },
];

export const BuyTicket = () => (
  <BuyTicketContainer>
    {Object.entries(TicketCost).map(([key, value]) => (
      <TicketContainer key={key}>
        <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
          <img src={ticket} />
          <strong>{key} 티켓</strong>
        </div>
        {value.toLocaleString()}원
      </TicketContainer>
    ))}
  </BuyTicketContainer>
);

export const EntireHistory = () => (
  <HistoryList data={entireHistory}/>
);

export const UsedHistory = () => (
  <HistoryList data={usedHistory} />
);

const TicketContainer = styled.div`
  width: 326px;
  height: 48px;
  background: #ffffff;
  border: 1px solid #0500ff;
  border-radius: 6px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  box-sizing: border-box;
`;

const BuyTicketContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin: 30px 0;
`