export const PetsList = ({ data }) => {
  console.log(data);
  return (
    <ul>
      {data.map(({ name, url, date, breed, comments }) => (
        <li key={name}>
          <img src={url} alt={name} width="200" />
          <p>NamePets: {name}</p>
          <p>Date of birth: {date}</p>
          <p>Breed: {breed}</p>
          <p>Comments: {comments}</p>
        </li>
      ))}
    </ul>
  );
};

export default PetsList;
