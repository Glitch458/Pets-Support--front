import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${p => p.theme.colors.gray};
  backdrop-filter: blur(5px);
  overflow-y: scroll;
  z-index: 999999;
`;

export const ModalWindow = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  /* padding: 40px 20px; */
  width: 280px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.normal};

  @media ${p => p.theme.media.tablet} {
    width: 608px;
  }
`;
