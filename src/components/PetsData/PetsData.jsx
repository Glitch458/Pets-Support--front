import { useState } from 'react';
import { useGetUserPetsQuery } from 'redux/User/userPetsApi';

import { AddButtonCircleLink } from 'components/Button/Button';
import PetsList from './PetsList';
import {
  AddButton,
  Container,
  HeadPetsData,
  Title,
  Text,
} from './PetsData.styled';
import ModalAddPets from 'components/ModalAddPets/ModalAddPets';

export const PetsData = () => {
  const [expanded, setExpanded] = useState(false);
  const { data = [] } = useGetUserPetsQuery();

  const handleModalToggle = () => {
    setExpanded(prev => {
      return !prev;
    });
  };

  return (
    <>
      <Container>
        <HeadPetsData>
          <Title>My Pets:</Title>

          <AddButton
            onClick={e => {
              e.preventDefault();
              handleModalToggle();
            }}
          >
            <Text>Add pet</Text>
            <AddButtonCircleLink />
          </AddButton>
        </HeadPetsData>
        {data && <PetsList data={data} />}
        {data.length === 0 && (
          <div>
            <p>'You have't added your pet yet'</p>
          </div>
        )}
      </Container>
      {expanded && <ModalAddPets handleModalToggle={handleModalToggle} />}
    </>
  );
};

export default PetsData;
