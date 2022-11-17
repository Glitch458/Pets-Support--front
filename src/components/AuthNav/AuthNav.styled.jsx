import styled from 'styled-components';

export const List = styled.ul`
  display: none;

  @media screen and (min-width: 768px) {
    display: inline-flex;
    position: absolute;
    top: 20px;
    right: 80px;
  }
  @media screen and (min-width: 1280px) {
    display: inline-flex;
    position: absolute;
    top: 20px;
    right: 25px;
  } 
}
`;
