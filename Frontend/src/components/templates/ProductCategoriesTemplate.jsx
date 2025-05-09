import React from 'react'
import styled from 'styled-components'
import { CiGrid41 } from "react-icons/ci";
import { Card } from '../organismos/Card/Card'
import { FiMenu } from "react-icons/fi";
import { GrAdd } from "react-icons/gr";
import { ButtonAdd } from '../atomos/ButtonAdd';
import { useProductCategory } from '../../stores/ProductCategoryStore';
import { ProductCategoryForm } from '../organismos/Forms/ProductCategoryForm'
import { CardProductCategory } from '../organismos/Card/CardProductCategory';
import { useEffect } from 'react';

// o la ruta que uses

export const ProductCategoriesTemplate = () => {
  const {isProductCategoryFormActive,setIsProductCategoryFormActive,isLoading,listProductCategories,fetchProductCategories} = useProductCategory()
    console.log();
    
  return (
    <Container>
      {isProductCategoryFormActive && <ProductCategoryForm/>}
      <Line/>
      <Section1>
        <Title>
          <Header>All Products Categories (5.5k)</Header>
        </Title>
        <IconsContainer>
            <CiGrid41  className='iconHeader'/>
            <FiMenu className='iconHeader'/>
            <ButtonAdd setState={setIsProductCategoryFormActive} btnBackgroundColor="#5042cb" iconName="ic:round-add" btnText="Add New" iconSize={'27px'}  btnWidth="22%"/>
        </IconsContainer>
      </Section1>

      <Section2>
        <ContainerCard>
          {
            listProductCategories?.categories?.map((e)=>(
              <CardProductCategory nameCategory={e.nameCategory} descriptionCategory={e.descriptionCategory} image={e.image}/>
            ))
          }
        </ContainerCard>
      </Section2>
    </Container>
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

const Section1 = styled.div`
  display: flex;
  align-items: center;
  background-color: transparent;
  height: 10%;
  width: 100%;
`

const Title = styled.div`
display: flex;
  width: 50%;
`
const IconsContainer = styled.div`
    display: flex;
    gap: 10px;
    justify-content: end;
    width: 50%;
    border-radius: 15px;
    align-items: center;
    .iconHeader{
        font-size: 30px;
        margin-left: 10px;
        color: #3636d3;
    }
`


const Section2 = styled.div`
  display: flex;
  background-color: #fff;
  height: 86%;
  border: 1px solid #969595;
  border-radius: 20px;
`

const ContainerCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  height: 90%;
  width: 98%;
  margin: auto;

  overflow-y: scroll;
`
const Header = styled.div`
  font-size: 25px;
  font-weight: bold;
`


const Line = styled.div`
  height: 1px;
  background-color: #c8c8c8;
`
