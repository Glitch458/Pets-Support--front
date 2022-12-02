import styled from 'styled-components';

export const CloseBtn = styled.button`
  /* width: 44px;
  height: 44px; */
  position: absolute;
  top: 20px;
  right: 20px;
  @media ${p => p.theme.media.desktop} {
    top: 24px;
    right: 24px;
  }
  width: 34px;
  height: 34px;
  @media ${p => p.theme.media.tablet} {
    width: 44px;
    height: 44px;
  }
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 0;
  background: #fdf7f2;
  border-radius: 50%;
  cursor: pointer;
  color: #000;
  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    color: #f59256;
    opacity: 1;
  }
`;
