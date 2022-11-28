import { useEffect, useState, useMemo } from "react";
import { useSelector } from "react-redux";
import authSelectors from "redux/Auth/auth-selectors";
// import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import { handleBackdropClick, handleEscClick } from "helpers/modalHelpers";
import { notifySuccess, notifyError, notifyWarning } from "helpers/toastNotify";
import { useGetNoticeByIdQuery, useDeleteFavoriteNoticeMutation } from "redux/Notices/noticesApi";
import { PET_MODAL_KEYS, NOTICE_CATEGORY_LABELS } from "constants/petInfoKeys";
import {
    Container,
    ImageThumb,
    Title,
    InfoWrapper,
    InfoItem,
    Description,
    Close,
    AddToFavorites,
    ModalButton,
    DeleteButton,
    ActionButtons,
} from "./ModalNotice.styled";

import modalImage from "images/pet-cover.jpg";


export const ModalNotice = ({id, toggleModal, handleAddToFavoritesClick, favorite}) => {

     const { notices, isSuccess } = useGetNoticeByIdQuery(id);
    const [petData, setPetData] = useState({});
    const [deleteNotice] = useDeleteFavoriteNoticeMutation();

    const currentUserEmail = useSelector(authSelectors.getUserEmail);

    const ownPet = useMemo(() => petData?.owner?.email === currentUserEmail, [currentUserEmail, petData?.owner?.email]);

    useEffect(() => {
    if (!isSuccess) return;
    setPetData(notices);
  }, [notices, isSuccess]);
    
    useEffect(() => {
    const clear = handleEscClick(toggleModal);
    return () => clear();
  }, [toggleModal]);
    
    const handleDeleteClick = async () => {
    try {
      await deleteNotice(id);
      notifySuccess("Deleted!");
      toggleModal();
    } catch ({ response: { data } }) {
      notifyError(data.message);
    }
    };

     const handleContactClick = () => {
    if (!petData?.owner?.phone) return notifyWarning("Owner hasn't provided phone number");
    window.open(`tel:${petData.owner.phone}`);
  };
    
      const handleAddToFavorites = async () => {
    await handleAddToFavoritesClick();
    notifySuccess("Added to favorites!");
  };
    
    return (
        <Modal onCLick={e => handleBackdropClick(e, toggleModal)}>
            <Container>
        <InfoWrapper>
          <ImageThumb src={petData.avatarURL || modalImage} alt={petData.name} category={NOTICE_CATEGORY_LABELS[petData.category]} />
          <div>
            <Title>{petData.title}</Title>
            <ul>
              {PET_MODAL_KEYS.map(({ label, key, nested, values, category }) => {
                if (nested) {
                  return values.map(({ field, label }) => <InfoItem key={field} label={label} data={petData[key] && petData[key][field]} />);
                }
                if (category && category !== petData.category) return null;

                return <InfoItem key={key} label={label} data={petData[key]} />;
              })}
            </ul>
          </div>
        </InfoWrapper>
        <Description text={petData.comments} />
        <Close onClick={toggleModal} />
        {ownPet && <DeleteButton onClick={handleDeleteClick} />}
        <ActionButtons>
          <AddToFavorites authorized={!favorite} onClick={handleAddToFavorites} />
          <ModalButton primary onClick={handleContactClick}>
            Contact
          </ModalButton>
        </ActionButtons>
      </Container>
        </Modal>
    );
}