import styled from 'styled-components';
import { CloseBtnn } from 'components/Button/CloseButton/CloseButton';

import maleIcon from 'images/icons/male.png';
import femaleIcon from 'images/icons/female.png';

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

  @media ${p => p.theme.media.tablet} {
    top: 24px;
    right: 24px;
    width: 44px;
    height: 44px;
  }
`;

export const Title = styled.h3`
  text-align: center;
  margin-bottom: 20px;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[5]}px;
  line-height: 1.4;

  @media ${p => p.theme.media.tablet} {
    font-size: ${p => p.theme.fontSizes[8]}px;
  }
`;

export const FirstForm = styled.div`
  /* margin-top: 20px;
  margin-bottom: 40px; */
`;

export const UserComment = styled.p`
  width: 443px;
  text-align: center;
  margin-bottom: 20px;
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[2]}px;
  line-height: 1.38;
  @media ${p => p.theme.media.tablet} {
    margin-bottom: 28px;
    font-size: ${p => p.theme.fontSizes[4]}px;
  }
`;

export const RadioGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* justify-content: space-between; */
  /* gap: 8px; */
  column-gap: 8px;
  row-gap: 12px;
  margin-bottom: 32px;
  @media ${p => p.theme.media.tablet} {
    width: 448px;
    margin-bottom: 28px;
    column-gap: 12px;
    row-gap: 16px;

    /* gap: 5px; */
  }
`;

export const RadioLabel = styled.label`
  /* margin-bottom: 4px; */
`;

export const RadioInput = styled.input`
  position: absolute;
  width: 1px;
  height: 1px;
  margin: -1px;
  border: 0;
  padding: 0;
  white-space: nowrap;
  clip-path: inset(100%);
  clip: rect(0 0 0 0);
  overflow: hidden;

  &:checked + div {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
`;

export const RadioButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 25px;
  font-size: ${p => p.theme.fontSizes[1]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  letter-spacing: 0.04em;
  line-height: 1.36;
  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;
  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
  }
  @media ${p => p.theme.media.tablet} {
    font-size: ${p => p.theme.fontSizes[4]}px;
  }
`;

export const InputCont = styled.div`
  /* width: 100%; */
  box-sizing: border-box;

  &:not(:last-child) {
    margin-bottom: 16px;
  }

  @media ${p => p.theme.media.tablet} {
    &:not(:last-child) {
      margin-bottom: 28px;
    }
  }
`;

export const TextLabel = styled.label`
  display: inline-block;
  width: 100%;
  font-family: ${p => p.theme.fonts.body};
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: 1.44;

  @media ${p => p.theme.media.tablet} {
    font-size: 24px;
  }
`;

export const TextInput = styled.input`
  display: block;
  box-sizing: border-box;
  align-items: center;
  display: flex;
  outline: none;
  border: 1px solid rgba(245, 146, 86, 0.5);
  /* width: 240px; */
  width: 100%;
  height: 40px;
  margin-top: 8px;
  padding: 0;
  padding-left: 14px;
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
    margin-top: 12px;
    /* width: 448px; */
    width: 100%;
    height: 48px;
    padding-left: 16px;
    ::placeholder {
      font-size: ${p => p.theme.fontSizes[2]}px;
    }
  }
`;

export const DateInput = styled.input`
  position: relative;
  display: block;
  box-sizing: border-box;
  padding-left: 14px;
  margin-top: 8px;
  border: 1px solid rgba(245, 146, 86, 0.5);
  /* width: 240px; */
  width: 100%;

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
    /* width: 448px; */
    height: 48px;
    ::placeholder {
      font-size: ${p => p.theme.fontSizes[2]}px;
    }
  }
`;

export const InputContTextArea = styled.div`
  // margin-bottom: 16px;

  // @media ${p => p.theme.media.tablet} {
  //   margin-bottom: 28px;
  // }
`;

export const TextAreaInput = styled.textarea`
  display: block;
  outline: none;
  box-sizing: border-box;
  resize: none;
  margin-top: 8px;
  width: 240px;
  // height: 40px;
  padding: 12px 5px 12px 14px;
  border-radius: 20px;
  background-color: var(--main-bg-cl);
  border: 1px solid rgba(245, 146, 86, 0.5);
  font-size: 14px;
  @media ${p => p.theme.media.tablet} {
    width: 448px;
  }
`;

//!======SECOND PAGE===============
export const SexFormBox = styled.fieldset`
  display: flex;
  margin-bottom: 32px;
  border: none;
  padding: 0;
  @media ${p => p.theme.media.tablet} {
    margin-bottom: 40px;
  }
`;

export const BoxQuestion = styled.legend`
  margin-bottom: 16px;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: 1.44;
  @media ${p => p.theme.media.tablet} {
    margin-bottom: 28px;
    font-size: ${p => p.theme.fontSizes[5]}px;
    line-height: 1.04;
  }
`;

export const Asterisk = styled.span`
  font-size: ${p => p.theme.fontSizes[3]}px;
  font-weight: ${p => p.theme.fontWeights.medium};
  line-height: 1.44;
  color: ${p => p.theme.colors.accent};
  @media ${p => p.theme.media.tablet} {
    font-size: ${p => p.theme.fontSizes[5]}px;
    line-height: 1.04;
  }
`;

export const SexLabel = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[3]}px;

  line-height: 1.44;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 40px;
  }
  @media ${p => p.theme.media.tablet} {
    font-size: ${p => p.theme.fontSizes[4]}px;

    &:not(:last-child) {
      margin-right: 80px;
    }
  }
`;

export const MaleIcon = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: 12px;
  background-image: url(${maleIcon});
  background-repeat: no-repeat;
  background-size: contain, cover;

  @media ${p => p.theme.media.tablet} {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }
`;
export const FeMaleIcon = styled.div`
  width: 40px;
  height: 40px;
  margin-bottom: 12px;
  background-image: url(${femaleIcon});
  background-repeat: no-repeat;
  background-size: contain, cover;

  @media ${p => p.theme.media.tablet} {
    width: 60px;
    height: 60px;
    margin-bottom: 20px;
  }
`;

export const InputRadio = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + label {
    color: ${p => p.theme.colors.accent};
  }
`;

export const PhotoPetInput = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;

export const PhotoAddContainer = styled.label`
  width: 116px;
  height: 116px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 40px;
  cursor: pointer;
  // margin: 0 auto;
  margin-right: auto;
  box-sizing: border-box;
  // padding: 22px;
  border-radius: 20px;
  background-color: ${p => p.theme.colors.background};
  @media ${p => p.theme.media.tablet} {
    width: 140px;
    height: 140px;
  }
`;

export const ImageInputWrapper = styled.fieldset`
  display: flex;
  flex-direction: column;
  // align-items: center;
  box-sizing: border-box;
  border: none;
  padding: 0;
  margin-bottom: 28px;
`;

export const ImageTitle = styled.label`
  // text-align: center;
  margin-bottom: 8px;
  font-weight: ${p => p.theme.fontWeights.medium};
  font-size: ${p => p.theme.fontSizes[3]}px;
  line-height: 1.2;
  letter-spacing: -0.01em;
  @media ${p => p.theme.media.tablet} {
    font-size: ${p => p.theme.fontSizes[5]}px;
    line-height: 1.04;
  }
`;

export const AddedIamge = styled.div`
  overflow: hidden;
  display: flex;
  // justify-content: center;
  // align-items: center;
  // margin: 0 auto;
  margin-right: auto;
  width: 116px;
  height: 116px;
  border-radius: 20px;

  & > img {
    object-fit: cover;
    min-width: 100%;
    min-height: 100%;
  }
  @media ${p => p.theme.media.tablet} {
    width: 140px;
    height: 140px;
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-top: 40px;
  gap: 12px;
  @media ${p => p.theme.media.tablet} {
    // width: 332px;
    flex-direction: row;
    // gap: 8px;
    // margin-left: auto;
  }
`;
