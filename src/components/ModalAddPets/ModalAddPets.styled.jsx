import styled from 'styled-components';

export const Container = styled.div`
  /* text-align: center; */
  /* display: inline-block;
  width: 100px;
  height: 100px; */

  /* padding: 60px 20px 40px 20px; */

  @media (max-width: 767px) {
    max-width: 500px;
  }
  @media ${p => p.theme.media.tablet} {
    padding: 32px 20px;
    width: 704px;
  }
  @media ${p => p.theme.media.desktop} {
    padding: 32px 20px;
    width: 704px;
  }
`;

export const Title = styled.h3`
  font-family: ${p => p.theme.fonts.body};
  font-size: 24px;

  margin-bottom: 40px;

  @media ${p => p.theme.media.tablet} {
    font-size: 36px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 18px;
  right: 20px;
  border-radius: 50%;
`;

// export const ModalButton = styled(ModalBtn)`
//   @media ${props => props.theme.media.tabletDesktop} {
//     width: 160px;
//   }
// `;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  @media ${props => props.theme.media.tablet} {
    width: 332px;
    flex-direction: row;
    gap: 8px;
    margin-left: auto;
  }
`;
