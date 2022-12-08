import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import ModalConfirm from 'components/ModalConfirm/ModalConfirm';
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
  const [expanded, setExpanded] = useState(false);

  const handleModalToggle = () => {
    setExpanded(prev => {
      return !prev;
    });
  };

  return (
    <ul>
      {data.map(({ name, petURL, date, breed, comments, _id }) => (
        <Item key={name}>
          <Image src={petURL || petCover} alt={name} />
          <InfoContainer>
            <Box onClick={handleModalToggle}>
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
          {expanded && (
            <ModalConfirm
              toggleModal={handleModalToggle}
              id={_id}
              text={'Delete'}
            />
          )}
        </Item>
      ))}
    </ul>
  );
};

export default PetsList;
