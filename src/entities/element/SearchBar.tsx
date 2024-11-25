import styled from "@emotion/styled";
import { IoIosSearch, IoIosArrowDown } from "react-icons/io";

const SearchBar = ({ month, order, onClick }) => {
  return (
    <SearchBarContainer onClick={onClick}>
      <SearchContainer />
      <SearchIcon>
        <IoIosSearch size={"25px"} />
      </SearchIcon>
      <SearchText>
        {month}·{order} <IoIosArrowDown />
      </SearchText>
    </SearchBarContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.input`
  width: 100%;
  height: 33px;
  margin: 0 auto;
  background: #f6f5ff;
  border-radius: 6px;
  border: none;
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 90%;
  bottom: 0%;
`;

const SearchBarContainer = styled.div`
  position: relative;
`;

const SearchText = styled.div`
  position: absolute;
  left: 65%;
  bottom: 20%;
`;
