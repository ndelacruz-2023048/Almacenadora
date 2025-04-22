import React from 'react'
import styled from 'styled-components'
import {Icon} from '@iconify/react'
import photoProfile from '../../assets/photoProfile.avif'
export const Header = () => {
  return (
    <Container>
        <Section1>
            <Title>Good Morning, John</Title>
        </Section1>
        <Section2>
            <Search>
                <InputSearch type='text' placeholder='Buscar'/>
                <Icon icon="bitcoin-icons:search-outline" className='lupa'/>
            </Search>
            <Notification>
                <Icon icon="ion:notifications-outline" className='notification'/>
            </Notification>
            <Profile>
                <Image src={photoProfile}/>
                <Icon icon="stash:chevron-down-light" className='arrow'/>
            </Profile>
        </Section2>
    </Container>
  )
}
const Container = styled.div`
    display: flex;
    width: 100%;
    height: 70px;
`

const Section1 = styled.div`
display: flex;
align-items: center;
    width: 50%;
`

const Title = styled.div`
    font-weight: 700;
    font-size: 33px;
    color: #28364b;
`

const Section2 = styled.div`
    display: flex;
    align-items: center;
    justify-content: end;
    width: 50%;
`

const NavTop = styled.div`
    
`

const Search = styled.div`
    display: flex;
    align-items: center;
    width: 28%;
    position: relative;
    .lupa{
        position: absolute;
        left: 10px;
        top: 5px;
        font-size: 30px;
        color: #28364b;
    }
`

const InputSearch = styled.input`
    width: 100%;
    border: none;
    outline: none;
    border: 1px solid #d8d5d5;
    border-radius: 20px;
    padding: 12px 0;
    padding-left: 40px;
`
const Notification = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 7%;
    .notification{
        font-size: 28px;
        color: #28364b;
    }
`

const Profile = styled.div`
    display: flex;
    align-items: center;
    .arrow{
        font-size: 32px;
    }
`

const Image = styled.img`
    width: 40px;
    height: 40px;
    object-fit: cover;
    border-radius: 50%;
    border: 1.5px solid #28364b;
`

