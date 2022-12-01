import { useEffect, useState /*useMemo*/ } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
//import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import ImgCover from 'images/pet-cover.jpg';
import { handleBackdropClick, handleEscClick } from 'helpers/modalHelpers';
import {
  /*notifySuccess, notifyError,*/ notifyWarning,
} from 'helpers/toastNotify';
import {
  useGetNoticeByIdQuery,
  useDeleteFavoriteNoticeMutation,
  useAddFavoriteNoticeMutation,
} from 'redux/Notices/noticesApi';
import { useGetCurrentUserQuery } from 'redux/User/userApi';
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

  const { data: currentUser /*, isFetching , isError */ } =
    useGetCurrentUserQuery();

  // const ownPet = useMemo(
  //   () => petData?.email === currentUserEmail,
  //   [currentUserEmail, petData?.email]
  // );

  useEffect(() => {
    if (!isSuccess) return;
    if (currentUser) {
      const email = currentUser.email;
      const phone = currentUser.phone;
      setPetData(prevState => ({ ...prevState, ...notices, email, phone }));
    }
  }, [notices, isSuccess, currentUser]);

  useEffect(() => {
    const ecsClose = handleEscClick(handleModalToggle);
    return () => ecsClose();
  }, [handleModalToggle]);

  // const handleDeleteClick = async () => {
  //   try {
  //     await deleteNotices(id);
  //     notifySuccess('Deleted!');
  //     //toggleModal();
  //   } catch ({ response: { data } }) {
  //     notifyError(data.message);
  //   }
  // };

  const handleContactClick = () => {
    if (!petData?.phone)
      return notifyWarning("Owner hasn't provided phone number");
    window.open(`tel:${petData.phone}`);
  };

  handleAddToFavoritesClick = () => {
    if (token && token !== null) {
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

  const imgPath = url => {
    return url ? `https://pets-support.onrender.com/${url}` : ImgCover;
  };

  return (
    <Modal onClick={e => handleBackdropClick(e, handleModalToggle)}>
      <InfoWrapper>
        <ImageThumb
          src={imgPath(petData.photoURL)}
          alt={petData.name}
          category={NOTICE_CATEGORY_LABELS[petData.category]}
        />

        <div>
          <Title>{petData.title}</Title>
          <ul>
            {petData &&
              PET_MODAL_KEYS.map(({ label, key, nested, values, category }) => {
                if (nested) {
                  return values.map(({ field, label }) => (
                    <InfoItem key={field} label={label} data />
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
      {/* {ownPet && <DeleteButton onClick={handleDeleteClick} />} */}
      <ActionButtons>
        <AddToFavorites
          authorized={!favorite}
          onClick={e => {
            e.preventDefault();
            handleAddToFavoritesClick();
          }}
          favoriteId={favoriteId}
        />
        <ModalButton primary onClick={handleContactClick}>
          Contact
        </ModalButton>
      </ActionButtons>
    </Modal>
  );
};
