import styled from "@emotion/styled";
import ticket from "/image/ticket.svg";
import Toggle from "./Toggle";
import SearchBar from "./SearchBar";

const TicketCost = {
  5: 5000,
  10: 9000,
  20: 16000,
};

//pentalty 여부 필요(css 적용)
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
  <div>
    {Object.entries(TicketCost).map(([key, value]) => (
      <TicketContainer key={key}>
        <div style={{ display: "flex", justifyContent: "center", gap: "5px" }}>
          <img src={ticket} />
          <strong>{key} 티켓</strong>
        </div>
        {value.toLocaleString()}원
      </TicketContainer>
    ))}
  </div>
);

export const EntireHistory = () => (
  <div>
    <SearchBar />
    <Toggle />
    {entireHistory.map((history, index) => (
      <HistoryItem key={index}>
        <div>날짜: {new Date(history.createdAt).toLocaleDateString()}</div>
        <div>이름: {history.name}</div>
        <div>설명: {history.ticketDesc}</div>
        <div>
          변경된 티켓 수:
          {history.ticketChange > 0
            ? `+${history.ticketChange}`
            : history.ticketChange}
        </div>
      </HistoryItem>
    ))}
  </div>
);

//사용 내역: 전체 내역에서 제공 티켓, 패널티 제외한 내역?
export const UsedHistory = () => (
  <div>
    <SearchBar />
    <Toggle />
    {usedHistory.map((history, index) => (
      <HistoryItem key={index}>
        <div>날짜: {new Date(history.createdAt).toLocaleDateString()}</div>
        <div>이름: {history.name}</div>
        <div>설명: {history.ticketDesc}</div>
        <div>
          변경된 티켓 수:
          {history.ticketChange > 0
            ? `+${history.ticketChange}`
            : history.ticketChange}
        </div>
      </HistoryItem>
    ))}
  </div>
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
  margin: 20px;
`;

const HistoryItem = styled.div`
  padding: 10px;
  margin: 10px 0;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
`;
