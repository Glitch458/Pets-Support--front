import styled from 'styled-components';

export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 45px;
  @media screen and (min-width: 768px) {
    padding-top: 95px;
  }
  @media screen and (min-width: 1280px) {
    padding-top: 60px;
  }
`;

export const SearchTitle = styled.p`
  font-weight: 700;
  font-size: 24px;
  line-height: 0.7;
  color: #111111;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    font-size: 48px;
    margin-bottom: 40px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  position: relative;

  @media screen and (min-width: 768px) {
    max-width: 608px;
  }
`;

export const Input = styled.input`
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
export const Button = styled.button`
  position: absolute;
  bottom: 6px;
  right: 15px;
  border: none;
  background-color: transparent;
`;
