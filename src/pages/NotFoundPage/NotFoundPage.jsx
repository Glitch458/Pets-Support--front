// import { useState, useEffect } from 'react';
import Follow from 'follow-js';
import {
  NotFoundBox,
  GhostBox,
  GhostBoxContainer,
  GhostBoxEyes,
  GhostBoxEyesLeft,
  GhostBoxEyesRight,
  GhostBoxBottom,
  GhostBoxBottomElement,
  GhostShadow,
  BoxDescription,
  BoxDescriptionContainer,
  BoxDescriptionTitle,
  BoxDescriptionText,
  BoxButton,
  GhostBoxSymbol,
} from './NotFoundPage.styled';

const NotFoundPage = () => {
  // let pageX = window.innerWidth;
  // let pageY = window.innerHeight;
  // let mouseY = 0;
  // let mouseX = 0;
  // let track = {};
  // const [tracking, setTracking] = useState();

  // useEffect(() => {}, []);

  // document.addEventListener('mousemove', event => {
  //   mouseY = event.pageY;
  //   let yAxis = ((pageY / 2 - mouseY) / pageY) * 300;

  //   mouseX = event.pageX / -pageX;

  //   let xAxis = -mouseX * 100 - 100;
  //   track = {
  //     transform: `translate(${xAxis}px, ${yAxis}px)`,
  //   };
  // });

  return (
    <NotFoundBox>
      <GhostBox>
        <GhostBoxSymbol />
        <GhostBoxSymbol />
        <GhostBoxSymbol />
        <GhostBoxSymbol />
        <GhostBoxSymbol />
        <GhostBoxSymbol />
        <GhostBoxContainer>
          <GhostBoxEyes>
            <GhostBoxEyesLeft /*style={track}*/ />
            <GhostBoxEyesRight /*style={track}*/ />
          </GhostBoxEyes>
          <GhostBoxBottom>
            <GhostBoxBottomElement />
            <GhostBoxBottomElement />
            <GhostBoxBottomElement />
            <GhostBoxBottomElement />
            <GhostBoxBottomElement />
          </GhostBoxBottom>
        </GhostBoxContainer>
        <GhostShadow />
      </GhostBox>
      <BoxDescription>
        <BoxDescriptionContainer>
          <BoxDescriptionTitle>Whoops!</BoxDescriptionTitle>
          <BoxDescriptionText>
            It seems like we couldn't find the page you were looking for
          </BoxDescriptionText>
        </BoxDescriptionContainer>
        <BoxButton href="/homepage">Go back</BoxButton>
      </BoxDescription>
    </NotFoundBox>
  );
};

export default NotFoundPage;
