import { Logo } from '../../images/Logo/petly.png1x-mob.png';
import { LogoStyle } from './Logo.styled';

export default function Logo() {
  return (
    <LogoStyle>
      <img src={Logo} alt="logo" aria-label="logo" />
    </LogoStyle>
  );
}
