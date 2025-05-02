// src/components/atoms/TabLabel.js
import styled from 'styled-components';

export const TabLabel = ({ children, isActive, activeColor = '#007bff', inactiveColor = '#6c757d', onClick }) => {
    return (
        <StyledTabLabel isActive={isActive} activeColor={activeColor} inactiveColor={inactiveColor} onClick={onClick}>
            {children}
        </StyledTabLabel>
    )
};

const StyledTabLabel = styled.span`
    padding: 8px 16px;
    cursor: pointer;
    color: ${props => (props.isActive ? props.activeColor : props.inactiveColor)};
    font-weight: ${props => (props.isActive ? 'bold' : 'normal')};
`;