import styled from 'styled-components';
import { CloseBtnn } from 'components/Button/CloseButton/CloseButton';
import { ModalButton } from 'components/Button/ModalBtn/ModalBtn';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  @media ${p => p.theme.media.tablet} {
    padding: 40px 80px;
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

export const Title = styled.h3`
  text-align: center;
  margin-bottom: 28px;
  @media ${p => p.theme.media.tablet} {
    margin-bottom: 20px;
  }
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[5]}px;
  line-height: 1.4;

  @media ${p => p.theme.media.tablet} {
    font-size: ${p => p.theme.fontSizes[8]}px;
  }
`;

export const FirstForm = styled.div`
  margin-top: 28px;

  @media ${p => p.theme.media.tablet} {
    margin-top: 40px;
  }
`;

export const InputCont = styled.div`
  margin-bottom: 16px;

  @media ${p => p.theme.media.tablet} {
    margin-bottom: 28px;
  }
`;

export const InputContBreed = styled.div`
  margin-bottom: 0px;

  @media ${p => p.theme.media.tablet} {
    margin-bottom: 0px;
  }
`;

export const InputContTextArea = styled.div`
  margin-bottom: 40px;

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
    font-size: ${p => p.theme.fontSizes[5]}px;
    line-height: 1.4;
  }
`;

export const TextInput = styled.input`
  outline: none;

  display: block;
  box-sizing: border-box;
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

export const ModalBtn = styled(ModalButton)`
  width: 100%;
  font-family: ${p => p.theme.fonts.body};
  @media ${p => p.theme.media.tablet} {
    width: 180px;
    margin-right: 20px;
  }
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  gap: 12px;
  @media ${p => p.theme.media.tablet} {
    flex-direction: row-reverse;
    justify-content: center;
    gap: 8px;
    margin-left: auto;
  }
`;

export const DateInput = styled.input`
  position: relative;
  display: block;
  box-sizing: border-box;
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
  &::-webkit-calendar-picker-indicator {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
  }

  @media ${p => p.theme.media.tablet} {
    width: 448px;
    height: 48px;
    ::placeholder {
      font-size: ${p => p.theme.fontSizes[2]}px;
    }
  }
`;

//  second page

export const SecondForm = styled.div`
  margin-top: 20px;
`;

export const PhotoPetInput = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;

export const PhotoAddContainer = styled.label`
  box-sizing: border-box;
  width: 208px;
  height: 208px;

  @media ${p => p.theme.media.tablet} {
    width: 182px;
    height: 182px;
  }
  border-radius: 40px;
  cursor: pointer;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 80px;

  @media ${p => p.theme.media.tablet} {
    padding: 67px;
  }
  border-radius: 20px;
  background-color: ${p => p.theme.colors.background};
`;

export const ImageInputWrapper = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  border: none;
  padding: 0;
  /* margin: 20px 0 40px 0; */
  margin-bottom: 20px;
  @media ${p => p.theme.media.tablet} {
    margin-bottom: 40px;
  }
`;

export const ImageTitle = styled.label`
  text-align: center;
  margin-bottom: 20px;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[2]}px;
  line-height: 24px;
  letter-spacing: -0.01em;
`;

export const AddedImage = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  width: 208px;
  height: 208px;
  border-radius: 20px;

  & > img {
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
  }
`;
export const TextAreaInput = styled.textarea`
  display: block;
  outline: none;
  box-sizing: border-box;
  resize: none;
  width: 240px;
  height: 100px;
  @media ${p => p.theme.media.tablet} {
    width: 394px;
    height: 116px;
  }
  padding: 12px 5px 12px 14px;
  border-radius: 20px;
  background-color: var(--main-bg-cl);
  border: 1px solid rgba(245, 146, 86, 0.5);
  font-size: 14px;
`;

export const NameError = styled.p`
  position: absolute;
  color: red;
  top: 152px;
  left: 43%;
  transform: translateX(-50%);
  font-size: 10px;

  @media ${p => p.theme.media.tablet} {
    top: 215px;
    left: 50%;
    font-size: 12px;
  }
`;

export const BirthdayError = styled.p`
  position: absolute;
  color: red;
  top: 243px;
  left: 45%;
  transform: translateX(-50%);
  font-size: 10px;

  @media ${p => p.theme.media.tablet} {
    top: 335px;
    left: 50%;
    font-size: 12px;
  }
`;

export const BreedError = styled.p`
  position: absolute;
  color: red;
  top: 332px;
  left: 45%;
  transform: translateX(-50%);
  font-size: 10px;

  @media ${p => p.theme.media.tablet} {
    top: 458px;
    left: 50%;
    font-size: 12px;
  }
`;

export const CommentError = styled.p`
  width: 230px;
  position: absolute;
  color: red;
  top: 416px;
  left: 51%;
  transform: translateX(-50%);
  font-size: 10px;

  @media ${p => p.theme.media.tablet} {
    width: 300px;
    top: 429px;
    left: 47%;
    font-size: 12px;
  }
`;
