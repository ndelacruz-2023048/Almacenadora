import { Icon } from '@iconify/react/dist/iconify.js'
import React, { useCallback, useEffect, useState } from 'react'
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
import {Select,FormHelperText,LinearProgress,Box} from '@mui/material';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import dayjs from 'dayjs';
import { color } from '@mui/system';
import { UploadImageSucces } from './UploadImageSucces';
import { useProductCategory } from '../../../stores/ProductCategoryStore';
import { useSaveImage } from '../../../utils/saveImage';
import { useProviderStore } from '../../../stores/ProviderStore';
import { useQueryClient } from '@tanstack/react-query';
export const ProductForm = () => {
  const {listProductCategories,isLoading,fetchProductCategories} = useProductCategory()
  const {isFormOpen,isSameProduct,dataFile,dataProducts,isCreatingProduct,responseCreatingProduct,createProduct,setDataFile,setDataProducts,setIsFormOpen,fetchProductByName} = useProductStore()
  const {dataProvider,fetchProvider} = useProviderStore()
  const [urlImage,setUrlImage] = useState(null)/*State para URL IMAGEN */
  const [canChangeButton,setCanChangeButton] = useState(false)/*State para cambiar botons de continue a save*/
  const [isInteractionDisabled, setIsInteractionDisabled] = useState(false)/*State para deshabilitar botones e inputs cuando algo se este subiendo o guardando */
  const [isDisableButtonSave,setIsDisableButtonSave] = useState(false)
  /*Funcion para que al momento que el usuario suba una imagen se muestra dicha imagen*/
  const onDrop = useCallback(acceptedFiles => {
    setDataFile(acceptedFiles[0])
    const imageUrl = URL.createObjectURL(acceptedFiles[0]);
    setUrlImage(imageUrl)
    setValue("uploadImage",acceptedFiles)
  }, [])

  /*Hook para manipular el espacio para subir la imagen */
  const {getRootProps, getInputProps, isDragActive} = useDropzone({onDrop,disabled:isInteractionDisabled})
  const queryClient = useQueryClient();
  /*Logica del Formulario */
  const {register,handleSubmit,formState:{errors},setValue,reset} = useForm()
  const {dataImage,isLoadingImage,registerImage} = useSaveImage()
  const handleSubmitProductForm = async(data)=>{
    console.log(data);
    
    setDataProducts(data)
    setCanChangeButton(true)
    setIsInteractionDisabled(true)
    setIsDisableButtonSave(true)
    await registerImage(dataFile)
    {dataImage && setIsDisableButtonSave(false)}
  }
  
  const handleSaveProductForm = async()=>{
    console.log(dataProducts);
    console.log(dataImage);
    const newProductData = {
      productName:dataProducts?.productName,
      productDescription:dataProducts?.productDescription,
      uploadImage:dataImage?.secure_url,
      productStock:dataProducts?.productStock,
      productPrice:dataProducts?.productPrice,
      productDate: dayjs(dataProducts?.productDate).format('YYYY-MM-DDTHH:mm:ss'),
      productCategory:dataProducts?.productCategory,
      productProvider:dataProducts?.productProvider
    }    
    await createProduct(newProductData)
    reset()
    setIsFormOpen()
    queryClient.invalidateQueries({queryKey:['listProducts']})
  }

  console.log(responseCreatingProduct);
  console.log(isSameProduct);
  

  useEffect(()=>{
    register("uploadImage",{required:"Imagen requerida"})
    fetchProvider()
  },[])
  
  return (
    <Container>
      <section className='section'>
        <div className='section_headerForm'>
          <div className='detail'>
            <div className='detail_icon'>
              <div className='iconclose'>
                  <Icon icon="solar:file-check-bold" className='iconAdd'/>
              </div>
            </div>
            <div className='detail_information'>
              <TitleHeader>Add Product</TitleHeader>
              <DescriptionHeader>Fill the following Information to move forward</DescriptionHeader>
            </div>
          </div>
          <Close>
            <Icon onClick={setIsFormOpen} icon="si:close-fill" className='iconClose'/>
          </Close>
        </div>
        <form className='section_form' onSubmit={handleSubmit(handleSubmitProductForm)}>  
          <div className='containerfullwidth'>
            <TextField  
              id="outlined-basic" 
              label="Name" 
              variant="outlined" 
              disabled={isInteractionDisabled}
              {...register("productName",{minLength:{value:2,message:"Mix Length 2 Characters"},required:"Este campo es obligatorio",validate:async(value)=>{
                const {dataJSON} = await fetchProductByName(value)
                if(dataJSON.message.length>0){
                  return "El producto es duplicado"
                }
                return true
              }})} 
              className='inputFullWidth' 
              error={!!errors.productName} 
              helperText={errors.productName?.message}/>
          </div>   
          <div className='containerformsfield'>
            <div className='containerformsfield_field'>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" error={!!errors.productCategory} helperText={errors.productCategory?.message} >Categoria</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Proveedor"
                  className='inputFullWidth'
                  {...register("productCategory",{required:"Este campo es obligatorio"})}
                  error={!!errors.productCategory}
                  disabled={isInteractionDisabled}
                > 
                {
                  listProductCategories?.categories?.map((e)=>(
                    <MenuItem value={e?._id}>{e?.nameCategory}</MenuItem>
                  ))
                }
                </Select> 
                {!!errors.productCategory && (
                  <FormHelperText sx={{ color: 'red' }}>{errors.productCategory.message}</FormHelperText>
                )}
              </FormControl>
            </div>
            <div className='containerformsfield_field'>
              <TextField disabled={isInteractionDisabled} id="outlined-basic" type="number" label="Stock" variant="outlined" {...register("productStock",{required:"Este campo es obligatorio"})} className='inputFullWidth' error={!!errors.productStock} helperText={errors.productStock?.message}/>
            </div>
            <div className='containerformsfield_field'>
            <TextField inputProps={{ step: "any" }} disabled={isInteractionDisabled} id="outlined-basic" type="number" label="Price" variant="outlined" {...register("productPrice",{required:"Este campo es obligatorio"})} className='inputFullWidth' error={!!errors.productStock} helperText={errors.productStock?.message}/>
            </div>
            <div className='containerformsfield_field'>
              <DatePicker value={dayjs()}  disabled className='inputFullWidth' {...register("pruductDate",{valueAsDate:true})} />
            </div>
          </div> 
          <div className='containerfullwidth'>
            <TextField disabled={isInteractionDisabled} id="outlined-basic" label="Descripcion" variant="outlined" {...register("productDescription",{maxLength:{value:20,message:"Max 20 Characteres"},minLength:{value:10,message:"Min 10 Characters"},required:"Este campo es obligatorio"})} className='inputFullWidth' error={!!errors.productDescription} helperText={errors.productDescription?.message}/>
          </div> 
          <div className='containerfullwidth'>
          <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label" error={!!errors.productProvider} helperText={errors.productProvider?.message}>Proveedor</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  label="Proveedor"
                  className='inputFullWidth'
                  {...register("productProvider",{required:"Este campo es obligatorio"})}
                  error={!!errors.productProvider}
                  disabled={isInteractionDisabled}
                >
                {
                  dataProvider?.providers?.map((e)=>(
                    <MenuItem value={e._id}>{e.name}</MenuItem>
                  ))
                }
                </Select> 
                {
                  !!errors.productProvider && (<FormHelperText sx={{color:"red"}}>{errors.productProvider.message}</FormHelperText>)
                }
              </FormControl>
          </div> 
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
        
          <div className='buttonsactions'>
            <button disabled={isInteractionDisabled} className='buttonsactions__button cancel' onClick={setIsFormOpen}>Cancel</button>
            {!canChangeButton ? (<button type="submit" className='buttonsactions__button confirm'>Confirm</button>) :
            (<button type='button' onClick={handleSaveProductForm} disabled={isDisableButtonSave} className='buttonsactions__button confirm'>Save Product</button>)}
          </div>
        </form>
      </section>
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
  .section{
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

    .section_headerForm{
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 4px;
      width: 90%;
      height: 13%;
      .detail{
        display: flex;
        gap: 8px;

        .detail_information{
          display: flex;
          flex-direction: column;
          gap: 2px;
        }
        
        .iconclose{
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
        }
      }
    }

    .section_form{
      display: flex;
      flex-direction: column;
      width: 90%;
      gap: 8px;
      height: 87%;
      .containerfullwidth{
        width: 100%;
      }

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

      .containerformsfield{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        width: 100%;
        gap: 10px;
        .containerformsfield_field{
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
        }
      }

      .buttonsactions{
        display: flex;
        justify-content: end;
        align-items: end;
        gap: 10px;
        width: 100%;
        height: 22%;
        margin-bottom: 8px;
        .buttonsactions__button{
          padding: 10px 15px;
          border-radius: 10px;
          font-size: 16px;
          cursor: pointer;
          &:disabled{
            background-color: #2e5a8f;
            color: #7a7a7a;
            cursor: auto;
          }
        }
        .cancel{
          background-color: #deecff;
          color: #4096ff;
        }
        
        .confirm{
          background-color:#4096ff;
          color: white;
        }
      }
    }
  }
`


const Close = styled.div`
  align-self: start;
  .iconClose{
    color: #918e8e;
    font-size: 
    45px;
  }
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

const ContainUploadImage = styled.div`
  height: 30%;
  width: 100%;
  border: 1px dashed #65dbff;
`
