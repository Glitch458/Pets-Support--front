import { HeartBtn } from "./HeartBtn.styled";
import { ReactComponent as IconHeart } from "../../../images/icons/heart.svg";

export const HeartButton = ({ onClick, className, children = "", text= "" }) => {
    return (
        <HeartBtn onClick={onClick} className={className || ""}>
            <IconHeart />
            {children}
            {text}
        </HeartBtn>
    );
};