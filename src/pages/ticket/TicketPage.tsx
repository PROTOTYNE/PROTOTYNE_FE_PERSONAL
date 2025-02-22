import { useState } from "react";
import styled from "@emotion/styled";
import Tab from "@/entities/element/Tab";
import {
  BuyTicket,
  EntireHistory,
  UsedHistory,
} from "@/entities/element/TabContents";

const mockResponse = {
  ticketNumber: 4,
  usedTicket: 0,
  appliedNum: 0,
  selectedNum: 0,
  ongoingNum: 0,
  completedNum: 0,
};

const TicketPage = () => {
  const [activeTab, setActiveTab] = useState("buyTicket"); // 단일 상태로 관리

  return (
    <>
      <TicketHeaderContainer>
        <div style={{ fontSize: "17px" }}>
          <strong>조서영</strong> 님 보유 티켓:
          <b style={{ color: "blue" }}> {mockResponse.ticketNumber}</b>개
        </div>
        <div style={{ fontSize: "14px" }}>
          <span style={{ color: "blue" }}> 매월 10개</span>의 무료 티켓을
          제공해드립니다
        </div>
      </TicketHeaderContainer>
      <TabContainer>
        <Tab
          label="티켓구매"
          active={activeTab === "buyTicket"}
          onClick={() => setActiveTab("buyTicket")}
        />
        <Tab
          label="전체내역"
          active={activeTab === "entireHistory"}
          onClick={() => setActiveTab("entireHistory")}
        />
        <Tab
          label="사용내역"
          active={activeTab === "usedHistory"}
          onClick={() => setActiveTab("usedHistory")}
        />
      </TabContainer>

      <ContentContainer>
        {activeTab === "buyTicket" && <BuyTicket />}
        {activeTab === "entireHistory" && <EntireHistory />}
        {activeTab === "usedHistory" && <UsedHistory />}
      </ContentContainer>
    </>
  );
};

export default TicketPage;

const TabContainer = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 20px;
`;

const ContentContainer = styled.div`
  width: 95vw;
  margin: 0 auto;
`;

const TicketHeaderContainer = styled.div`
  width: 326px;
  padding: 30px 20px;
  box-sizing: border-box;
  background: #f6f5ff;
  border-radius: 6px;
  margin: 30px calc(50vw - 326px / 2);
  display: block;
`;
