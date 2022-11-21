import { HeartBtn } from "./HeartButton.styled";
import { ReactComponent as IconHeart } from "../../../images/icons/Heart.svg";

export const HeartButton = ({ onClick, className }) => {
    return (
        <HeartBtn onClick={onClick} className={className || ""}>
            <IconHeart />
        </HeartBtn>
    );
};