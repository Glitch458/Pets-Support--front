import { useState, useEffect } from 'react';
import authOperations from 'redux/Auth/auth-operations';
import { useDispatch } from 'react-redux';
import { useGetCurrentUserQuery } from 'redux/User/userApi';

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

export default function UserDataItem() {
  const [isNameDisabled, setIsNameDisabled] = useState(true);
  const [isEmaillDisabled, setIsEmailDisabled] = useState(true);
  const [isbirthdayDisabled, setIsbirthdayDisabled] = useState(true);
  const [isPhoneDisabled, setPhoneDisabled] = useState(true);
  const [isCityDisabled, setCityDisabled] = useState(true);
  const [iconColor, setIconColor] = useState('#f59256');

  const dispatch = useDispatch();
  const { data = [] } = useGetCurrentUserQuery();
  const { name = '', email = '', birthday = '', phone = '', city = '' } = data;

  const [userName, setUserName] = useState('');
  const [userNmail, setUserEmail] = useState('');
  const [userNirthday, setUserBirthday] = useState('');
  const [userNhone, setUserPhone] = useState('');
  const [userCity, setUserCity] = useState('');

  useEffect(() => {
    setUserName(name);
    setUserEmail(email);
    setUserBirthday(birthday);
    setUserPhone(phone);
    setUserCity(city);
  }, [birthday, city, email, name, phone]);

  const handleChangeValue = evt => {
    const { name, value } = evt.currentTarget;

    switch (name) {
      case 'nameUser':
        setUserName(value);
        break;

      case 'emailUser':
        setUserEmail(value);
        break;

      case 'birthdayUser':
        setUserBirthday(value);
        break;

      case 'phoneUser':
        setUserPhone(value);
        break;

      case 'cityUser':
        setUserCity(value);
        break;

      default:
        return;
    }
  };

  const handleClickPencil = (isDisabled, setIsDisabled) => {
    if (isDisabled) {
      setIsDisabled(false);
      setIconColor('#000');
    } else {
      setIsDisabled(true);
      setIconColor('#f59256');
    }
  };

  const handleLogout = () => {
    dispatch(authOperations.logOut());
  };

  return (
    <div>
      <InfoItems>
        <InfoItem>
          <Property>Name:</Property>
          <Form>
            <EditInput
              type="text"
              name="nameUser"
              disabled={isNameDisabled}
              onChange={handleChangeValue}
              value={userName}
            />
            <EditInputBtn
              name="name"
              type="submit"
              onClick={() =>
                handleClickPencil(
                  isNameDisabled,
                  setIsNameDisabled,
                  'name',
                  name
                )
              }
            >
              {isNameDisabled ? (
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
              name="emailUser"
              disabled={isEmaillDisabled}
              onChange={handleChangeValue}
              value={userNmail}
            />
            <EditInputBtn
              name="name"
              type="submit"
              onClick={() =>
                handleClickPencil(
                  isEmaillDisabled,
                  setIsEmailDisabled,
                  'name',
                  email
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
              name="birthdayUser"
              disabled={isbirthdayDisabled}
              onChange={handleChangeValue}
              value={userNirthday}
            />
            <EditInputBtn
              name="birthday"
              type="submit"
              onClick={() =>
                handleClickPencil(
                  isbirthdayDisabled,
                  setIsbirthdayDisabled,
                  'name',
                  birthday
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
              name="phoneUser"
              disabled={isPhoneDisabled}
              onChange={handleChangeValue}
              value={userNhone}
            />
            <EditInputBtn
              name="phone"
              type="submit"
              onClick={() =>
                handleClickPencil(
                  isPhoneDisabled,
                  setPhoneDisabled,
                  'name',
                  phone
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
              name="cityUser"
              disabled={isCityDisabled}
              onChange={handleChangeValue}
              value={userCity}
            />
            <EditInputBtn
              name="city"
              type="submit"
              onClick={() =>
                handleClickPencil(isCityDisabled, setCityDisabled, 'name', city)
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
          <button type="button" onClick={handleLogout}>
            <img src={LogOutIcon} alt="log out" />
            Log Out
          </button>
        </LogOut>
      </InfoItems>
    </div>
  );
}
