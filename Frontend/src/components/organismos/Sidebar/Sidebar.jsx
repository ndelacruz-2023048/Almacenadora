import React from 'react'
import styled from 'styled-components'
import { LinksArray } from '../../../utils/dataEstatica'
import { NavLink } from 'react-router'
import { Icon } from '@iconify/react/dist/iconify.js'

export const Sidebar = ({handleResize}) => {
    
  
//   const sectionLink = window.getComputedStyle()

  return (
    <Container>
        <Section1>Section1</Section1>
        <Section2 className='section2'>
            {
                LinksArray.map(({icon,to})=>(
                    <ContainIcon>
                        <NavLink to={to} className={({isActive})=>`Links${isActive?' active':''}`}>
                            <span className='sectionLink'>
                                <Icon icon={icon} className='LinkIcon'/>
                            </span>
                        </NavLink>
                    </ContainIcon>
                ))
            }
        </Section2>
        <Section3>Section3</Section3>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
`

const Section1 = styled.div`
    /* background-color: red; */
    height: 15%;

`

const Section2 = styled.div`
    height: 75%;
`

const Section3 = styled.div`
    height: 10%;
`

const ContainIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 12%;
    .Links{
        position: relative;
        .LinkIcon{
            color: white;
            font-size: 34px;
            position: relative;
            &::before{
                    content: '';
                    position: absolute;
                    width: 40px;
                    height: 100%;
                    right: -97px;
                    background-color: red;
                }
        }
        &.active{
            background-color: #eeeff0;
            width: 70%;
            border-top-left-radius: 40px; 
            border-bottom-left-radius: 40px; 
            &::before{
                content: '';
                position: absolute;
                width: 40px;
                height: 100%;
                right: -27px;
                background-color: #eeeff0;
            }
            .sectionLink{
                position: relative;
                /* &::before{
                    content: '';
                    position: absolute;
                    width: 30px;
                    height: 30px;
                    right: -41px;
                    top: -30px;
                    background-color: #28364b;
                    border-bottom-right-radius: 39px;
                    border-right: 8px solid #eeeff0;
                    border-bottom: 18px solid #eeeff0;
                }
                &::after{
                    content: '';
                    position: absolute;
                    width: 30px;
                    height: 30px;
                    right: -41px;
                    bottom: -30px;
                    background-color: #28364b;
                    border-top-right-radius: 39px;
                    border-right: 8px solid #eeeff0;
                    border-top: 18px solid #eeeff0;
                } */
            }
            .LinkIcon{
                color: #28364b;
                display: flex;
                align-items: center;
                padding: 15px 0;
                width: 100%;
                position: relative;
                
            }

        }
    }
    
`

