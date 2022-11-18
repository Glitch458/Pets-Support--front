import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Nav } from 'components/Nav/Nav';
import Logo from 'components/Logo/Logo';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';
import Spinner from 'components/Spinner/Spinner';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <Logo />
          <Nav />
        </Container>
      </Header>
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default SharedLayout;
