import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import styled from 'styled-components'

export const UploadImage = ({errors}) => {
    
  return (
    <Container>
        <ContainIcon>
            <Icon icon="solar:file-send-linear" className='iconUpload'/>
        </ContainIcon>
        <Description><DescriptionSpan>Click to Upload</DescriptionSpan>or drag and drop</Description>
        <MaxSizeDescription>(Max, File size: 25 MB,{errors?.uploadImage?.message})</MaxSizeDescription>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #eef4fd;
    height: 100%;

`

const ContainIcon = styled.div`
    background-color: #deecff;
    padding: 10px;
    border-radius: 50%;
    .iconUpload{
        color:#0b6ff8;
        font-size: 25px;
    }
    `
const Description = styled.p`
        
`

const DescriptionSpan = styled.span`
    color:#0b6ff8;
    margin-right: 8px;
`

const MaxSizeDescription = styled.p`
    font-size: 13px;
    color: #727272;
    margin-top: 5px;
`