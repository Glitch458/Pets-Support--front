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
    /* width: 704px; */
  }
  @media ${p => p.theme.media.desktop} {
    padding: 32px 20px;
    /* width: 704px; */
  }
`;

export const Title = styled.h3`
  text-align: center;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[5]}px;
  line-height: 1.4;
  margin-bottom: 40px;

  @media ${p => p.theme.media.tablet} {
    font-size: ${p => p.theme.fontSizes[8]}px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 18px;
  right: 20px;
  border-radius: 50%;
`;

export const InputCont = styled.div`
  margin-bottom: 16px;

  @media ${p => p.theme.media.tablet} {
    margin-bottom: 28px;
  }
`;

export const TextLabel = styled.label`
  display: inline-block;
  margin-bottom: 8px;
  font-family: ${p => p.theme.fonts.body};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: 26px;

  @media ${p => p.theme.media.tablet} {
    margin-bottom: 12px;
    font-size: 24px;
    line-height: 1.4;
  }
  @media ${p => p.theme.media.desktop} {
    margin-bottom: 12px;
    font-size: 24px;
    line-height: 1.4;
  }
`;

export const TextInput = styled.input`
  display: block;
  padding-left: 14px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  width: 240px;
  height: 40px;
  border-radius: ${p => p.theme.radii.normal};
  ::placeholder {
    font-family: ${p => p.theme.fonts.body};
    font-style: normal;
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size: ${p => p.theme.fontSizes[1]}px;
    line-height: 1.4;
    color: rgba(27, 27, 27, 0.6);
  }

  @media ${p => p.theme.media.tablet} {
    width: 448px;
    height: 48px;
    ::placeholder {
      font-size: ${p => p.theme.fontSizes[2]}px;
    }
  }
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
  @media ${p => p.theme.media.tablet} {
    width: 332px;
    flex-direction: row;
    gap: 8px;
    margin-left: auto;
  }
`;
