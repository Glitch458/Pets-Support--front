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

export const InputContTextArea = styled.div`
  margin-bottom: 16px;

  @media ${p => p.theme.media.tablet} {
    margin-bottom: 28px;
  }
`;

export const TextAreaInput = styled.textarea`
  display: block;
  outline: none;
  box-sizing: border-box;
  resize: none;
  width: 394px;
  height: 116px;
  padding: 12px 5px 12px 14px;
  border-radius: 20px;
  background-color: var(--main-bg-cl);
  border: 1px solid rgba(245, 146, 86, 0.5);
  font-size: 14px;
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

export const RadioGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
`;

export const RadioLabel = styled.label`
  margin-bottom: 16px;
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
  padding: 10px 28px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 1.35;
  border: 2px solid #f59256;
  border-radius: 40px;
  cursor: pointer;
  transition: color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  transition: background-color 0.25s cubic-bezier(0.4, 0, 0.2, 1);
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

export const PhotoPetInput = styled.input`
  visibility: hidden;
  width: 0;
  height: 0;
`;

export const PhotoAddContainer = styled.label`
  box-sizing: border-box;
  width: 182px;
  height: 182px;
  border-radius: 40px;
  cursor: pointer;
  margin: 0 auto;
  box-sizing: border-box;
  padding: 67px;
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
  margin: 20px 0 40px 0;
`;

export const ImageTitle = styled.label`
  text-align: center;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: -0.01em;
`;

export const AddedIamge = styled.div`
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
