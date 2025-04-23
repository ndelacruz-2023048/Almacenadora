import styled from 'styled-components';

export const Tag = styled.span`
    padding: 2px 8px;
    border-radius: 3px;
    font-size: 12px;
    font-weight: 500;
    background-color: ${props => props.color || '#DFE1E6'};
    color: #42526E;
`

export const PurpleTag = styled(Tag)`
    background-color: #EAE6FF;
    color: #403294;
`