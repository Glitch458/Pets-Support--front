import { useState } from 'react';
import {
  InfoItems,
  InfoItem,
  Property,
  EditInputBtn,
  EditInput,
  Form,
  LogOut,
} from './UserData.styled';
import { ReactComponent as Icon } from './icons/editValue.svg';
import { ReactComponent as Stroke } from './icons/iconStroke.svg';
import LogOutIcon from './icons/logOut.svg';

export default function UserDataItem({ data }) {
  const [isNamelDisabled, setIsNameDisabled] = useState(true);
  const [isEmaillDisabled, setIsEmailDisabled] = useState(true);
  const [isbirthdayDisabled, setIsbirthdayDisabled] = useState(true);
  const [isPhoneDisabled, setPhoneDisabled] = useState(true);
  const [isCityDisabled, setCityDisabled] = useState(true);
  const [iconColor, setIconColor] = useState('#f59256');

  const handleClickPencil = (isDisabled, setIsDisabled) => {
    if (isDisabled) {
      setIsDisabled(false);
      setIconColor('#000');
    } else {
      setIsDisabled(true);
      setIconColor('#f59256');
    }
  };

  return (
    <div>
      <InfoItems>
        <InfoItem>
          <Property>Name:</Property>
          <Form>
            <EditInput
              type="text"
              disabled={isNamelDisabled}
              value={data.name}
            />
            <EditInputBtn
              name="name"
              type="submit"
              onClick={() =>
                handleClickPencil(
                  isNamelDisabled,
                  setIsNameDisabled,
                  'name',
                  data.email
                )
              }
            >
              {isNamelDisabled ? (
                <Icon fill={iconColor} width="9.5" height="9.5" />
              ) : (
                <Stroke width="9.5" height="9.5" />
              )}
            </EditInputBtn>
          </Form>
        </InfoItem>
        <InfoItem>
          <Property>Email:</Property>
          <Form>
            <EditInput
              type="text"
              disabled={isEmaillDisabled}
              value={data.name}
            />
            <EditInputBtn
              name="name"
              type="submit"
              onClick={() =>
                handleClickPencil(
                  isEmaillDisabled,
                  setIsEmailDisabled,
                  'name',
                  data.email
                )
              }
            >
              {isEmaillDisabled ? (
                <Icon fill={iconColor} width="9.5" height="9.5" />
              ) : (
                <Stroke width="9.5" height="9.5" />
              )}
            </EditInputBtn>
          </Form>
        </InfoItem>
        <InfoItem>
          <Property>Birthday:</Property>
          <Form>
            <EditInput
              type="text"
              disabled={isbirthdayDisabled}
              value={data.birthday}
            />
            <EditInputBtn
              name="birthday"
              type="submit"
              onClick={() =>
                handleClickPencil(
                  isbirthdayDisabled,
                  setIsbirthdayDisabled,
                  'name',
                  data.birthday
                )
              }
            >
              {isbirthdayDisabled ? (
                <Icon fill={iconColor} width="9.5" height="9.5" />
              ) : (
                <Stroke width="9.5" height="9.5" />
              )}
            </EditInputBtn>
          </Form>
        </InfoItem>
        <InfoItem>
          <Property>Phone:</Property>
          <Form>
            <EditInput
              type="text"
              disabled={isPhoneDisabled}
              value={data.phone}
            />
            <EditInputBtn
              name="phone"
              type="submit"
              onClick={() =>
                handleClickPencil(
                  isPhoneDisabled,
                  setPhoneDisabled,
                  'name',
                  data.phone
                )
              }
            >
              {isPhoneDisabled ? (
                <Icon fill={iconColor} width="9.5" height="9.5" />
              ) : (
                <Stroke width="9.5" height="9.5" />
              )}
            </EditInputBtn>
          </Form>
        </InfoItem>
        <InfoItem>
          <Property>City:</Property>
          <Form>
            <EditInput
              type="text"
              disabled={isCityDisabled}
              value={data.city}
            />
            <EditInputBtn
              name="city"
              type="submit"
              onClick={() =>
                handleClickPencil(
                  isCityDisabled,
                  setCityDisabled,
                  'name',
                  data.city
                )
              }
            >
              {isCityDisabled ? (
                <Icon fill={iconColor} width="9.5" height="9.5" />
              ) : (
                <Stroke width="9.5" height="9.5" />
              )}
            </EditInputBtn>
          </Form>
        </InfoItem>
        <LogOut>
          <button type="button">
            <img src={LogOutIcon} alt="log out" />
            Log Out
          </button>
        </LogOut>
      </InfoItems>
    </div>
  );
}
