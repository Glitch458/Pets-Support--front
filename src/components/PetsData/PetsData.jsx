import myPets from '../../data/myPets.json';
import { Button } from 'components/Button/Button';
import PetsList from './PetsList';

export const PetsData = () => {
  return (
    <>
      <div>
        <h3>My Pets:</h3>
        <p>Add pet</p>
        <Button>ADD</Button>
      </div>
      <PetsList data={myPets} />
    </>
  );
};

export default PetsData;
