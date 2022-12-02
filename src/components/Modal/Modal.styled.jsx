import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${p => p.theme.colors.gray};
  backdrop-filter: blur(5px);
  overflow-y: scroll;
  z-index: 999;
`;

export const ModalWindow = styled.div`
  box-sizing: border-box;
  position: relative;
  display: flex;
  flex-direction: column;
  width: 280px;
  height: auto;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.white};

  @media ${p => p.theme.media.tablet} {
    width: 608px;
  }
`;
