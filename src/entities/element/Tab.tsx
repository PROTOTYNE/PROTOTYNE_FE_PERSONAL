import React from "react";
import styled from "@emotion/styled";

interface TabProps {
  label: string;
  active: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ label, active, onClick }) => {
  return (
    <StyledTab active={active} onClick={onClick}>
      {label}
    </StyledTab>
  );
};

export default Tab;

const StyledTab = styled.div<{ active: boolean }>`
  padding: 10px 0;
  cursor: pointer;
  border-bottom: ${({ active }) => (active ? "1.5px solid blue" : "none")};
  color: ${({ active }) => (active ? "blue" : "#8E8E8E")};
  font-weight: 700;
`;
