import {
  SearchContainer,
  SearchTitle,
  SearchInputContainer,
  SearchInput,
} from './NoticesSearch.styled';

import SearchIcon from '@mui/icons-material/Search';

const NoticesSearch = ({ children }) => {
  return (
    <SearchContainer>
      <SearchTitle>{children}</SearchTitle>
      <SearchInputContainer>
        <SearchIcon
          sx={{
            width: 24,
            height: 24,
            position: 'absolute',
            bottom: '7px',
            right: '15px',
            color: '#111111',
          }}
        />
        <SearchInput type="text" placeholder="Search" />
      </SearchInputContainer>
    </SearchContainer>
  );
};

export default NoticesSearch;
