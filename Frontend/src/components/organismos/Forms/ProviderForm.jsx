import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useCallback, useEffect, useState } from 'react'
import styled from 'styled-components'
import { NavLink } from 'react-router';
import {useDropzone} from 'react-dropzone'
import { UploadImage } from './UploadImage';
import { Device } from '../../../style/Breakpoints';
import {Controller, useForm} from 'react-hook-form'
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {Select,FormHelperText,LinearProgress,Box} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { color } from '@mui/system';
import { UploadImageSucces } from './UploadImageSucces';
import { useSaveImage } from '../../../utils/saveImage';
import { useProviderStore } from '../../../stores/ProviderStore';
import { heIL } from '@mui/x-date-pickers/locales';
export const ProviderForm = () => {
  const {isProviderFormOpen,responseCreatingProvider, setIsFormOpen, fetchProviderByName, dataFile, setDataFile,
         setDataProviders ,dataProvider, fetchProvider, dataProviders, createProvider} = useProviderStore()

  const [urlImage,setUrlImage] = useState(null)/*State para URL IMAGEN */
  const [canChangeButton,setCanChangeButton] = useState(false)/*State para cambiar botons de continue a save*/
  const [isInteractionDisabled, setIsInteractionDisabled] = useState(false)/*State para deshabilitar y habilitar inputs del formulario*/
  const [isDisableButtonSave,setIsDisableButtonSave] = useState(false)

  const onDrop = useCallback(acceptedFiles => {
    setDataFile(acceptedFiles[0])
    const imageUrl = URL.createObjectURL(acceptedFiles[0]);
    setUrlImage(imageUrl)
    setValue("uploadImage",acceptedFiles)
  }, [])
  /*Hook para manipular el espacio para subir la imagen */
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop,disabled:isInteractionDisabled})

  /*Logica del Formulario */
  const {register,handleSubmit,formState:{errors},setValue,reset} = useForm()
  const {dataImage,isLoadingImage,registerImage} = useSaveImage()
  const handleSubmitProductForm = async(data)=>{
    setDataProviders(data)
    setCanChangeButton(true)
    setIsDisableButtonSave(true)
    setIsInteractionDisabled(true)
    await registerImage(dataFile)
    {dataImage && setIsDisableButtonSave(false)}
  }

  const handleSaveProductForm = (e)=>{
    console.log(dataFile);
    console.log(dataProviders);
    const newProvider = {
      name: dataProviders?.providerName,
      departament: dataProviders?.departament,
      email: dataProviders?.email,
      phone: dataProviders?.codePhone,
      date: dayjs(dataProviders?.date).format('YYYY-MM-DDTHH:mm:ss'),
      address: dataProviders?.address,
      description: dataProviders?.description,
      image: dataImage?.secure_url
    }
    console.log(newProvider);
    
    createProvider(newProvider)
  }
  console.log(responseCreatingProvider);
  

  useEffect(()=>{
    register("uploadImage",{required:"Imagen requerida"})
    fetchProvider()
  },[])
  
  return (
    <Container>
      <Section>
        <Header>
          <Info>
            <ContainAddIcon>
              <SectionAddAction>
                  <Icon  icon="solar:file-check-bold" className='iconAdd'/>
              </SectionAddAction>
            </ContainAddIcon>
            <ContainText>
              <TitleHeader>Add Provider</TitleHeader>
              <DescriptionHeader>Fill the following Information to move forward</DescriptionHeader>
            </ContainText>
          </Info>
          <Close>
            <Icon onClick={setIsFormOpen} icon="si:close-fill" className='iconClose'/>
          </Close>
        </Header>
        <Form onSubmit={handleSubmit(handleSubmitProductForm)}>  
          <FullWidthInput>
            <TextField disabled={isInteractionDisabled} id="outlined-basic" label="Name" variant="outlined" className='inputFullWidth' 
            {...register("providerName",{required: "Este campo es obligatorio, ",minLength:{value:3,message:"Minimo 3 caracteres", },maxLength:{value:50,message:"Maximo 50 caracteres" },
              validate: async (value) => {
                const {dataJson} = await fetchProviderByName(value)
                if (dataJson.message.length > 0) {
                  return "Este proveedor ya existe";
                } else {
                  return true;
                }
              }
            })}            
            error={!!errors?.providerName}
            helperText={errors?.providerName?.message}
          />
          </FullWidthInput>   
          <ContainerFormField>
            <FormField>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" >Departament</InputLabel>
                
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Proveedor"
                  className='inputFullWidth'
                  disabled={isInteractionDisabled}
                  {...register("departament" ,{required: "Este campo es obligatorio "})}

                > 
                  <MenuItem value={'Software'}>Software</MenuItem>
                  <MenuItem value={'TI'}>TI</MenuItem>
                  <MenuItem value={'Technical support for users'}>Technical support for users</MenuItem>
                  <MenuItem value={'Information security'}>Information security</MenuItem>
                  <MenuItem value={'Network'}>Network</MenuItem>
                  <MenuItem value={'Hardware'}>Hardware</MenuItem>
                  <MenuItem value={'Software development'}>Software development</MenuItem>
                  <MenuItem value={'Data analysis'}>Data analysis</MenuItem>
                  <MenuItem value={'Data science'}>Data science</MenuItem>
                {
                  dataProvider?.clients?.map((e)=>(
                    <MenuItem value={e._id}>{e.nameCategory}</MenuItem>
                    
                  ))
                }
                </Select >
                {!!errors.departament && (<FormHelperText sx={{color: 'red'}}>{errors.departament.message}</FormHelperText>)} 
                
              </FormControl>
            </FormField>
            <FormField>
              <TextField disabled={isInteractionDisabled} id="outlined-basic" type="String" label="Email" variant="outlined" className='inputFullWidth'
                {...register("email",{required: "Este campo es obligatorio ",pattern:{value:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,message:"Email no valido"}})}
                error={!!errors?.email}
                helperText={errors?.email?.message}
              />
            </FormField>
            <FormField>
              <FormControl fullWidth>
                  <FormPhone fullWidth>
                  <InputLabel id="demo-simple-select-label">Code Phone</InputLabel>
                  
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Proveedor"
                    className='inputFullWidth'
                    disabled={isInteractionDisabled}
                    {...register("codePhone" ,{required: "Este campo es obligatorio "})}
                  > 
                    <MenuItem value={10}>+1 (555)</MenuItem>
                    <MenuItem value={20}>+502</MenuItem>
                    <MenuItem value={30}>+501</MenuItem>
                    <MenuItem value={40}>+512</MenuItem>
                    <MenuItem value={50}>+513</MenuItem>
                  {
                    dataProvider?.clients?.map((e)=>(
                      <MenuItem value={e._id}>{e.nameCategory}</MenuItem>
                    ))
                  }
                  </Select> 
                  <TextFieldPhone disabled={isInteractionDisabled} id="outlined-basic" type="number" label="Phone" variant="outlined" className='inputFullWidth'
                    {...register("codePhone",{required: "Este campo es obligatorio "})}
                    error={!!errors?.codePhone}
                    helperText={errors?.codePhone?.message}
                  />
                </FormPhone>
                {!!errors.codePhone && (<FormHelperText sx={{color: 'red'}}>{errors.codePhone.message}</FormHelperText>)}
              </FormControl>
            </FormField>
            <FormField >
              <DatePicker   value={dayjs()}   disabled className='inputFullWidth' />  
            </FormField>
          </ContainerFormField> 
          
          <FullWidthInput>
                <TextField disabled={isInteractionDisabled} id="outlined-basic" label="Address" variant="outlined" className='inputFullWidth'
                {...register("address",{required: "Este campo es obligatorio ",minLength:{value:3,message:"Minimo 3 caracteres", },maxLength:{value:50,message:"Maximo 50 caracteres"}})}
                error={!!errors?.address} 
                helperText={errors?.address?.message}
              />
          </FullWidthInput>
          <FullWidthInput>
            <TextField disabled={isInteractionDisabled} id="outlined-basic" label="Descripcion" variant="outlined" className='inputFullWidth'
            {...register("description",{required: "Este campo es obligatorio ",minLength:{value:3,message:"Minimo 3 caracteres", },maxLength:{value:50,message:"Maximo 50 caracteres"}})}
            error={!!errors?.description}
            helperText={errors?.description?.message}
            />
          </FullWidthInput> 
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
            {!canChangeButton ? (<ButtonForm type="submit" className='confirm'>Confirm</ButtonForm>) : 
            (<ButtonForm type='button' onClick={handleSaveProductForm} disabled={isDisableButtonSave} 
            className='confirm'>Save Product</ButtonForm>)}
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
  height: 90%;
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
  cursor: pointer;
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

const TextFieldPhone = styled(TextField)`
  && {
    .MuiOutlinedInput-root {
      border-radius: 20px;
      width: 100%;
    }
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
const FormPhone = styled.div`
  display: flex;
  gap: 10px;
  width: 100%;
  @media ${Device.mobileL}{
    width: 100%;
  }
  @media ${Device.laptop}{
    width: 100%;
  }
  @media ${Device.desktop}{
    width: 100%;
  }
`
