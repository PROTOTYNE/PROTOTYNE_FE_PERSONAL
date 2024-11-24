import styled from "@emotion/styled";
import { CiSearch } from "react-icons/ci";

const SearchContainer = styled.input`
  /* search */
  /* Auto layout */
  display: flex;
  align-items: center;
  padding: 10px 40px;
  gap: 10px;
  box-sizing: border-box;
  width: 80%;
  height: 45px;

  /* gray/gray_F4F4F4 */
  background: #f4f4f4;
  border-radius: 6px;
`;

const SearchIcon = styled.div`
  position: absolute;
  right: 97%;
  bottom: 25%;
`;

const SearchBarContainer = styled.div`
  position: relative;
`;

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <SearchContainer />
      <SearchIcon>
        <CiSearch />
      </SearchIcon>
    </SearchBarContainer>
  );
};

export default SearchBar;
