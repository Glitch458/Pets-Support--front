import { useEffect, useState, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import authSelectors from 'redux/Auth/auth-selectors';
// import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { handleBackdropClick, handleEscClick } from 'helpers/modalHelpers';
import {
  notifySuccess,
  /*notifyError,*/ notifyWarning,
} from 'helpers/toastNotify';
import {
  useGetNoticeByIdQuery,
  useDeleteFavoriteNoticeMutation,
  useAddFavoriteNoticeMutation,
} from 'redux/Notices/noticesApi';
//import { useGetCurrentUserQuery } from 'redux/User/userApi';
import { addFavorite, deleteFavorite } from 'redux/Notices/noticesSlice';
import { PET_MODAL_KEYS, NOTICE_CATEGORY_LABELS } from 'constants/petInfoKeys';
import {
  //Container,
  ImageThumb,
  Title,
  InfoWrapper,
  InfoItem,
  Description,
  Close,
  AddToFavorites,
  ModalButton,
  //DeleteButton,
  ActionButtons,
} from './ModalNotice.styled';

import modalImage from 'images/pet-cover.jpg';

export const ModalNotice = ({
  id,
  handleModalToggle,
  handleAddToFavoritesClick,
  favorite,
}) => {
  const { data: notices, isSuccess } = useGetNoticeByIdQuery(id);
  const [petData, setPetData] = useState({});

  const token = useSelector(state => state.auth.token);
  const navigete = useNavigate();
  const dispatch = useDispatch();
  const favoriteNotices = useSelector(state => state.notices.favoriteNotices);
  const favoriteId = favoriteNotices.find(elem => elem === id);

  const [addNotices] = useAddFavoriteNoticeMutation();
  const [deleteNotices] = useDeleteFavoriteNoticeMutation();

  // const { data: currentUser } = useGetCurrentUserQuery({
  //   skip: token === null,
  // });
  const currentUserEmail = useSelector(authSelectors.getUserEmail);

  const ownPet = useMemo(
    () => petData?.owner?.email === currentUserEmail,
    [currentUserEmail, petData?.owner?.email]
  );

  useEffect(() => {
    if (!isSuccess) return;
    setPetData(notices);
  }, [notices, isSuccess]);

  useEffect(() => {
    const clear = handleEscClick(handleModalToggle);
    return () => clear();
  }, [handleModalToggle]);

  // const handleDeleteClick = async () => {
  //   try {
  //     await deleteNotice(id);
  //     notifySuccess('Deleted!');
  //     toggleModal();
  //   } catch ({ response: { data } }) {
  //     notifyError(data.message);
  //   }
  // };

  const handleContactClick = () => {
    if (!petData?.owner?.phone)
      return notifyWarning("Owner hasn't provided phone number");
    window.open(`tel:${petData.owner.phone}`);
  };

  handleAddToFavoritesClick = () => {
    if (token && token !== null) {
      //const favoriteId = favoriteNotices.find(elem => elem === id);
      if (!favoriteId) {
        addNotices(id);
        dispatch(addFavorite(id));
      }
      if (favoriteId) {
        deleteNotices(id);
        dispatch(deleteFavorite(id));
      }
    }
    if (!token || token === null) {
      navigete('/login');
    }
  };

  const handleAddToFavorites = async () => {
    await handleAddToFavoritesClick();
    notifySuccess('Added to favorites!');
  };

  return (
    <Modal onClick={e => handleBackdropClick(e, handleModalToggle)}>
      {/* {console.log(currentUserEmail)} */}
      {/* <Container> */}
      <InfoWrapper>
        <ImageThumb
          src={petData.photoURL || modalImage}
          alt={petData.name}
          category={NOTICE_CATEGORY_LABELS[petData.category]}
        />
        <div>
          <Title>{petData.title}</Title>
          <ul>
            {PET_MODAL_KEYS.map(({ label, key, nested, values, category }) => {
              if (nested) {
                return values.map(({ field, label }) => (
                  <InfoItem
                    key={field}
                    label={label}
                    data={petData[key] && petData[key][field]}
                  />
                ));
              }
              if (category && category !== petData.category) return null;

              return <InfoItem key={key} label={label} data={petData[key]} />;
            })}
          </ul>
        </div>
      </InfoWrapper>
      <Description text={petData.comments} />
      <Close onClick={handleModalToggle} />
      {ownPet /*&& <DeleteButton onClick={handleDeleteClick} ->*/}
      <ActionButtons>
        <AddToFavorites
          authorized={!favorite}
          onClick={handleAddToFavorites}
          favoriteId={favoriteId}
        />
        <ModalButton primary onClick={handleContactClick}>
          Contact
        </ModalButton>
      </ActionButtons>
      {/* </Container> */}
    </Modal>
  );
};
