import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

// import Header from 'components/Header/Header';
import { Logo } from 'components/Logo/Logo';
import { HeaderBox, ContainerDiv } from './SharedLayout.styled';

const SharedLayout = () => {
  return (
    <>
      <HeaderBox>
        <ContainerDiv>
          <Logo />
        </ContainerDiv>
      </HeaderBox>

      <ContainerDiv>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </ContainerDiv>
    </>
  );
};

export default SharedLayout;
