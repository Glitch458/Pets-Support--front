import styled from 'styled-components';
import { theme } from 'constants';

export const NotFoundBox = styled.div`
  width: 350px;
  height: 100%;
  max-height: 600px;
  min-height: 450px;
  background-color: ${p => theme.colors.accent};
  border-radius: 20px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  padding: 30px 50px;
`;

export const GhostBox = styled.div`
  padding: 15px 25px 25px;
  position: absolute;
  left: 50%;
  top: 30%;
  transform: translate(-50%, -30%);
`;

export const GhostBoxSymbol = styled.div`
&:nth-child(1) {
        opacity: .2;
        animation: shine 4s ease-in-out 3s infinite;
        
        &:before, &:after {
          content: '';
          width: 12px;
          height: 4px;
          background: ${p => theme.colors.white};
          position: absolute;
          border-radius: 5px;
          bottom: 65px;
          left: 0;
        }
        &:before {
          transform: rotate(45deg);
        }
        &:after {
          transform: rotate(-45deg);
        }
      }
      &:nth-child(2) {
        position: absolute;
        left: -5px;
        top: 30px;
        height: 18px;
        width: 18px;
        border: 4px solid;
        border-radius: 50%;
        border-color: ${p => theme.colors.white};
        opacity: .2;
        animation: shine 4s ease-in-out 1.3s infinite;
      }
      &:nth-child(3) {
        opacity: .2;
        animation: shine 3s ease-in-out .5s infinite;
        
        &:before, &:after {
          content: '';
          width: 12px;
          height: 4px;
          background: ${p => theme.colors.white};
          position: absolute;
          border-radius: 5px;
          top: 5px;
          left: 40px;
        }
        &:before {
          transform: rotate(90deg);
        }
        &:after {
          transform: rotate(180deg);
        }
      }
      &:nth-child(4) {
        opacity: .2;
        animation: shine 6s ease-in-out 1.6s infinite;
        
        &:before, &:after {
          content: '';
          width: 15px;
          height: 4px;
          background: ${p => theme.colors.white};
          position: absolute;
          border-radius: 5px;
          top: 10px;
          right: 30px;
        }
        &:before {
          transform: rotate(45deg);
        }
        &:after {
          transform: rotate(-45deg);
        }
      }
      &:nth-child(5) {
        position: absolute;
        right: 5px;
        top: 40px;
        height: 12px;
        width: 12px;
        border: 3px solid;
        border-radius: 50%;
        border-color: ${p => theme.colors.white};
        opacity: .2;
        animation: shine 1.7s ease-in-out 7s infinite;
      }
      &:nth-child(6) {
        opacity: .2;
        animation: shine 2s ease-in-out 6s infinite;
        
        &:before, &:after {
          content: '';
          width: 15px;
          height: 4px;
          background: ${p => theme.colors.white};
          position: absolute;
          border-radius: 5px;
          bottom: 65px;
          right: -5px;
        }
        &:before {
          transform: rotate(90deg);
        }
        &:after {
          transform: rotate(180deg);
        }
      }
    }

    @keyframes shine {
      0% {opacity: .2;}
      25% {opacity: .1;}
      50% {opacity: .2;}
      100% {opacity: .2;}
    }
    `;

export const GhostBoxContainer = styled.div`
  background: ${p => theme.colors.white};
  width: 100px;
  height: 100px;
  border-radius: 100px 100px 0 0;
  position: relative;
  margin: 0 auto;
  animation: upndown 3s ease-in-out infinite;

  @keyframes upndown {
    0% {
      transform: translateY(5px);
    }
    50% {
      transform: translateY(15px);
    }
    100% {
      transform: translateY(5px);
    }
  }
`;

export const GhostBoxEyes = styled.div`
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -45%);
  height: 12px;
  width: 70px;
`;

export const GhostBoxEyesLeft = styled.div`
  width: 12px;
  height: 12px;
  background-color: ${p => theme.colors.accent};
  border-radius: 50%;
  margin: 0 10px;
  position: absolute;
  left: 0;
`;

export const GhostBoxEyesRight = styled.div`
  width: 12px;
  height: 12px;
  background: ${p => theme.colors.accent};
  border-radius: 50%;
  margin: 0 10px;
  position: absolute;
  right: 0;
`;

export const GhostBoxBottom = styled.div`
  display: flex;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
`;

export const GhostBoxBottomElement = styled.div`
  flex-grow: 1;
  position: relative;
  top: -10px;
  height: 20px;
  border-radius: 100%;
  background-color: ${p => theme.colors.white};

  &:nth-child(2n) {
    top: -12px;
    margin: 0 -0px;
    border-top: 15px solid ${p => theme.colors.accent};
    background: transparent;
  }
`;

export const GhostShadow = styled.div`
  height: 20px;
  box-shadow: 0 50px 15px 5px #ffffff;
  border-radius: 50%;
  margin: 0 auto;
  animation: smallnbig 3s ease-in-out infinite;

  @keyframes smallnbig {
    0% {
      width: 90px;
    }
    50% {
      width: 100px;
    }
    100% {
      width: 90px;
    }
  }
`;
export const BoxDescription = styled.div`
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
`;

export const BoxDescriptionContainer = styled.div`
  color: ${p => theme.colors.white};
  text-align: center;
  width: 200px;
  font-size: 16px;
  margin: 0 auto;
`;
export const BoxDescriptionTitle = styled.div`
  font-size: 24px;
  letter-spacing: 0.5px;
`;
export const BoxDescriptionText = styled.div`
  color: ${p => theme.colors.white};
  line-height: 20px;
  margin-top: 20px;
`;

export const BoxButton = styled.a`
  display: block;
  position: relative;
  background: ${p => theme.colors.buttonAccent};
  border: 1px solid white;
  border-radius: 50px;
  height: 50px;
  text-align: center;
  text-decoration: none;
  color: ${p => theme.colors.white};
  line-height: 50px;
  font-size: 18px;
  padding: 0 70px;
  white-space: nowrap;
  margin-top: 25px;
  transition: background 0.5s ease;
  overflow: hidden;
  -webkit-mask-image: -webkit-radial-gradient(white, black);

  &:before {
    content: '';
    position: absolute;
    width: 20px;
    height: 100px;
    background: ${p => theme.colors.white};
    bottom: -25px;
    left: 0;
    border: 2px solid ${p => theme.colors.white};
    transform: translateX(-50px) rotate(45deg);
    transition: transform 0.5s ease;
  }

  &:hover {
    background: transparent;
    border-color: ${p => theme.colors.white};

    &:before {
      transform: translateX(250px) rotate(45deg);
    }
  }
`;
