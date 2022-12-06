import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import {
  SearchContainer,
  SearchTitle,
  Form,
  Input,
  Button,
} from './NoticesSearch.styled';

import SearchIcon from '@mui/icons-material/Search';

const NoticesSearch = ({ children }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const params = searchParams.get('search') || '';

  const [value, setValue] = useState('');

  useEffect(() => {
    if (params !== '') {
      setValue(params.split('+').join(' '));
    }
  }, [params]);

  const handeInputChange = e => {
    const searchvalue = e.target.value;
    setValue(searchvalue);
    setSearchParams(searchvalue !== '' ? { search: searchvalue } : {});
  };

  const handleSubmit = e => {
    e.preventDefault();
    //const normalizeValue = value.trim().split(' ').join('-');
    setSearchParams(value !== '' ? { search: value } : {});
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
