import styled from "@emotion/styled";
import ticket from "../../../public/icons/티켓.svg";

interface Props {
  ticketCount?: number;
}

const TicketInfo = ({ ticketCount }: Props) => (
  <StyledTicketInfo>
    <img src={ticket} alt="Ticket" /> X {ticketCount}개
  </StyledTicketInfo>
);

const StyledTicketInfo = styled.div`
  font-family: "Inter";
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  text-align: right;
  color: #667197;
`;

export default TicketInfo;
