import React from 'react'
import styled from 'styled-components'
import { useProductStore } from '../../../stores/ProductStore'
import { NavLink } from 'react-router'
import { useEntryProductRegister } from '../../../stores/EntryProductRegisterStore'

export const ModalProductOptions = ({setFormProductOpen,setFormOutputProductOpen}) => {
    const {isFormOpen,isListOptionsOpen,setIsFormOpen,setIsListOptionsOpen} = useProductStore()
    const {isEntryProductFormOpen, setIsEntryProductFormOpen} = useEntryProductRegister()
    

  const handleClickRegisterNewProduct = ()=>{
    setIsFormOpen()
    setIsListOptionsOpen()
  }

  const handleClickRegisterNewEntry = ()=>{
    setIsEntryProductFormOpen()
    setIsListOptionsOpen()
  }

  return (
    <Container className={isListOptionsOpen?"active":""} >
        <section className='productoptions'>
            <p className='productoptions_title'>Products Options</p>
            <div className='options'>
                <a className='options_1' onClick={handleClickRegisterNewProduct}>
                    <span >Register New Product</span>
                </a>
                <a className='options_1' onClick={handleClickRegisterNewEntry}>
                    <span >Register New Entry</span>
                </a>
                <a className='options_1 options_1--border'>
                    <span >Register New Output</span>
                </a>
            </div>
        </section>
    </Container>
  )
}

const Container = styled.div`
    position: absolute;
    top: 109%;
    right: 1%;
    height: 0px;
    width: 250px;
    background-color: #f9f9f9;
    transition: all 0.2s ease-in-out;
    opacity: 0;
    display: flex;
    align-items: center;
    border: 2px solid #e7e7e7;
    border-radius: 20px;
    &.active{
        height: 180px;
        width: 250px;
        opacity: 1;
    }

    .productoptions{
        display: flex;
        flex-direction: column;
        gap:8px;
        width: 90%;
        height: 87%;
        margin: auto;
        &_title{
            font-weight: 700;
            margin-left: 15px;
        }
    }

    .options{
        display: flex;
        flex-direction: column;
        padding: 0 15px;
        background-color: white;
        border-radius: 20px;
        .options_1{
            padding: 10px 0;
            border-bottom: 1px solid #d8d7d7;
            text-decoration: none;
            color: #000;
            cursor: pointer;
        }
        .options_1--border{
            border-bottom: none;
        }
    }
`