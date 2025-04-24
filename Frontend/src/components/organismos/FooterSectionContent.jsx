import React from 'react'
import { Button } from '../atomos/Button'
import styled from 'styled-components'

export const FooterSectionContent = () => {
    return (
        <Wrapper>
            <Button
                text={'Previous'}
            />
            <Page>Page 1 of 10</Page>
        </Wrapper>
    )
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
`

const Page = styled.label`
    margin: 0 32em;
    font-weight: bold;
`