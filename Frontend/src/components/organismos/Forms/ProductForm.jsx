import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { useProductStore } from '../../../stores/ProductStore'
import { Select, Space,Input, DatePicker} from 'antd';
import { NavLink } from 'react-router';
import {useDropzone} from 'react-dropzone'
import { UploadImage } from './UploadImage';
export const ProductForm = () => {
  const {isFormOpen,setIsFormOpen} = useProductStore()
  const [urlImage,setUrlImage] = useState(null)
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles[0]);
    
    const imageUrl = URL.createObjectURL(acceptedFiles[0]);
    setUrlImage(imageUrl)
    console.log(imageUrl);
  }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})
  return (
    <Container>
      <Section>
        <Header>
          <Info>
            <ContainAddIcon>
              <SectionAddAction>
                  <Icon icon="solar:file-check-bold" className='iconAdd'/>
              </SectionAddAction>
            </ContainAddIcon>
            <ContainText>
              <TitleHeader>Add Product</TitleHeader>
              <DescriptionHeader>Fill the following Information to move forward</DescriptionHeader>
            </ContainText>
          </Info>
          <Close>
            <Icon onClick={setIsFormOpen} icon="si:close-fill" className='iconClose'/>
          </Close>
        </Header>
        <Form>  
          <NameInput>
            <Text>Name</Text>
            <Input placeholder='58' className='inputForm'/>
          </NameInput> 
          <ContainerFormField>
            <FormField>
              <Text>Categoria</Text>
              <Select
                defaultValue=""
                style={{ width: 120 }}
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                ]}
                className='selectCategorias'
              />
            </FormField>
            <FormField>
              <Text>Cantidad stock</Text>
              <Input placeholder='58' className='inputForm'/>
            </FormField>
            <FormField>
              <Text>Proveedor</Text>
              <Select
                defaultValue="lucy"
                style={{ width: 120 }}
                options={[
                  { value: 'jack', label: 'Jack' },
                  { value: 'lucy', label: 'Lucy' },
                  { value: 'Yiminghe', label: 'yiminghe' },
                ]}
                className='selectCategorias'
              />
            </FormField>
            <FormField>
              <Text>Fecha de entrada</Text>
              <DatePicker className='inputForm'/>
            </FormField>
          </ContainerFormField> 
        </Form>
          <ContainUploadImage {...getRootProps({className: 'dropzone'})}>
            <input {...getInputProps()} />
            {
              urlImage===null ? (
                <>
                  <UploadImage/>
                </>
              ):(
                <img src={urlImage} alt="" height="20px" width="20px"/>
              )
                
            }
          </ContainUploadImage>
          <SectionButton>
            <ButtonForm className='cancel' onClick={setIsFormOpen}>Cancel</ButtonForm>
            <ButtonForm className='confirm'>Confirm</ButtonForm>
          </SectionButton>
      </Section>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  backdrop-filter: blur(13px);
  height: 100vh;
  width: 100%;
  z-index: 100;
  top: 0;
  right: 0;
`

const Section = styled.section`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background-color: #f1f1f1;
  border-radius: 20px;
  border: 1px solid #b6b4b4;
  width: 65%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 13%;
`

const Info = styled.div`
  display: flex;
  gap: 8px;
`

const Close = styled.div`
  align-self: start;
  .iconClose{
    color: #918e8e;
    font-size: 
    45px;
  }
`

const ContainAddIcon = styled.div`
  
`

const ContainText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

const TitleHeader = styled.h2`
  font-size: 25px;
  font-weight:600;
`

const DescriptionHeader = styled.div`
  font-size: 15px;
  font-size: 16px;
  font-weight: 300;
  color: #969595;
`

const SectionAddAction = styled.div`
background-color: #b2ccdd;
padding: 9px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
  .iconAdd{
    font-size: 33px;
    color: #0b6ff8;
  }
`



const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  .selectCategorias{
    border-radius: 12px;
    width: 100%!important;
  }
  
  :where(.css-dev-only-do-not-override-1v5z42l).ant-select-outlined:not(.ant-select-disabled):not(.ant-select-customize-input):not(.ant-pagination-size-changer):hover .ant-select-selector {
    border-color: #4096ff;
    border-radius: 12px;
  }
  :where(.css-dev-only-do-not-override-1v5z42l).ant-select-single:not(.ant-select-customize-input) .ant-select-selector {
    border-radius: 12px;
  }
  :where(.css-dev-only-do-not-override-1v5z42l).ant-input-outlined {
    border: 1px solid #b8b4b4;
  }
  :where(.css-dev-only-do-not-override-1v5z42l).ant-select-outlined:not(.ant-select-customize-input) .ant-select-selector {
    border: 1px solid #b8b4b4;
}
`

const NameInput = styled.div`
  width: 100%;
`
const Text = styled.p`
  
`

const ContainerFormField = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
`

const FormField = styled.div`
  width: 49.5%;
  .inputForm{
    width: 100%;
  }
`
const ContainUploadImage = styled.div`
  height: 30%;
  width: 89%;
  border: 1px dashed #65dbff;
`
const SectionButton = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  gap: 10px;
  width: 90%;
  height: 25%;
  .cancel{
    background-color: #deecff;
    color: #4096ff;
  }

  .confirm{
    background-color:#4096ff;
    color: white;
  }
`
const ButtonForm = styled.button`
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 16px;
  cursor: pointer;
`