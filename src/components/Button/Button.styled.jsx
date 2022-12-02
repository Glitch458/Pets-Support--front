import styled from 'styled-components';

export const ButtonStyles = `display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 28px;
  font-size: 14px;
  letter-spacing: 0.04em;
  line-height: 1.35;
  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;
  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
   `;
//Button

export const ButtonBasic = styled.button`
  ${ButtonStyles};
  @media ${props => props.theme.media.tablet} {
    margin-right: 20px;
    width: 180px;
    height: 44px;
  }
  font-weight: ${p => p.theme.fontWeights.medium};
  font-family: ${p => p.theme.fonts.body};
  background-color: ${p => p.theme.colors.white};
  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;

//Category Link
export const LinkBasic = styled.a`
  ${ButtonStyles};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-family: ${p => p.theme.fonts.body};
  background-color: ${p => p.theme.colors.white};
  :hover:not(.active),
  :focus-visible:not(.active) {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
    transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
  &.active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;

//Add Link
export const AddLinkCircle = styled.a`
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
  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  :hover,
  :focus-visible {
    background-color: ${p => p.theme.colors.buttonAccent};
    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;
export const AddLinkBasic = styled.a`
  display: flex;
  align-items: center;
  border: none;
  font-family: ${p => p.theme.fonts.body};
  font-size: 20px;
  font-weight: 500;
  line-height: 1.35;
  background-color: transparent;
  color: ${p => p.theme.colors.black};
  cursor: pointer;
  :hover,
  :focus-visible {
    div {
      background-color: ${p => p.theme.colors.buttonAccent};
      transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
    }
  }
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-left: 15px;
    width: 40px;
    height: 40px;
    background-color: ${p => p.theme.colors.accent};
    transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  }
`;

export const HeartBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 240px;
  height: 40px;
  padding: 9px 41px;
  background: #ffffff;
  border: '2px solid #f59256';
  border-radius: 40px;
  cursor: pointer;
  font-family: 'Manrope';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1),
    border 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  color: ${p => p.theme.colors.black};
  fill: ${p => p.theme.colors.accent};
  stroke: ${p => p.theme.colors.accent};
`;
