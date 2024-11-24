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
  padding: 10px 20px;
  cursor: pointer;
  font-weight: ${({ active }) => (active ? "bold" : "normal")};
  border-bottom: ${({ active }) => (active ? "2px solid blue" : "none")};
  color: ${({ active }) => (active ? "blue" : "black")};
`;
