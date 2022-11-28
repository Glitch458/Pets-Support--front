import { TrashBtn } from "./TrashButton.styled";
import { ReactComponent as IconTrash } from 'images/icons/trash.svg';

export const TrashButton = ({ onClick, className }) => {
  return (
    <TrashBtn onClick={onClick} className={className}>
      <IconTrash />
    </TrashBtn>
  );
};