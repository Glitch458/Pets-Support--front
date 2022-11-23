import { useState } from 'react';
import myPets from '../../data/myPets.json';
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

          <AddButton onClick={handleModalToggle} type="button">
            <Text>Add pet</Text>
            <AddButtonCircleLink />
          </AddButton>
        </HeadPetsData>
        <PetsList data={myPets} />
      </Container>
      {expanded && <ModalAddPets handleModalToggle={handleModalToggle} />}
    </>
  );
};

export default PetsData;
