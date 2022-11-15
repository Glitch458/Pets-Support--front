import AddIcon from '@mui/icons-material/Add';
import {
  ButtonBasic,
  AddButtonCircleStyle,
  AddButtonBasicStyle,
} from './Button.styled';

const Button = ({ name = '', href = '', children }) => {
  return (
    <ButtonBasic href={href} name={name}>
      {children}
    </ButtonBasic>
  );
};
const AddButtonBasic = ({ name = '', href = '', children }) => {
  return (
    <AddButtonBasicStyle href={href} name={name}>
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

const AddButtonCircle = ({ name = '', href = '', children }) => {
  return (
    <AddButtonCircleStyle href={href} name={name}>
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
