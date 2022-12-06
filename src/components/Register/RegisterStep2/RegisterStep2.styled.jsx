import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 148px;
  margin-left: auto;
  margin-right: auto;
  padding: 20px 0;
  background-color: ${(p) => p.theme.colors.gradient};

  @media screen and (min-width: 768px) {
    box-shadow: 7px 4px 14px rgba(0, 0, 0, 0.11);
    border-radius: 40px;
    max-width: 618px;
    background-color: ${(p) => p.theme.colors.white};
    padding: 60px 0;
}
`;

export const RegisterHeader = styled.h2`
  margin-bottom: 40px;
  letter-spacing: 0.04em;
  line-height: 49px;
  font-size: 24px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};

  @media screen and (min-width: 768px) {
    font-size: 36px;
}
`;

export const FormInput = styled.input`
  box-sizing: border-box;
  display: flex;
  width: 280px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  padding: 14px 32px;
  font-size: 18px;
  margin-bottom: 16px;
  outline: ${p => p.theme.colors.accent};
  background-color: ${p => p.theme.colors.background};
  &:focus-visible {
    border: 1px solid #f59256;
  }
  &::placeholder {
    font-size: 18px;
    letter-spacing: 0.04em;
    line-height: 25px;
    font-weight: ${p => p.theme.fontWeights.regular};
    font-family: ${p => p.theme.fonts.body};
  }

  @media screen and (min-width: 768px) {
    width: 458px;
}
`;

export const AuthButton = styled.button`
    width: 100%;
    margin-top: 40px;
    margin-bottom: 40px;
    padding: 10.5px 0;
    border-radius: 40px;
    letter-spacing: 0.04em;
    line-height: 27px;
    font-size: 20px;
    color: ${p => p.theme.colors.white};
    border: 2px solid #f59256;
    outline: ${p => p.theme.colors.accent};
    background-color: ${(p) => p.theme.colors.accent};
    font-family: ${(p) => p.theme.fonts.body};
    font-weight: ${(p) => p.theme.fontWeights.medium};
      &:hover, &:focus {
          color: black;
          box-shadow: none;
          border: 2px solid #f59256;
          background-color: ${(p) => p.theme.colors.white};
  }
`;

export const BackButton = styled.button`
    width: 100%; 
    margin-bottom: 40px;
    padding: 10.5px 0;
    border-radius: 40px;
    letter-spacing: 0.04em;
    line-height: 27px;
    font-size: 20px;
    border: 2px solid #f59256;
    color: ${p => p.theme.colors.black};
    outline: ${p => p.theme.colors.accent};
    background-color: ${p => p.theme.colors.white};
    font-family: ${p => p.theme.fonts.body};
    font-weight: ${p => p.theme.fontWeights.medium};
  &:hover, &:focus {
    color: ${p => p.theme.colors.white};
    box-shadow: none;
    border: 2px solid #f59256;
    background-color: ${p => p.theme.colors.accent};
  }
`;

export const FormText = styled.p`
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: 12px;
  letter-spacing: 0.04em;
  line-height: 16px;
  color: rgba(17, 17, 17, 0.6);
`;

export const RegisterLink = styled(NavLink)`
  display: inline-block;
  margin-left: 2px;
  color: ${p => p.theme.colors.blue};
`;

export const NameError = styled.p`
  position: absolute;
  color: red;
  top: 200px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
`;

export const CityError = styled.p`
  position: absolute;
  color: red;
  top: 270px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
`;

export const PhoneError = styled.p`
  position: absolute;
  color: red;
  top: 335px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 12px;
`;
