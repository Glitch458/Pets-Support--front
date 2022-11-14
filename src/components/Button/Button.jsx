import AddIcon from '@mui/icons-material/Add';
import {
  ButtonBasic,
  AddButtonCircleStyle,
  AddButtonBasicStyle,
} from './Button.styled';

const Button = ({ type = 'button', children, fullwidth = NaN }) => {
  return (
    <ButtonBasic fullwidth={fullwidth} type={type}>
      {children}
    </ButtonBasic>
  );
};
const AddButtonBasic = ({ type = 'button', children }) => {
  return (
    <AddButtonBasicStyle type={type}>
      {children}
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

const AddButtonCircle = ({ type = 'button', children }) => {
  return (
    <AddButtonCircleStyle type={type}>
      <AddIcon
        sx={{
          width: 32,
          height: 32,
          color: '#ffffff',
        }}
      />
      {children}
    </AddButtonCircleStyle>
  );
};

export { Button, AddButtonBasic, AddButtonCircle };
