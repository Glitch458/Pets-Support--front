import { Suspense } from "react";
import { Outlet } from "react-router-dom";

// import Header from 'components/Header/Header';
import { Logo } from "components/Logo/Logo";
import Container from "components/Container/Container";
import Header from "components/Header/Header";

const SharedLayout = () => {
  return (
    <>
      <Container>
        <Header>
          <Logo />
        </Header>

        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </Container>
    </>
  );
};

export default SharedLayout;
