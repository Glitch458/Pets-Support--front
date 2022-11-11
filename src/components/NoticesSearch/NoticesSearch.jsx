import {
  SearchContainer,
  SearchTitle,
  SearchInput,
} from './NoticesSearch.styled';

const NoticesSearch = () => {
  return (
    <SearchContainer>
      <SearchTitle>Find your favorite pet</SearchTitle>
      <SearchInput type="text" placeholder="Search"></SearchInput>
    </SearchContainer>
  );
};

export default NoticesSearch;
