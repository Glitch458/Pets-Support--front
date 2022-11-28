import { useState } from 'react';
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
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [birthday, setBirthday] = useState('');
  // const [phone, setPhone] = useState('');
  // const [city, setCity] = useState('');

  const [isNameDisabled, setIsNameDisabled] = useState(true);
  const [isEmaillDisabled, setIsEmailDisabled] = useState(true);
  const [isbirthdayDisabled, setIsbirthdayDisabled] = useState(true);
  const [isPhoneDisabled, setPhoneDisabled] = useState(true);
  const [isCityDisabled, setCityDisabled] = useState(true);
  const [iconColor, setIconColor] = useState('#f59256');

  const dispatch = useDispatch();
  const { data = [] } = useGetCurrentUserQuery();
  const { name = '', email = '', birthday = '', phone = '', city = '' } = data;

  // const [user, setUser] = useState();
  // useEffect(() => {
  //   if (!isFetching && data.length !== 0) {
  //     setUser(data);
  //   }
  // }, [data, isFetching]);

  const handleClickPencil = (isDisabled, setIsDisabled) => {
    if (isDisabled) {
      setIsDisabled(false);
      setIconColor('#000');
    } else {
      setIsDisabled(true);
      setIconColor('#f59256');
    }
  };

  const handleInput = e => {};

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
              disabled={isNameDisabled}
              onChange={handleInput}
              value={name}
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
              disabled={isEmaillDisabled}
              onChange={handleInput}
              value={email}
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
              disabled={isbirthdayDisabled}
              onChange={handleInput}
              value={birthday}
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
              disabled={isPhoneDisabled}
              onChange={handleInput}
              value={phone}
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
              disabled={isCityDisabled}
              onChange={handleInput}
              value={city}
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
