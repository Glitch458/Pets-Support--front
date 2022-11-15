import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import ContainerDivLogoNav from 'components/ContainerLogoNav/ContainerLogoNav';
import { Nav } from 'components/Nav/Nav';
import Logo from 'components/Logo/Logo';
import Container from 'components/Container/Container';
import Header from 'components/Header/Header';

const SharedLayout = () => {
  return (
    <>
      <Header>
        <Container>
          <ContainerDivLogoNav>
            <Logo></Logo>
            <Nav></Nav>
          </ContainerDivLogoNav>
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
