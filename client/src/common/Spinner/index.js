import React from 'react'
import styled, { keyframes } from 'styled-components'

const rotator = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(270deg);
  }
`;

const dash = keyframes`
  0% {
    stroke-dashoffset: 187;
  }
  50% {
    stroke-dashoffset: ${187 / 4};
    transform: rotate(135deg);
  }
  100% {
    stroke-dashoffset: 187;
    transform: rotate(450deg);
  }
`;

const colors = keyframes`
  0% {
    stroke: #026337;
  }
  25% {
    stroke: #c5dbcf;
  }
  50% {
    stroke: #003a63;
  }
  75% {
    stroke: #c75c35;
  }
  100% {
    stroke: #c7985c;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledCircle = styled.circle`
  stroke-dasharray: 187;
  stroke-dashoffset: 0;
  transform-origin: center;
  animation: ${dash} 1.4s ease-in-out infinite, ${colors} ${1.4 *
  4}s ease-in-out infinite;
`;

const StyledSpinner = styled.svg`
  animation: ${rotator} 1.4s linear infinite;
  margin: -25px 0 0 -25px;
  width: 50px;
  height: 50px;
`;

export default function(props){
  return (
    <Wrapper>
      <StyledSpinner width="65px" height="65px" viewBox="0 0 66 66">
        <StyledCircle 
        fill="none"
        strokeWidth="6"
        strokeLinecap="round"
        cx="33"
        cy="33"
        r="30"
        />
      </StyledSpinner>
    </Wrapper>
    
  )
}