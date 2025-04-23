import React from 'react'
import styled from 'styled-components'
import { ButtonsSection } from '../moleculas/ButtonsSection'

export const HeaderSectionContent = () => {
    return (
        <Wrappper>
            <TitleSection>
                <Title>Weekly Reports</Title>
                <SubTitle>The latest weekly reports for all departments available</SubTitle>
            </TitleSection>
            <TitleDown>
                users
                <ButtonsSection/>
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