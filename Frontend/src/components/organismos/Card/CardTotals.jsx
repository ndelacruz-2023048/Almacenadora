import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import styled from 'styled-components'
import {NavLink} from 'react-router'
export const CardTotals = ({icon,count,title,path}) => {
  return (
    <Container>
        <div className='container_sections'>
          <section className='cardsection1'>
              <Icon icon={icon} className='icon'/>
              <div className='description'>
                <p className='description_count'>{count}</p>
                <span className='description_title'>{title}</span>
              </div>
          </section>
          <section className='cardsection2'>
              <NavLink className="navlink" to={path}>
                <p>View details</p>
                <Icon icon="si:arrow-right-duotone" className='navlink_icon'/>
              </NavLink>
          </section>
        </div>
    </Container>
  )
}

const Container = styled.div`
    display:flex;
    height: 90%;
    width: 32%;
    background-color: #ffffff;
    border-radius: 20px;
    .container_sections{
      display:flex;
      flex-direction: column;
      margin: auto;
      height: 88%;
      width: 88%;
    }
    .cardsection1{
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 10px;
      width: 100%;
      height: 70%;
      border-bottom: 1px solid #b8b8b8;
      .icon{
        font-size: 70px;
      }
    }

    .description{
      &_count{
       font-size:20px;
       font-weight: 600;
      }
      &_title{
        font-weight: 400;
        font-size: 15px;
        color: #a7a7a7;
      }
    }
    .cardsection2{
      height: 30%;
      .navlink{
        display: flex;
        justify-content: space-between;
        align-items: center;
        text-decoration: none;
        color: #868686;
        &_icon{
          font-size: 25px;
        }
      }
    }
`
