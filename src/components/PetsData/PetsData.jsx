import myPets from '../../data/myPets.json';
import { AddButtonCircleLink } from 'components/Button/Button';
import PetsList from './PetsList';
import { Box, Container, Title, Text } from './PetsData.styled';

export const PetsData = () => {
  return (
    <>
      <Container>
        <Title>My Pets:</Title>
        <Box>
          <Text>Add pet</Text>
          <AddButtonCircleLink />
        </Box>
      </Container>
      <PetsList data={myPets} />
    </>
  );
};

export default PetsData;
