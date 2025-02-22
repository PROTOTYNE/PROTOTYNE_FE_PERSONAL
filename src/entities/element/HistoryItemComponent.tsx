import styled from "@emotion/styled";

interface HistoryItemProps {
  history: {
    createdAt: string;
    name: string;
    ticketDesc: string;
    ticketChange: number;
  };
}

const HistoryItemComponent: React.FC<HistoryItemProps> = ({ history }) => {
  const isMinus = history.ticketChange < 0;

  return (
    <HistoryItem minus={isMinus}>
      <div>{new Date(history.createdAt).toLocaleDateString()}</div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <strong>{history.name}</strong>
        <TicketText color={history.ticketChange > 0 ? "blue" : "red"}>
          {history.ticketChange > 0
            ? `+${history.ticketChange}`
            : history.ticketChange}{" "}
          티켓
        </TicketText>
      </div>
      <DescriptionContainer>{history.ticketDesc}</DescriptionContainer>
    </HistoryItem>
  );
};

export default HistoryItemComponent;

export const HistoryItem = styled.div<{ minus?: boolean }>`
  padding: 10px;
  margin: 10px 0;
  border-top: 2px solid #f6f5ff;
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const TicketText = styled.div<{ color: string }>`
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  color: ${(props) => props.color};
`;

export const DescriptionContainer = styled.div`
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: #8e8e8e;
`;
