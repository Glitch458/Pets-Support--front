import { List, Image } from './PetsList.styled';

export const PetsList = ({ data }) => {
  console.log(data);
  return (
    <ul>
      {data.map(({ name, url, date, breed, comments }) => (
        <List key={name}>
          <Image src={url} alt={name} />
          <p>NamePets: {name}</p>
          <p>Date of birth: {date}</p>
          <p>Breed: {breed}</p>
          <p>Comments: {comments}</p>
        </List>
      ))}
    </ul>
  );
};

export default PetsList;
