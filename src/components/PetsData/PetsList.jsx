import { List, Image, PetsInfo } from './PetsList.styled';

export const PetsList = ({ data }) => {
  console.log(data);
  return (
    <ul>
      {data.map(({ name, url, date, breed, comments }) => (
        <List key={name}>
          <Image src={url} alt={name} />
          <PetsInfo>NamePets: {name}</PetsInfo>
          <PetsInfo>Date of birth: {date}</PetsInfo>
          <PetsInfo>Breed: {breed}</PetsInfo>
          <PetsInfo>Comments: {comments}</PetsInfo>
        </List>
      ))}
    </ul>
  );
};

export default PetsList;
