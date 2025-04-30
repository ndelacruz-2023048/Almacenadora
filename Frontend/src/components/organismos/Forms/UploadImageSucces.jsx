import React from 'react'
import styled from 'styled-components'
import { useProductStore } from '../../../stores/ProductStore'

export const UploadImageSucces = ({imageURL,isInteractionDisabled,isLoadingImage,dataFile}) => {
  return (
    <Container>
        <Image src={imageURL}/>  
        <Section>
            <NameFile>{dataFile.name}</NameFile>
            <SizeFile>{dataFile.size}kb</SizeFile>
        </Section> 
        {!isInteractionDisabled ? (<AlertInformation>Click para cambiar la imagen</AlertInformation>)
        :(<AlertInformation>{isLoadingImage? "Uploading":"Upload"}</AlertInformation>)}
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    position: relative;
    width: 100%;
    height: 100%;
`
const Image = styled.img`
    width: 100%;
    object-fit: cover;
`

const Section = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2px;
    position: absolute;
    backdrop-filter: blur(20px);
    padding: 10px 15px;
    border-radius: 20px;
    top: 5%;
    left: 5%;
`
const NameFile = styled.p`
    font-weight: 800;
`

const SizeFile = styled.p`
    font-weight: 200;
`
const AlertInformation = styled.div`
    position: absolute;
    bottom: 5%;
    left: 5%;
    padding: 2px 10px;
    backdrop-filter: blur(30px);
    border-radius: 10px;
    font-size: 13px;
    font-weight: 800;
    color: #ffffff;
`