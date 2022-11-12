import AddIcon from '@mui/icons-material/Add';
import {
  ButtonBasic,
  AddButtonCircleStyle,
  AddButtonBasicStyle,
} from './Button.styled';

const Button = ({ type, content }) => {
  return <ButtonBasic type={type}>{content}</ButtonBasic>;
};
const AddButtonBasic = ({ content, type }) => {
  return (
    <AddButtonBasicStyle type={type}>
      {content}
      <div>
        <AddIcon
          sx={{
            width: 32,
            height: 32,
            color: '#ffffff',
          }}
        />
      </div>
    </AddButtonBasicStyle>
  );
};

const AddButtonCircle = ({ content, type }) => {
  return (
    <AddButtonCircleStyle type={type}>
      <AddIcon
        sx={{
          width: 32,
          height: 32,
          color: '#ffffff',
        }}
      />
      {content}
    </AddButtonCircleStyle>
  );
};

export { Button, AddButtonBasic, AddButtonCircle };
