import styled from 'styled-components';

export const UserContainer = styled.div`
  padding: 0 20px;
  @media screen and (min-width: 768px) {
    padding-left: 0;
    padding-right: 32px;
  }
`;

export const User = styled.div`
  box-sizing: border-box;
  width: auto;
  justify-content: center;
  padding: 20px 12px 20px 16px;
  background-color: #fff;
  border-radius: 7%;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    padding: 24px 40px 24px 40px;
    border-bottom-left-radius: 0;
    border-top-left-radius: 0;
  }
  @media screen and (min-width: 1280px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 24px 40px 24px 40px;
    width: 570px;
  }
`;

export const Title = styled.h2`
  font-family: 'Manrope';
  padding-bottom: 18px;
  padding-top: 60px;
  font-weight: 500;
  font-size: 20px;
  line-height: 135%;
  color: #111111;
  @media screen and (min-width: 768px) {
    padding: 0 20px 40px 34px;
    font-size: 28px;
    line-height: 135%;
  }
  @media screen and (min-width: 1280px) {
    padding: 0 20px 28px 17px;
    font-size: 28px;
    line-height: 135%;
  }
`;

export const UserPhoto = styled.div`
  display: flex;
  position: relative;
`;

export const Photo = styled.img`
  height: 100%;
  margin: 0 auto;
  width: 233px;
  height: 233px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0px 4px 14px rgba(0, 0, 0, 0.11);
`;

export const InfoItems = styled.div`
  padding-top: 70px;
  width: 100%;
  font-size: 12px;
  line-height: 133%;
  letter-spacing: 0.04em;
  @media screen and (min-width: 768px) {
    padding-top: 35px;
  }
`;

export const InfoItem = styled.div`
  font-family: 'Manrope';
  font-size: 12px;
  line-height: 133%;
  letter-spacing: 0.04em;
  align-items: center;
  display: flex;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 138%;
  }
`;

export const Property = styled.p`
  min-width: 82px;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    min-width: 120px;
    font-size: 18px;
    line-height: 25px;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const EditInputBtn = styled.span`
  margin-left: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #fdf7f2;
  border-radius: 50%;
  border: none;
  width: 20px;
  height: 20px;
  &:hover {
    background: #ffdec3;
    transition: 0.3s;
  }
  @media screen and (min-width: 768px) {
    width: 32px;
    height: 32px;
    & * {
      width: 20px;
      height: 20px;
    }
  }
`;

export const PhotoEditLabel = styled.label`
  position: absolute;
  right: 0;
  bottom: -15px;
  display: flex;
  justify-content: center;
  & img {
    margin-right: 4px;
  }
  &:hover {
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    bottom: 0;
  }
`;

export const PhotoEdit = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const EditInput = styled.input`
  /* width: 100%; */
  max-width: 380px;
  margin-right: 10px;
  font-size: inherit;
  font-weight: 400;
  line-height: 138%;
  align-items: center;
  background: #fdf7f2;
  border: 1px solid rgba(245, 146, 86, 0.5);
  border-radius: 40px;
  padding-left: 12px;
  margin-left: -12px;
  &:focus {
    outline: 0;
  }
  &:disabled {
    background-color: #fff;
    border: none;
  }
  @media screen and (min-width: 768px) {
  }
`;

export const LogOut = styled.div`
  margin-top: 45px;
  display: flex;
  justify-content: end;
  @media screen and (min-width: 768px) {
    justify-content: start;
    font-size: 16px;
    margin-top: 33px;
  }
  & button {
    border: none;
    background-color: transparent;
    display: flex;

    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 137%;
    letter-spacing: 0.04em;
    color: rgba(17, 17, 17, 0.6);
    & img {
      margin-right: 8px;
    }
  }
`;
