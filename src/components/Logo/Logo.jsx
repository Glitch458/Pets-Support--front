import logo from '../../images/Logo/petly.png1x-mob.png';
import style from './Logo.styled';

export default function Logo() {
  return (
    <div className={style.logoStyle}>
      <img src={logo} alt="logo" aria-label="logo" />
    </div>
  );
}
