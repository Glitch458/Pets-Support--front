// import { useSelector } from 'react-redux';
import {
  NoticesCategoriesNavContainer,
  CotegiriesButonContainer,
  PrivateUl,
  PublicUl,
  Li,
  AddButton,
} from './NoticesCategoriesNav.styled';
import { Button, AddButtonCircle, AddButtonBasic } from '../Button/Button';

const NoticesCategoriesNav = () => {
  //const { token } = useSelector(state => state.user);
  const publicCategories = ['sell', 'lost/found', 'in godod hands'];
  const privateCategories = ['Favorite ads', 'My adds'];
  const token = 'token';

  return (
    <NoticesCategoriesNavContainer>
      <CotegiriesButonContainer>
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
      </CotegiriesButonContainer>
      <AddButton>
        {window.innerWidth <= 768 ? (
          <AddButtonCircle type="button" content="Add pet" />
        ) : (
          <AddButtonBasic type="button" content="Add pet" />
        )}
      </AddButton>
    </NoticesCategoriesNavContainer>
  );
};

export default NoticesCategoriesNav;
