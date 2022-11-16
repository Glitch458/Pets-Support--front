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

export const PetsData = () => {
  return (
    <Container>
      <HeadPetsData>
        <Title>My Pets:</Title>

        <AddButton>
          <Text>Add pet</Text>
          <AddButtonCircleLink />
        </AddButton>
      </HeadPetsData>
      <PetsList data={myPets} />
    </Container>
  );
};

export default PetsData;
