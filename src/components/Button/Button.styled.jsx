import styled from 'styled-components';

//Category Button
export const ButtonBasic = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 28px;
  width: ${p => (p.fullwidth ? '100%' : 'auto')};
  font-family: ${p => p.theme.fonts.body};
  font-size: 14px;
  font-weight: ${p => p.theme.fontWeights.medium};
  letter-spacing: 0.04em;
  line-height: 1.35;
  border: 2px solid #f59256;
  border-radius: 40px;
  color: ${p =>
    p.fullwidth ? p.theme.colors.accent : p.theme.colors.primaryText};
  background-color: ${p => p.theme.colors.white};
  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;
//Add Button
export const AddButtonCircleStyle = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: none;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  background-color: ${p => p.theme.colors.accent};
  font-family: ${p => p.theme.fonts.body};
  font-weight: 500;
  font-size: 12px;
  line-height: 1.3;
  color: ${p => p.theme.colors.white};
`;
export const AddButtonBasicStyle = styled.button`
  display: flex;
  align-items: center;
  border: none;
  font-family: ${p => p.theme.fonts.body};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.35;
  background-color: transparent;
  color: ${p => p.theme.colors.black};
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-left: 15px;
    width: 40px;
    height: 40px;
    background-color: ${p => p.theme.colors.accent};
  }
`;
