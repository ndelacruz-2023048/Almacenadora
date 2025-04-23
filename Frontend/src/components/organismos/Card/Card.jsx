import React from 'react'
import styled from 'styled-components'
import photoProfile from '../../../assets/photoProfile.avif'
import { CiMail } from "react-icons/ci";
import { FiPhone } from "react-icons/fi";
import { CiStar } from "react-icons/ci";
import { GrFormNext } from "react-icons/gr";
import { CiDiscount1 } from "react-icons/ci";

export const Card = () => {
  return (
    <Container>
      <PartUp>
        <Image src={photoProfile}/>
        <NamePerson>John Doe</NamePerson>
        <Position>Software Engineer</Position>
      </PartUp>
      <Line />
      <PartDown>
        <Contact><CiMail className='iconDown'/>john.doe@example.com</Contact>
        <Contact><FiPhone  className='iconDown'/>john.doe@example.com</Contact>
        <Links><CiStar className='iconDown'/>Reviews<GrFormNext /></Links>
        <Links><CiDiscount1 className='iconDown'/>Sale<GrFormNext /></Links>
      </PartDown>
    </Container>
  )
}

const Container = styled.div`
  height: 230px;
  width: 30%;
  background-color: #849eb4;
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
  color: #ffffff;
  font-weight: bold;
  text-shadow: 1px 1px 2px #000000;
  text-align: left;
  margin-left: 10px;
  margin-top: -25px
`

const Position = styled.span`
  font-size: 14px;
  color: #ffffff;
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
  background-color: #000000;
`
const Contact = styled.p` 
  font-size: 15px; 
  color: #ffffff; 
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
    color: #ffffff;
    margin: 0 10px;
  }
`

const Links = styled.p`
  font-size: 15px; 
  color: #ffffff; 
  margin-top: 5px;
  margin-bottom: 5px;
  line-height: 1.5;
  margin-bottom: 10px;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  &:hover {
    background-color: #8ab1f0;
    transform: scale(1.1);
    transition: background-color 0.3s, transform 0.3s;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  }
  
  .iconDown{
    font-size: 20px;
    color: #ffffff;
    margin: 0 10px;
  }
`