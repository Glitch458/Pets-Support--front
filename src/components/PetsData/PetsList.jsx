import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import {
  Item,
  Image,
  PetsInfo,
  InfoContainer,
  TitlePetsInfo,
  Box,
} from './PetsList.styled';

export const PetsList = ({ data }) => {
  return (
    <ul>
      {data.map(({ name, url, date, breed, comments }) => (
        <Item key={name}>
          <Image src={url} alt={name} />
          <InfoContainer>
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
            <Box>
              <IconButton aria-label="delete">
                <DeleteIcon />
              </IconButton>
            </Box>
          </InfoContainer>
        </Item>
      ))}
    </ul>
  );
};

export default PetsList;
