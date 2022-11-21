import { HeartBtn } from "./HeartButton.styled";
import IconHeart from "../../../images/icons/Heart.svg";

export const HeartButton = ({ onClick, className, authorized }) => {
    return (
        <HeartBtn onClick={onClick} className={className || ""} authorized={authorized}>
            <IconHeart />
        </HeartBtn>
    );
};