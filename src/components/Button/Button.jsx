import { Btn } from './Button.styled';

export const Button = ({ type, content }) => {
  return (
    <button className={Btn} type={type}>
      {content}
    </button>
  );
};
