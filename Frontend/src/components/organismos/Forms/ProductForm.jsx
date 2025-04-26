import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useCallback, useState } from 'react'
import styled from 'styled-components'
import { useProductStore } from '../../../stores/ProductStore'

import { NavLink } from 'react-router';
import {useDropzone} from 'react-dropzone'
import { UploadImage } from './UploadImage';
import { Device } from '../../../style/Breakpoints';
import {useForm} from 'react-hook-form'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
export const ProductForm = () => {

  /*Hook del Store para abrir y cerrar el model es decir este formulario */
  const {isFormOpen,setIsFormOpen} = useProductStore()

  /*Hook useState para poder ver si el usuario sube una imagen o no*/
  const [urlImage,setUrlImage] = useState(null)
  /*Funcion para que al momento que el usuario suba una imagen se muestra dicha imagen*/
  const onDrop = useCallback(acceptedFiles => {
    console.log(acceptedFiles[0]);
    const imageUrl = URL.createObjectURL(acceptedFiles[0]);
    setUrlImage(imageUrl)
    console.log(imageUrl);
  }, [])
  /*Hook para manipular el espacio para subir la imagen */
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop})

  /*Hook para validar el formulario */
  const {register,handleSubmit,formState:{errors}} = useForm()

  const handleSubmitProductForm = (data)=>{
    console.log(data);
  }

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
        <Form onSubmit={handleSubmit(handleSubmitProductForm)}>  
          <FullWidthInput>
            <TextField id="outlined-basic" label="Name" variant="outlined" {...register("productName",{maxLength:20})} className='inputFullWidth'/>
            {errors.productName && <span>Este campo es obligatorio</span>}
          </FullWidthInput> 
          <ContainerFormField>
            <FormField>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Categoria</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Proveedor"
                  className='inputFullWidth'
                  {...register("productCategory")}
                >
                  <MenuItem value={10}>Frutas</MenuItem>
                  <MenuItem value={20}>Verduras</MenuItem>
                  <MenuItem value={30}>Lacteos</MenuItem>
                </Select> 
              </FormControl>
            </FormField>
            <FormField>
              <TextField id="outlined-basic" label="Stock" variant="outlined" {...register("productStock",{maxLength:20})} className='inputFullWidth'/>
            </FormField>
            <FormField>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">Proveedor</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Proveedor"
                  className='inputFullWidth'
                  {...register("productProvider")}
                >
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select> 
              </FormControl>
            </FormField>
            <FormField>
              <DatePicker label="Fecha de entrega" className='inputFullWidth'/>
            </FormField>
          </ContainerFormField> 
          <FullWidthInput>
            <TextField id="outlined-basic" label="Descripcion" variant="outlined" {...register("productDescription",{maxLength:20})} className='inputFullWidth'/>
          </FullWidthInput> 
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
            <ButtonForm type="submit" className='confirm'>Confirm</ButtonForm>
          </SectionButton>
        </Form>
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
  gap: 4px;
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



const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 90%;
  gap: 8px;
  height: 87%;
  .selectCategorias{
    border-radius: 12px;
    width: 100%!important;
  }

  .inputFullWidth{
    width: 100%;
    background-color: white;
    border-radius: 20px;
  }
  .css-quhxjy-MuiInputBase-root-MuiOutlinedInput-root,.css-vycme6-MuiPickersInputBase-root-MuiPickersOutlinedInput-root{
    border-radius: 20px;
  }
`

const FullWidthInput = styled.div`
  width: 100%;
`
const Text = styled.p`
  
`

const ContainerFormField = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  gap: 10px;
`

const FormField = styled.div`
  width: 100%;
  
  @media ${Device.laptop}{
    width: 100%;
  }
  @media ${Device.desktop}{
    width: 48%;
  }
  .inputForm{
    width: 100%;
  }
`
const ContainUploadImage = styled.div`
  height: 30%;
  width: 100%;
  border: 1px dashed #65dbff;
`
const SectionButton = styled.div`
  display: flex;
  justify-content: end;
  align-items: end;
  gap: 10px;
  width: 100%;
  height: 22%;
  margin-bottom: 8px;
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