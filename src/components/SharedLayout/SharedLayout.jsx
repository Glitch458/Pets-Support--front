import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Nav } from 'components/Nav/Nav';
import Logo from 'components/Logo/Logo';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Logo></Logo>
          <Nav></Nav>
        </Container>
      </Header>
      <Container>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
