// import styled from 'styled-components';
import { HeartBtn } from "components/Button/Button.styled";
import { ReactComponent as IconHeart } from "../../../src/images/icons/smallHeart.svg";

export const AddToFavorites = () => (
  <HeartBtn>
    Add to
    <IconHeart />
  </HeartBtn>
);
