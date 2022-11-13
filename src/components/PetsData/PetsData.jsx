import myPets from '../../data/myPets.json';
import { AddButtonCircle } from 'components/Button/Button';
import PetsList from './PetsList';

export const PetsData = () => {
  return (
    <>
      <div>
        <h3>My Pets:</h3>
        <p>Add pet</p>
        <AddButtonCircle />
      </div>
      <PetsList data={myPets} />
    </>
  );
};

export default PetsData;
