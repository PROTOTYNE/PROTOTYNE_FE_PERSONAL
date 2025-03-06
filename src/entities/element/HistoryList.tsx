import { useState } from "react";
import SearchBar from "./SearchBar";
import Toggle from "./Toggle";
import HistoryItemComponent from "./HistoryItemComponent";
import TicketModal from "./TicketModal";
import styled from "@emotion/styled"

interface HistoryItem {
  createdAt: string;
  name: string;
  ticketDesc: string;
  ticketChange: number;
}

interface HistoryListProps {
  data: HistoryItem[];
}

const HistoryList: React.FC<HistoryListProps> = ({ data }) => {
  const [ticketModal, setTicketModal] = useState(false);
  const [month, setMonth] = useState("1개월");
  const [order, setOrder] = useState("최신순");

  const handleArrowClick = () => setTicketModal(true);
  const handleModalSelect = (type: "month" | "order", value: string) => {
    if (type === "month") setMonth(value);
    if (type === "order") setOrder(value);
    setTicketModal(false);
  };
  const handleOutsideClick = () => setTicketModal(false);

  return (
    <div>
      <SearchBar month={month} order={order} onClick={handleArrowClick} />
      <Toggleontainer>
        <Toggle />
      </Toggleontainer>

      {data.map((history, index) => (
        <HistoryItemComponent key={index} history={history} />
      ))}
      {ticketModal && (
        <TicketModal
          onSelect={handleModalSelect}
          onOutsideClick={handleOutsideClick}
          initialMonth={month}
          initialOrder={order}
        />
      )}
    </div>
  );
};

export default HistoryList;


const Toggleontainer = styled.div`
  display: flex;
  margin: 10px 0;
  justify-content: flex-end;
`