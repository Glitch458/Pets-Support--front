import styled from 'styled-components';

export const User = styled.div`
  box-sizing: border-box;
  width: 100%;
  padding: 20px 12px 20px 16px;
  background-color: #fff;
  border-radius: 7%;
  box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
`;

export const Title = styled.h2`
  font-family: 'Manrope';
  padding-bottom: 18px;
  padding-top: 60px;
  font-weight: 500;
  font-size: 20px;
  line-height: 135%;
  color: #111111;
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
`;

export const InfoItem = styled.div`
  font-family: 'Manrope';
  font-size: 12px;
  line-height: 133%;
  letter-spacing: 0.04em;
  align-items: center;
  display: flex;
  height: 100%;
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const Property = styled.p`
  min-width: 82px;
  font-weight: 500;
`;

export const Values = styled.div``;

export const EditInputBtn = styled.button`
  background: #fdf7f2;
  border-radius: 50%;
  border: none;
  width: 20px;
  height: 20px;
  margin-left: auto;
  padding: 4px;
  & svg {
    fill: red;
  }
`;

export const PhotoEditLabel = styled.label`
  position: absolute;
  right: 0;
  bottom: -25px;
  display: flex;
  justify-content: center;
  & img {
    margin-right: 4px;
  }
  &:hover {
    cursor: pointer;
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
  font-size: inherit;
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
`;
