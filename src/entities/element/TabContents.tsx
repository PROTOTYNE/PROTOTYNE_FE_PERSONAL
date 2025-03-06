import styled from "@emotion/styled";
import ticket from "/image/ticket.svg";
import HistoryList from "./HistoryList";
import { useEffect, useState } from "react";

const TicketCost = {
  5: 5000,
  10: 9000,
  20: 16000,
};

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

export const EntireHistory = () => {
  const [entireHistory, setEntireHistory] = useState([]);
  const endDate = new Date().toISOString().split("T")[0]; // 현재 날짜 (YYYY-MM-DD)

  useEffect(() => {
    const fetchEentireHistory = async () => {
      try {
        const response = await fetch(
          `http://prototyne.site/users/ticket/all?startDate=2024-01-01&endDate=${endDate}`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1IiwiaWF0IjoxNzQwNTcyNjI2LCJleHAiOjE3NDA1NzYyMjZ9.Qvz9mvnxD3Tzid6Ip_8VU4X-LBylx_fQPd2gemD0uDo`,
            },
          }
        );
        const data = await response.json();
        setEntireHistory(data.result);
      } catch (error) {
        console.error("Error fetching used history:", error);
      }
    };

    fetchEentireHistory();
  }, []);

  return <HistoryList data={entireHistory} />;
};

export const UsedHistory = () => {
  const [usedHistory, setUsedHistory] = useState([]);
  const endDate = new Date().toISOString().split("T")[0]; // 현재 날짜 (YYYY-MM-DD)

  useEffect(() => {
    const fetchUsedHistory = async () => {
      try {
        const response = await fetch(
          `http://prototyne.site/users/ticket/used?startDate=2024-01-01&endDate=${endDate}`,
          {
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI1IiwiaWF0IjoxNzQwNTcyNjI2LCJleHAiOjE3NDA1NzYyMjZ9.Qvz9mvnxD3Tzid6Ip_8VU4X-LBylx_fQPd2gemD0uDo`,
            },
          }
        );
        const data = await response.json();
        setUsedHistory(data.result);
      } catch (error) {
        console.error("Error fetching used history:", error);
      }
    };

    fetchUsedHistory();
  }, []);

  return <HistoryList data={usedHistory} />;
};

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
`;
