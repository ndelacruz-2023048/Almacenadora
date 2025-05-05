// src/components/molecules/TabItem.js
import React from 'react';
import { TabLabel } from '../atomos/TabLabel';
import styled from 'styled-components';

const TabItemWrapper = styled.div`
  position: relative;
`;

export const TabItem = ({ label, isActive, onClick }) => {
    return(
        <TabItemWrapper>
            <TabLabel isActive={isActive} onClick={onClick}>
                {label}
            </TabLabel>
        </TabItemWrapper>
    )
}