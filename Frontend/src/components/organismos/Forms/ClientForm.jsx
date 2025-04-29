import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'

import { NavLink } from 'react-router';
import {useDropzone} from 'react-dropzone'
import { UploadImage } from './UploadImage';
import { Device } from '../../../style/Breakpoints';
import {useForm} from 'react-hook-form'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {Select,FormHelperText,LinearProgress,Box} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { color } from '@mui/system';
import { UploadImageSucces } from './UploadImageSucces';
import { useProductCategory } from '../../../stores/ProductCategoryStore';
import { useSaveImage } from '../../../utils/saveImage';
import { useClientStore } from '../../../stores/ClientStore';
export const ClientForm = () => {
  const {dataProductCategory,isLoading,fetchProductCategories} = useProductCategory()

  const [urlImage,setUrlImage] = useState(null)/*State para URL IMAGEN */
  const {isFormOpenClient, createClient, responseCreatingClient, setDataFile, dataFile,
    dataClientForm,setDataClientForm,setIsFromOpenClient} = useClientStore()
  const [canChangeButton,setCanChangeButton] = useState(false)/*State para cambiar botons de continue a save*/
  const [isInteractionDisabled, setIsInteractionDisabled] = useState(false)/*State para deshabilitar y habilitar inputs del formulario*/
  const [isDisableButtonSave,setIsDisableButtonSave] = useState(false)
  /*Hook para manipular el espacio para subir la imagen */

  const onDrop = useCallback(acceptedFiles => {
      setDataFile(acceptedFiles[0])
      const imageUrl = URL.createObjectURL(acceptedFiles[0]);
      setUrlImage(imageUrl)
      setValue("uploadImage",acceptedFiles)
    }, [])
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop,disabled:isInteractionDisabled})

  /*Logica del Formulario */
  const {register,handleSubmit,formState:{errors},setValue,reset} = useForm()
  const {dataImage,isLoadingImage,registerImage} = useSaveImage()

  const handleSubmitProductForm = async(data)=>{
    setDataClientForm(data)
    setCanChangeButton(true)
    setIsDisableButtonSave(true)
    setIsInteractionDisabled(true)
    await registerImage(dataFile)
    {dataImage && setIsDisableButtonSave(false)}
  }

  const handleSaveProductForm = (e)=>{
    console.log(dataClientForm);
    console.log(dataImage);
    
    
    const newClient = {
      clientName:dataClientForm?.clientName,
      clientUsername:dataClientForm?.clientUsername,
      clientEmail:dataClientForm?.clientEmail,
      clientPassword:dataClientForm?.clientPassword,
      clientPhone:dataClientForm?.clientPhone,
      clientAddress: dataClientForm?.clientAddress,
      uploadImage:dataImage?.secure_url
    }
    createClient(newClient)
    e.preventDefault()
  }
  
  console.log(responseCreatingClient);
  

  useEffect(()=>{
    register("uploadImage",{required:"Imagen requerida"})
    fetchProductCategories()
  },[])
  
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
              <TitleHeader>Add Clients</TitleHeader>
              <DescriptionHeader>Fill the following Information to move forward</DescriptionHeader>
            </ContainText>
          </Info>
          <Close>
            <Icon  onClick={setIsFromOpenClient} icon="si:close-fill" className='iconClose'/>
          </Close>
        </Header>
        <Form onSubmit={handleSubmit(handleSubmitProductForm)}>  
          <FullWidthInput>
            <TextField 
              disabled={isInteractionDisabled} 
              id="outlined-basic" 
              label="Name person" 
              variant="outlined"
              className='inputFullWidth'
              {...register("clientName", 
                {
                  required:"Este capo es obligatorio", 
                  maxLength:{value:100,message:"Max character 100"},
                  minLength:{value:5, message:"Min character 5"}
                })}
              error={!!errors?.clientName}
              helperText={errors.clientName?.message}
              />
          </FullWidthInput>
          <FullWidthInput>
            <TextField 
              disabled={isInteractionDisabled} 
              id="outlined-basic" 
              label="User name" 
              variant="outlined" 
              className='inputFullWidth' 
              {...register("clientUsername",
                {
                  required:"Este campo es obligatorio",
                  maxLength:{value:100,message:"Max character 100"},
                  minLength:{value:5, message:"Min character 5"}
                })}
              error={!!errors?.clientUsername}
              helperText={errors.clientUsername?.message}
              />
          </FullWidthInput>
          <FullWidthInput>
            <TextField 
              disabled={isInteractionDisabled} 
              id="outlined-basic" 
              label="Email" 
              variant="outlined" 
              className='inputFullWidth' 
              {...register("clientEmail",
                {required:"Este campo es obligatorio"}
              )}
              error={!!errors?.clientEmail}
              helperText={errors.clientEmail?.message}
              />
          </FullWidthInput>
          <FullWidthInput>
            <TextField 
              disabled={isInteractionDisabled} 
              id="outlined-basic" 
              label="Address" 
              variant="outlined" 
              className='inputFullWidth' 
              {...register("clientAddress",
                {required:"Este campo es obligatorio"}
              )}
              error={!!errors?.clientAddress}
              helperText={errors.clientAddress?.message}
              />
          </FullWidthInput>   
          <ContainerFormField>
            <FormField>
            <TextField 
              disabled={isInteractionDisabled} 
              id="outlined-basic" 
              type="password" 
              label="Password" 
              variant="outlined" 
              className='inputFullWidth' 
              {...register("clientPassword",
                {
                  required:"Este campo es obligatorio",
                  minLength:{value:8, message:"Min character 8"}
                }
              )}
              error={!!errors.clientPassword}
              helperText={errors.clientPassword?.message}
              />
            </FormField>
            <FormField>
              <FormControl fullWidth>
              <TextField 
                disabled={isInteractionDisabled} 
                id="outlined-basic" 
                type="number" 
                label="phone" 
                variant="outlined" 
                className='inputFullWidth' 
                {...register("clientPhone",
                  {
                    required:"Este campo es obligatorio",
                    minLength:{value:8, message:"Min characters 8"}
                  }
                )}
                error={!!errors.clientPhone}
                helperText={errors.clientPhone?.message}
                />
              </FormControl>
            </FormField>
          </ContainerFormField>
          <ContainUploadImage {...getRootProps({className: 'dropzone'})}>
            <input {...getInputProps()}/>
              {
                urlImage===null ? (
                  <>
                    <UploadImage errors={errors}/>
                  </>
                ):(
                    <UploadImageSucces dataFile={dataFile} imageURL={urlImage} isInteractionDisabled={isInteractionDisabled} isLoadingImage={isLoadingImage}/>
                  )
                            
              }
          </ContainUploadImage>
        {
          isLoadingImage && (<Box>
            <LinearProgress />
          </Box>)
        }
        
          <SectionButton>
            <ButtonForm disabled={isInteractionDisabled} className='cancel' >Cancel</ButtonForm>
            {!canChangeButton ? (<ButtonForm type="submit" className='confirm'>Confirm</ButtonForm>) : (<ButtonForm type='button' onClick={handleSaveProductForm} disabled={isDisableButtonSave} className='confirm'>Save Product</ButtonForm>)}
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
  &:disabled{
    background-color: #2e5a8f;
    color: #7a7a7a;
    cursor: auto;
  }
`