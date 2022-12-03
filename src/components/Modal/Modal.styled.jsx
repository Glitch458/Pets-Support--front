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
  @media ${p => p.theme.media.tablet} {
    overflow: scroll;
  }
  z-index: 999;
`;

export const ModalWindow = styled.div`
  overflow-x: hidden;
  overflow-y: auto;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 100%;
  border-radius: ${p => p.theme.radii.normal};
  background-color: ${p => p.theme.colors.white};

  @media ${p => p.theme.media.tablet} {
    width: 608px;
    overflow-x: visible;
    overflow-y: visible;
  }
`;
