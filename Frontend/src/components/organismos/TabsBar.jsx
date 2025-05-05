// src/components/organisms/TabsBar.js
import React, { useState, useRef, useEffect, useCallback } from 'react';
import {TabItem} from '../moleculas/TabItem';
import {TabIndicator} from '../atomos/TabIndicator';
import styled from 'styled-components';

export const TabsBar = ({ tabs, onTabChange }) => {
    const [activeTabIndex, setActiveTabIndex] = useState(0);
    const [indicatorWidth, setIndicatorWidth] = useState(0);
    const [indicatorTranslateX, setIndicatorTranslateX] = useState(0);
    const tabRefs = useRef([]);

    const handleTabClick = useCallback((index) => {
        setActiveTabIndex(index);
        onTabChange(index); // Llama a la función para notificar el cambio de pestaña
    }, [onTabChange]);

    useEffect(() => {
        if (tabRefs.current[activeTabIndex]) {
        const activeTab = tabRefs.current[activeTabIndex];
        setIndicatorWidth(activeTab.offsetWidth);
        setIndicatorTranslateX(activeTab.offsetLeft);
        }
    }, [activeTabIndex, tabRefs]);

    useEffect(() => {
        tabRefs.current = tabs.map(() => React.createRef());
    }, [tabs]);

    return (
        <TabsBarWrapper>
        {tabs.map((tab, index) => (
            <TabItem
            key={index}
            label={tab}
            isActive={activeTabIndex === index}
            onClick={() => handleTabClick(index)}
            ref={tabRefs.current[index]}
            />
        ))}
        <TabIndicator width={indicatorWidth} translateX={indicatorTranslateX} />
        </TabsBarWrapper>
    );
};

const TabsBarWrapper = styled.div`
  display: flex;
  position: relative;
  border-bottom: 1px solid ${props => props.theme.borderColor};
`;