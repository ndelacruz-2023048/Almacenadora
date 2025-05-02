import React, { useState, useCallback } from 'react'
import { ButtonsSection } from '../moleculas/ButtonsSection'
import { useProductStore } from '../../stores/ProductStore';
import { ProductForm } from './Forms/ProductForm';
import {TabItem} from '../moleculas/TabItem'; // Importa TabItem
import {TabIndicator} from '../atomos/TabIndicator'
import styled from 'styled-components'

export const HeaderSectionContent = ({ onTabChange, activeTab }) => {
    const {isFormOpen,setIsFormOpen} = useProductStore()

    const [indicatorWidth, setIndicatorWidth] = useState(50);
    const [indicatorTranslateX, setIndicatorTranslateX] = useState(0);
    const tabRefs = React.useRef([]);

    const handleTabClick = useCallback((index) => {
        onTabChange(index);
    }, [onTabChange]);

    React.useEffect(() => {
        if (tabRefs.current[activeTab]) {
        const activeTabElement = tabRefs.current[activeTab];
        setIndicatorWidth(activeTabElement.offsetWidth);
        setIndicatorTranslateX(activeTabElement.offsetLeft);
        }
    }, [activeTab, tabRefs]);

    React.useEffect(() => {
        tabRefs.current = ['Users', 'Companies'].map(() => React.createRef());
    }, []);

    return (
        <Wrappper>
            {isFormOpen && (<ProductForm/>)}
            <TitleSection>
                <Title>Weekly Reports</Title>
                <SubTitle>The latest weekly reports for all departments available</SubTitle>
            </TitleSection>
            <TitleDown>
                <TabsBar>
                    <TabItem
                        label="Users"
                        isActive={activeTab === 0}
                        onClick={() => handleTabClick(0)}
                        ref={tabRefs.current[0]}
                    />
                    <TabItem
                        label="Companies"
                        isActive={activeTab === 1}
                        onClick={() => handleTabClick(1)}
                        ref={tabRefs.current[1]}
                    />
                    <TabIndicator width={indicatorWidth} translateX={indicatorTranslateX} color="#007bff"/>
                </TabsBar>
                <ButtonsSection />
            </TitleDown>
        </Wrappper>
    )
}

const Wrappper = styled.div`
    
`

const TitleDown = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-bottom: 2px solid #ccc;
    padding-bottom: 10px;
`

const TitleSection = styled.div`
    margin: 0;
    height: auto;
`

const Title = styled.h1`
    font-size: 50px;
    margin: 0;
`

const SubTitle = styled.span`
    font-size: 29px;
    font-weight: 50;
`

const TabsBar = styled.div`
    display: flex;
    position: relative;
`;