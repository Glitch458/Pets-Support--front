import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 0.7;
  color: #111111;
  @media screen and (min-width: 768px) {
    font-size: 48px;
  }
`;

export const SearchInputContainer = styled.div`
  width: 100%;
  display: flex;
  position: relative;
  @media screen and (min-width: 768px) {
    max-width: 608px;
  }
`;

export const SearchInput = styled.input`
  width: 100%;
  padding: 10px 15px;
  border-radius: 20px;
  border: none;
  background-color: #ffffff;
  box-shadow: 4px 7px 14px rgba(49, 21, 4, 0.07);
  font-weight: 500;
  font-size: 16px;
  line-height: 0.7;
  letter-spacing: 4%;
  ::placeholder {
    color: #535353;
  }
  :focus {
    outline: none;
  }
`;
