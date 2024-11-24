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
        <div>조서영님 보유 티켓: {mockResponse.ticketNumber}개</div>
        <div>매월 10개의 무료 티켓을 제공해드립니다</div>
      </TicketHeaderContainer>
      <TabContainer>
        <Tab
          label="티켓 구매"
          active={activeTab === "buyTicket"}
          onClick={() => setActiveTab("buyTicket")}
        />
        <Tab
          label="전체 내역"
          active={activeTab === "entireHistory"}
          onClick={() => setActiveTab("entireHistory")}
        />
        <Tab
          label="사용 내역"
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
  border-bottom: 1px solid #ccc;
  margin-bottom: 20px;
`;

const ContentContainer = styled.div`
  padding: 20px;
`;

const TicketHeaderContainer = styled.div`
  width: 326px;
  height: 81px;

  /* Back */
  background: #f6f5ff;
  border-radius: 6px;
`;
