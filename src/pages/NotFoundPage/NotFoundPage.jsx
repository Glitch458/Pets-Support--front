import { useState, useEffect } from "react";
import {
  NotFoundWrapper,
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
} from "./NotFoundPage.styled";

const NotFoundPage = () => {
  let pageX = window.innerWidth;
  let pageY = window.innerHeight;
  let mouseY = 0;
  let mouseX = 0;
  const [eyePosition, setEyePosition] = useState({});

  function trackEyes(event) {
    mouseY = event.pageY;
    let yAxis = -pageY / 30 + mouseY / 15;

    mouseX = event.pageX / -pageX;

    let xAxis = -mouseX * 50 - 25;
    setEyePosition({
      transform: `translate(${xAxis}px, ${yAxis}px)`,
    });
  }

  useEffect(() => {
    document.addEventListener("mousemove", trackEyes);

    return () => document.removeEventListener("mousemove", trackEyes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [eyePosition]);

  return (
    <NotFoundWrapper>
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
              <GhostBoxEyesLeft style={eyePosition} />
              <GhostBoxEyesRight style={eyePosition} />
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
          <BoxButton href="/">Go back</BoxButton>
        </BoxDescription>
      </NotFoundBox>
    </NotFoundWrapper>
  );
};

export default NotFoundPage;
