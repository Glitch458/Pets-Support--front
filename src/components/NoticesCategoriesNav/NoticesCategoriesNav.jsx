// import { useSelector } from 'react-redux';
import {
  NoticesCategoriesNavContainer,
  CategoriesButonContainer,
  CategoriesList,
  AddButton,
  NavLinkStyled,
} from './NoticesCategoriesNav.styled';
import { AddButtonCircleLink, AddButtonLink } from '../Button/Button';

const NoticesCategoriesNav = ({ location }) => {
  //const { token } = useSelector(state => state.user);

  const publicCategories = [
    { sell: 'sell' },
    { 'lost/found': 'lost-found' },
    { 'in good hands': 'for-free' },
  ];
  const privateCategories = [
    { 'Favorite ads': 'favorite' },
    { 'My ads': 'own' },
  ];
  const token = 'token';

  return (
    <NoticesCategoriesNavContainer>
      <CategoriesButonContainer>
        <CategoriesList>
          {publicCategories.map(item => (
            <NavLinkStyled
              to={`/notices/${Object.values(item)}${location.search}`}
              state
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
                to={`/notices/${Object.values(item)}${location.search}`}
                key={Object.keys(item)}
              >
                {Object.keys(item)}
              </NavLinkStyled>
            ))}
        </CategoriesList>
      </CategoriesButonContainer>
      <AddButton>
        {window.innerWidth <= 768 ? (
          <AddButtonCircleLink>Add pet</AddButtonCircleLink>
        ) : (
          <AddButtonLink>Add pet</AddButtonLink>
        )}
      </AddButton>
    </NoticesCategoriesNavContainer>
  );
};

export default NoticesCategoriesNav;
