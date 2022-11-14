import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: ${p => p.theme.colors.gray};
  backdrop-filter: blur(5px);
  padding: 0 20px;
  overflow: scroll;
`;

export const ModalWindow = styled.div`
  position: absolute;
  top: 160px;
  left: 50%;
  margin: 0 auto;
  transform: translate(-50%, -50%);
  border-radius: ${p => p.theme.radii.normal};
  padding: 40px 20px;
  background-color: ${p => p.theme.colors.white};
`;
