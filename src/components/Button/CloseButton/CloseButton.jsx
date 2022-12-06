import { CloseBtn } from "./CLoseButton.styled";
import { ReactComponent as IconClose } from 'images/icons/close.svg';

export const CloseBtnn = ({ onClick, className }) => {
  return (
    <CloseBtn onClick={onClick} className={className}>
      <IconClose />
    </CloseBtn>
  );
};