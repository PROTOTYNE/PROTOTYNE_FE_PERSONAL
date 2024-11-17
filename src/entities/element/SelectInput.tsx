import styled from "@emotion/styled";
import Select, { StylesConfig, SingleValue } from "react-select";

import { colors } from "@/shared";

const customStyles: StylesConfig<
  { label: string; value: string | number },
  false
> = {
  control: (provided, state) => ({
    ...provided,

    width: "200px",
    minHeight: "30px",
    height: "35px",

    //textAlign: "center",
    color: state.hasValue ? colors.main : "#B9B9B9",
    fontSize: "15px",

    border: state.hasValue ? "2px solid" + colors.main : "2px solid #B9B9B9",
    borderRadius: "5px",
    backgroundColor: state.hasValue ? colors.main : "none",
    appearance: "none",
    boxShadow: "none",
    cursor: "pointer",

    "&:focus": {
      backgroundColor: "#B9B9B9",
    },
  }),

  valueContainer: (provided) => ({
    ...provided,
    height: "30px",
  }),

  input: (provided) => ({
    ...provided,
    margin: "0px",
  }),
  indicatorSeparator: () => ({
    display: "none",
  }),
  indicatorsContainer: (provided) => ({
    ...provided,
    height: "30px",
  }),

  option: (provided, state) => ({
    ...provided,
    color: state.isSelected ? "#fff" : "black",
    backgroundColor: state.isSelected ? colors.main : "#fff",
  }),

  menu: (provided) => ({
    ...provided,
    borderRadius: "5px",
    overflow: "hidden",
  }),

  singleValue: (provided) => ({
    ...provided,
    color: "#ffffff",
  }),

  placeholder: (provided) => ({
    ...provided,
    color: "black",
    padding: "0 3px",
  }),
};

export const SelectInput = ({
  label,
  option,
  onChange,
}: {
  label: string;
  option: { label: string; value: string | number }[];
  onChange: (
    newValue: SingleValue<{ label: string; value: string | number }>
  ) => void;
}) => (
  <Container>
    <Label>{label}</Label>
    <Select
      options={option}
      styles={customStyles}
      placeholder="미입력"
      components={{
        IndicatorSeparator: () => null,
      }}
      onChange={onChange}
    />
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 90%;

  margin-top: 10px;
  margin-bottom: 10px;
`;

const Label = styled.span`
  font-size: 15px;

  margin-bottom: 2px;

  font-weight: bold;
`;
