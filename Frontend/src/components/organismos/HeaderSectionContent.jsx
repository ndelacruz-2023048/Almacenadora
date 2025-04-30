import React, { useState } from 'react'
import styled from 'styled-components'
import { ButtonsSection } from '../moleculas/ButtonsSection'
import { useProductStore } from '../../stores/ProductStore';
import { ProductForm } from './Forms/ProductForm';
import { useEntryProductRegister } from '../../stores/EntryProductRegisterStore';
import { EntryRegisterProductForm } from './Forms/EntryProductRegister';
import { useOutProductRegisterStore } from '../../stores/OutProductRegister';
import { OutProductRegister } from './Forms/OutProductRegister';
export const HeaderSectionContent = () => {
    const {isFormOpen,setIsFormOpen} = useProductStore()
    const {isEntryProductFormOpen, setIsEntryProductFormOpen} = useEntryProductRegister()
    const {isOutProductFormOpen, setIsOutProductFormOpen} = useOutProductRegisterStore()


    console.log(isEntryProductFormOpen);
    
    return (
        <Wrappper>
            {isFormOpen && (<ProductForm/>)}
            {isEntryProductFormOpen && (<EntryRegisterProductForm/>)}
            {isOutProductFormOpen && (<OutProductRegister/>)}
            <TitleSection>
                <Title>Weekly Reports</Title>
                <SubTitle>The latest weekly reports for all departments available</SubTitle>
            </TitleSection>
            <TitleDown>
                users
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