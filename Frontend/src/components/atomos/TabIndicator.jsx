// src/components/atoms/TabIndicator.js
import styled from 'styled-components';

export const TabIndicator = ({ width, translateX, color }) => { // Recibe una prop 'color'
  return (
    <StyledTabIndicator width={width} translateX={translateX} backgroundColor={color} />
  );
};

const StyledTabIndicator = styled.div`
    height: 2px;
    background-color: ${props => props.backgroundColor}; // Usa la prop 'backgroundColor'
    position: absolute;
    left: 0;
    width: ${props => props.width}px;
    transform: translateX(${props => props.translateX}px);
    transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;
`;