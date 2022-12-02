import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetCurrentUserQuery } from 'redux/User/userApi';
import pets from '../../data/myPets.json';
import { AddButtonCircleLink } from 'components/Button/Button';
import PetsList from './PetsList';
import {
  AddButton,
  Container,
  HeadPetsData,
  Title,
  Text,
} from './PetsData.styled';
import ModalAddPets from 'components/ModalAddPets/ModalAddPets';

export const PetsData = () => {
  const [expanded, setExpanded] = useState(false);

  const token = useSelector(state => state.auth.token);

  const { data = [], isFetching } = useGetCurrentUserQuery(token, {
    skip: !token,
  });

  if (data) {
    console.log(data.myPets);
  }

  const handleModalToggle = () => {
    setExpanded(prev => {
      return !prev;
    });
  };

  return (
    <>
      <Container>
        <HeadPetsData>
          <Title>My Pets:</Title>

          <AddButton
            onClick={e => {
              e.preventDefault();
              handleModalToggle();
            }}
          >
            <Text>Add pet</Text>
            <AddButtonCircleLink />
          </AddButton>
        </HeadPetsData>
        {data.myPets && <PetsList data={pets} />}
        {/* {data.myPets.length === 0 && (
          <div>
            <p>'You have't added your pet yet'</p>
          </div>
        )} */}
      </Container>
      {expanded && <ModalAddPets handleModalToggle={handleModalToggle} />}
    </>
  );
};

export default PetsData;
