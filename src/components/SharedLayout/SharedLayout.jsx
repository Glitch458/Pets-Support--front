import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { AuthNav } from 'components/AuthNav/AuthNav';
import { Nav } from 'components/Nav/Nav';
import Logo from 'components/Logo/Logo';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import { NavInnerContainer } from 'components/NavInnerContainer/NavInnerContainer';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <NavInnerContainer>
            <Logo />
            <Nav />
            <AuthNav />
          </NavInnerContainer>
        </Container>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
