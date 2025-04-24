import styled from 'styled-components';

export const PurpleTag = styled.div`
    background-color: ${({ children }) =>
        children === "Customer" ? "#e6f4ea" : "#f2f2f2"};
    color: ${({ children }) => (children === "Customer" ? "#2e7d32" : "#7e7f8f")};
    padding: 4px 12px;
    border-radius: 12px;
    display: inline-block;
    font-size: 14px;
`;