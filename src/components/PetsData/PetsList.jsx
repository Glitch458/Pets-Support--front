import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDeletePetMutation } from 'redux/User/userPetsApi';
import {
  Item,
  Image,
  PetsInfo,
  InfoContainer,
  TitlePetsInfo,
  Box,
} from './PetsList.styled';

import petCover from 'images/pet-cover.jpg';

export const PetsList = ({ data }) => {
  const [deletePet] = useDeletePetMutation();

  return (
    <ul>
      {data.map(({ name, url, date, breed, comments, _id }) => (
        <Item key={name}>
          <Image src={url || petCover} alt={name} />
          <InfoContainer>
            <Box onClick={() => deletePet(_id)}>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Box>
            <PetsInfo>
              <TitlePetsInfo>NamePets:</TitlePetsInfo> {name}
            </PetsInfo>
            <PetsInfo>
              <TitlePetsInfo>Date of birth:</TitlePetsInfo> {date}
            </PetsInfo>
            <PetsInfo>
              <TitlePetsInfo>Breed:</TitlePetsInfo> {breed}
            </PetsInfo>
            <PetsInfo>
              <TitlePetsInfo>Comments:</TitlePetsInfo> {comments}
            </PetsInfo>
          </InfoContainer>
        </Item>
      ))}
    </ul>
  );
};

export default PetsList;
