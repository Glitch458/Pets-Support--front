import { useEffect, useState } from 'react';

import {
  SearchContainer,
  SearchTitle,
  Form,
  Input,
  Button,
} from './NoticesSearch.styled';

import SearchIcon from '@mui/icons-material/Search';

const NoticesSearch = ({ children, onSubmit, filter }) => {
  const [value, setValue] = useState('');

  useEffect(() => {
    if (filter) {
      setValue(filter);
    }
  }, [filter]);

  const handeInputChange = e => {
    setValue(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(value);
  };

  return (
    <SearchContainer>
      <SearchTitle>{children}</SearchTitle>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={value}
          placeholder="Search"
          onChange={handeInputChange}
        />
        <Button type="submit">
          <SearchIcon
            sx={{
              width: 24,
              height: 24,
              color: '#111111',
            }}
          />
        </Button>
      </Form>
    </SearchContainer>
  );
};

export default NoticesSearch;
