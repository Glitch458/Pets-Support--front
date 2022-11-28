import { useState } from 'react';
import { useSelector } from 'react-redux';
import {
  NoticesCategoriesNavContainer,
  CategoriesButonContainer,
  CategoriesList,
  AddButton,
  NavLinkStyled,
} from './NoticesCategoriesNav.styled';
import { AddButtonCircleLink, AddButtonLink } from '../Button/Button';
import ModalAddPets from 'components/ModalAddPets/ModalAddPets';

const NoticesCategoriesNav = ({ location }) => {
  const { token } = useSelector(state => state.auth);

  const publicCategories = [
    { sell: 'sell' },
    { 'lost/found': 'lost-found' },
    { 'in good hands': 'for-free' },
  ];
  const privateCategories = [
    { 'Favorite ads': 'favorite' },
    { 'My ads': 'own' },
  ];

  const [expanded, setExpanded] = useState(false);
  const handleModalToggle = () => {
    setExpanded(prev => {
      return !prev;
    });
  };

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
          {token !== null &&
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
      <AddButton
        onClick={e => {
          e.preventDefault();
          handleModalToggle();
        }}
      >
        {window.innerWidth < 768 ? (
          <AddButtonCircleLink>Add pet</AddButtonCircleLink>
        ) : (
          <AddButtonLink>Add pet</AddButtonLink>
        )}
      </AddButton>
      {expanded && <ModalAddPets handleModalToggle={handleModalToggle} />}
    </NoticesCategoriesNavContainer>
  );
};

export default NoticesCategoriesNav;
