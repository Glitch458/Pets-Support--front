import AddIcon from '@mui/icons-material/Add';
import {
  ButtonBasic,
  LinkBasic,
  AddLinkCircle,
  AddLinkBasic,
} from './Button.styled';

const Button = ({ type = 'button', children }) => {
  return <ButtonBasic type={type}>{children}</ButtonBasic>;
};

const ButtonLink = ({ name = '', href = '', children }) => {
  return (
    <LinkBasic href={href} name={name}>
      {children}
    </LinkBasic>
  );
};
const AddButtonLink = ({ name = '', href = '', children }) => {
  return (
    <AddLinkBasic href={href} name={name}>
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
    </AddLinkBasic>
  );
};

const AddButtonCircleLink = ({ name = '', href = '', children }) => {
  return (
    <AddLinkCircle href={href} name={name}>
      <AddIcon
        sx={{
          width: 32,
          height: 32,
          color: '#ffffff',
        }}
      />
      {children}
    </AddLinkCircle>
  );
};

export { ButtonLink, AddButtonLink, AddButtonCircleLink, Button };
