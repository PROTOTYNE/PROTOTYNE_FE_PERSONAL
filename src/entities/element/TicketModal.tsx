import styled from "@emotion/styled";
import { useState } from "react";
//merge한 뒤에 branch1에서 BackScreen import

interface TicketModalProps {
  onSelect: (type: "month" | "order", value: string) => void;
  onOutsideClick: () => void;
  initialMonth: string; // 초기 조회기간
  initialOrder: string; // 초기 정렬
}

const historyButton: { [key: string]: "short" | "long" }[] = [
  {
    "1주일": "short",
    "1개월": "short",
    "3개월": "short",
    월별: "long",
    직접설정: "long",
  },
  {
    최신순: "long",
    과거순: "long",
  },
];
const TicketModal: React.FC<TicketModalProps> = ({
  onSelect,
  onOutsideClick,
  initialMonth,
  initialOrder,
}) => {
  const [selectedButtons, setSelectedButtons] = useState({
    month: initialMonth, // 초기값 설정
    order: initialOrder, // 초기값 설정
  });

  const handleButtonClick = (type: "month" | "order", value: string) => {
    setSelectedButtons((prev) => ({
      ...prev,
      [type]: value,
    }));
    onSelect(type, value); // 부모 컴포넌트에 선택값 전달
  };

  const renderButtons = (
    buttons: Record<string, "short" | "long">,
    type: "month" | "order"
  ) =>
    Object.entries(buttons).map(([label, variant], index) => (
      <TicketModalButton
        key={index}
        variant={variant}
        selected={selectedButtons[type] === label} // 선택 여부 판단
        onClick={() => handleButtonClick(type, label)}
      >
        {label}
      </TicketModalButton>
    ));

  return (
    <ModalOverlay onClick={onOutsideClick}>
      <ModalContainer>
        <h3>전체내역 조회 조건 설정</h3>
        <Section>
          <h3>조회기간</h3>
          <ButtonContainer>
            {renderButtons(historyButton[0], "month")}
          </ButtonContainer>
        </Section>
        <Section>
          <h3>정렬</h3>
          <ButtonContainer>
            {renderButtons(historyButton[1], "order")}
          </ButtonContainer>
        </Section>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default TicketModal;
//merge한 뒤에 branch1에서 BackScreen import
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5); // 배경 어둡게 처리
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 99;
`;

const ModalContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 60vh;
  bottom: 0;
  left: 0;
  z-index: 99;
  background: #ffffff;
  box-shadow: 11px 5px 17.4px rgba(0, 0, 0, 0.4);
  border-radius: 40px 40px 0px 0px;
  padding: 50px;
  box-sizing: border-box;
`;

const Section = styled.div`
  margin-bottom: 20px;

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TicketModalButton = styled.button<{
  variant: "short" | "long";
  selected: boolean;
}>`
  padding: 10px;
  width: ${(props) => (props.variant === "short" ? "102px" : "156px")};
  height: 38px;
  border: 1px solid ${(props) => (props.selected ? "#0500ff" : "#a5a5a5")};
  border-radius: 5px;
  background-color: ${(props) => (props.selected ? "#e5f1ff" : "white")};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => (props.selected ? "#cce7ff" : "#f0f0f0")};
  }
`;
