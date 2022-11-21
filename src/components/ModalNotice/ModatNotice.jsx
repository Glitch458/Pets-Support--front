import { useEffect, useState } from "react";
// import { Button } from 'components/Button/Button';
import Modal from 'components/Modal/Modal';
import {handleBackdropClick, handleEscClick } from "../../helpers/modalHelpers";
import { example } from './example';
import { AddToFavorites } from "./ModalNotice.styled";


export const ModalNotice = ({toggleModal}) => {
    const [pets] = useState(example);

      useEffect(() => {
    // Для подгрузки животных с бэка по айди
      }, []);
    
    useEffect(() => {
    const clear = handleEscClick(toggleModal);
    return () => clear();
  }, [toggleModal]);
    
    return (
        <Modal onCLick={e => handleBackdropClick(e, toggleModal)}>
            <div>
                <h2>Сute dog looking for a home</h2>
                <ul>
                    {pets?.map(({ id, category, name, birthday, breed, location, sex, email, phone, comments }) => {
                        return (
                            <li key={id}>
                                <p>{category}</p>
                                <p>{name}</p>
                                <p>{birthday}</p>
                                <p>{breed}</p>
                                <p>{location}</p>
                                <p>{sex}</p>
                                <p>{email}</p>
                                <p>{phone}</p>
                                <p>{comments}</p>
                            </li>
                        )
                    })}
                </ul>
                 <AddToFavorites />
            </div>
        </Modal>
    );
}