import React, { useEffect } from 'react'
import styled from 'styled-components'
import photoProfile from '../../../assets/photoProfile.avif'
import {Icon} from '@iconify/react'
import { CiMail } from "react-icons/ci";
import { CiStar } from "react-icons/ci";
import { GrFormNext } from "react-icons/gr";
import { CiDiscount1 } from "react-icons/ci";

export const Card = ({name, user, email, phone}) => { 
  return (
    <Container>

      <PartUp>
        <Image src={photoProfile}/>
        <NamePerson>{name}</NamePerson>
        <Position>{user}</Position>
      </PartUp>

      <Line />

      <PartDown>
        <Contact><CiMail className='iconDown'/>{email}</Contact>
        <Contact><Icon icon="mdi-light:phone" className='phoneIcon'/>{phone}</Contact>
        <Links><CiStar className='iconDown'/>Reviews<GrFormNext /></Links>
        <Links><CiDiscount1 className='iconDown'/>Sales<GrFormNext /></Links>
      </PartDown>

    </Container>
  )
}

const Container = styled.div`
  height: 230px;
  width: 30%;
  background-color: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  margin-left: 20px;
  margin-top: 10px;
`
const PartUp = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`
const PartDown = styled.div`
  padding: 10px;
  flex-direction: column;
  align-items: flex-start;
  display: flex;
`

const Image = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
  border-radius: 50%;
  border: 1.5px solid #28364b;
  margin-left: 10px;
  margin-top: 5px
`
const NamePerson = styled.span`
  font-size: 16px;
  color: #000000;
  font-weight: bold;
  text-align: left;
  margin-left: 10px;
  margin-top: -25px
`

const Position = styled.span`
  font-size: 14px;
  color: #8b8686;
  margin-left: 10px;
  margin-top: 5px;
  font-style: italic;
  margin-bottom: 5px;
  line-height: 1.2;
  margin-top: 20px;
  margin-left: -70px;
`
const Line = styled.div`
  height: 1px;
  background-color: #cfc4c4b6;

`
const Contact = styled.p` 
  font-size: 15px; 
  color: #8b8686; 
  margin-top: 5px;
  margin-bottom: 5px;
  line-height: 1.5;
  margin-bottom: 10px;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  .iconDown{
    font-size: 20px;
    color: #8b8686;
    margin: 0 10px;
  }
  .phoneIcon{
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-left: 10px;  
  }
`

const Links = styled.button`
  font-size: 15px; 
  color: #8b8686; 
  margin-top: 5px;
  margin-bottom: 5px;
  line-height: 1.5;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #ffffff;
    transform: scale(1.1);
    transition: background-color 0.3s, transform 0.3s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  .iconDown{
    font-size: 20px;
    color: #8b8686;
    margin: 0 10px;
  }
`
