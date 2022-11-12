// import { useSelector } from 'react-redux';
import {
  NoticesCategoriesNavContainer,
  PrivateUl,
  PublicUl,
  Li,
} from './NoticesCategoriesNav.styled';
import { Button, AddButtonCircle, AddButtonBasic } from '../Button/Button';
//import { AddButtonCircle, AddButtonBasic } from '../AddButton/AddButton';

const NoticesCategoriesNav = () => {
  //const { token } = useSelector(state => state.user);
  const publicCategories = ['sell', 'lost/found', 'in godod hands'];
  const privateCategories = ['Favorite ads', 'My adds'];
  const token = 'token';
  return (
    <NoticesCategoriesNavContainer>
      <PublicUl>
        {publicCategories.map(item => (
          <Li key={item}>
            <Button type="button" content={item} />
          </Li>
        ))}
      </PublicUl>
      <PrivateUl>
        {token &&
          privateCategories.map(item => (
            <Li key={item}>
              <Button content={item} />
            </Li>
          ))}
      </PrivateUl>
      {window.innerWidth <= 480 ? (
        <AddButtonCircle type="button" content="Add pet" />
      ) : (
        <AddButtonBasic type="button" content="Add pet" />
      )}
    </NoticesCategoriesNavContainer>
  );
};

export default NoticesCategoriesNav;
