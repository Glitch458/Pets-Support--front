import { useState, useEffect } from 'react';
import { useLogoutMutation } from 'redux/Auth/authApi';

import {
  InfoItems,
  InfoItem,
  Property,
  EditInputBtn,
  EditInput,
  Form,
  LogOut,
} from './UserData.styled';
import { ReactComponent as Icon } from 'images/icons/editValue.svg';
import { ReactComponent as Stroke } from 'images/icons/iconStroke.svg';
import LogOutIcon from 'images/icons/logOut.svg';

const UserDataItem = ({ data, changeData }) => {
  const [isNameDisabled, setIsNameDisabled] = useState(true);
  const [isEmaillDisabled, setIsEmailDisabled] = useState(true);
  const [isbirthdayDisabled, setIsbirthdayDisabled] = useState(true);
  const [isPhoneDisabled, setPhoneDisabled] = useState(true);
  const [isCityDisabled, setCityDisabled] = useState(true);
  const [iconColor, setIconColor] = useState('#f59256');

  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userBirthday, setUserBirthday] = useState('');
  const [userPhone, setUserPhone] = useState('');
  const [userCity, setUserCity] = useState('');

  const [logout] = useLogoutMutation();
  const { name = '', email = '', birthday = '', phone = '', city = '' } = data;

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

  const handleClickPencil = (e, userValue, isDisabled, setIsDisabled) => {
    const { value } = e.currentTarget.attributes.name;
    if (isDisabled) {
      setIsDisabled(false);
      setIconColor('#000');
    } else {
      changeData({ [value]: userValue });
      setIsDisabled(true);
      setIconColor('#f59256');
    }
  };

  const handleLogout = async () => {
    await logout();
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
              onClick={e => {
                handleClickPencil(
                  e,
                  userName,
                  isNameDisabled,
                  setIsNameDisabled
                );
              }}
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
              value={userEmail}
            />
            <EditInputBtn
              name="email"
              type="submit"
              onClick={e =>
                handleClickPencil(
                  e,
                  userEmail,
                  isEmaillDisabled,
                  setIsEmailDisabled
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
              value={userBirthday}
            />
            <EditInputBtn
              name="birthday"
              type="submit"
              onClick={e =>
                handleClickPencil(
                  e,
                  userBirthday,
                  isbirthdayDisabled,
                  setIsbirthdayDisabled
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
              value={userPhone}
            />
            <EditInputBtn
              name="phone"
              type="submit"
              onClick={e =>
                handleClickPencil(
                  e,
                  userPhone,
                  isPhoneDisabled,
                  setPhoneDisabled
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
              onClick={e =>
                handleClickPencil(e, userCity, isCityDisabled, setCityDisabled)
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
};

export default UserDataItem;
