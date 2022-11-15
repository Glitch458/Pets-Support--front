// import { useSelector } from 'react-redux';
import {
  NoticesCategoriesNavContainer,
  CategoriesButonContainer,
  CategoriesList,
  AddButton,
  NavLinkStyled,
} from './NoticesCategoriesNav.styled';
import { AddButtonCircle, AddButtonBasic } from '../Button/Button';

const NoticesCategoriesNav = () => {
  //const { token } = useSelector(state => state.user);

  const publicCategories = [
    { sell: 'sell' },
    { 'lost/found': 'lost-found' },
    { 'in godod hands': 'for-free' },
  ];
  const privateCategories = [
    { 'Favorite ads': 'favorite' },
    { 'My adds': 'own' },
  ];
  const token = 'token';

  return (
    <NoticesCategoriesNavContainer>
      <CategoriesButonContainer>
        <CategoriesList>
          {publicCategories.map(item => (
            <NavLinkStyled
              to={`/notices/${Object.values(item)}`}
              key={Object.keys(item)}
            >
              {Object.keys(item)}
            </NavLinkStyled>
          ))}
        </CategoriesList>
        <CategoriesList>
          {token &&
            privateCategories.map(item => (
              <NavLinkStyled
                to={`/notices/${Object.values(item)}`}
                key={Object.keys(item)}
              >
                {Object.keys(item)}
              </NavLinkStyled>
            ))}
        </CategoriesList>
      </CategoriesButonContainer>
      <AddButton>
        {window.innerWidth <= 768 ? (
          <AddButtonCircle>Add pet</AddButtonCircle>
        ) : (
          <AddButtonBasic>Add pet</AddButtonBasic>
        )}
      </AddButton>
    </NoticesCategoriesNavContainer>
  );
};

export default NoticesCategoriesNav;
