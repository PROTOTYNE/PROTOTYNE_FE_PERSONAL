import { colors } from "@/shared";
import styled from "@emotion/styled";
import { useState } from "react";

export const MultiSelectInput = ({
  label,
  options,
  onClick,
  long,
}: {
  label: string;
  options: { label: string; value: string | number }[];
  onClick: (value: string | number) => void;
  long?: boolean;
}) => {
  return (
    <>
      <Label>{label}</Label>
      <Container>
        {options.map((option) => (
          <ButtonComponent
            long={long}
            key={option.value}
            onClick={() => onClick(option.value)}
          >
            {option.label}
          </ButtonComponent>
        ))}
      </Container>
    </>
  );
};

const ButtonComponent = ({
  onClick,
  children,
  long,
}: {
  children: React.ReactNode;
  onClick: () => void;
  long?: boolean;
}) => {
  const Button = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 10px;
    border: 2px solid #d9d9d9;

    width: ${long ? "100%" : "28%"};
    height: 50px;
    color: #000000;
    background-color: white;

    margin-top: 7px;
    margin-right: 10px;

    font-size: 15px;
  `;

  const SelectButton = styled(Button)`
    color: ${colors.main};
    border-color: ${colors.main};
  `;

  const [on, setOn] = useState(false);
  if (!on)
    return (
      <Button
        onClick={() => {
          onClick();
          setOn(true);
        }}
      >
        {children}
      </Button>
    );
  else
    return (
      <SelectButton
        onClick={() => {
          onClick();
          setOn(false);
        }}
      >
        {children}
      </SelectButton>
    );
};

const Label = styled.span`
  font-size: 16px;

  width: 90%;

  margin-top: 15px;
  margin-bottom: 8px;
  margin-left: 40px;

  font-weight: bold;
`;

const Container = styled.div`
  width: 97%;

  margin-left: 5%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
