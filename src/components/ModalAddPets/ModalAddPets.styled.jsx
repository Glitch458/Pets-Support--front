import styled from 'styled-components';
import { CloseBtnn } from 'components/Button/CloseButton/CloseButton';
import { ModalButton } from 'components/Button/ModalBtn/ModalBtn';

export const Container = styled.div`
  padding: 40px 20px;

  @media ${p => p.theme.media.tablet} {
    max-width: 500px;
    padding: 40px 80px;
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

export const CloseBtn = styled(CloseBtnn)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 34px;
  height: 34px;
  @media ${p => p.theme.media.desktop} {
    top: 24px;
    right: 24px;
  }
`;

export const WrapForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
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
`;

export const TextInput = styled.input`
  display: block;
  padding-left: 14px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  width: 222px;
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
    width: 430px;
    height: 48px;
    ::placeholder {
      font-size: ${p => p.theme.fontSizes[2]}px;
    }
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  gap: 12px;
  @media ${p => p.theme.media.tablet} {
    flex-direction: row-reverse;
    justify-content: center;
    gap: 8px;
  }
`;

export const ModalBtn = styled(ModalButton)`
  max-width: 240px;
  width: 240px;
`;
