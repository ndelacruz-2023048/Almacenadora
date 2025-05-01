import { Icon } from '@iconify/react/dist/iconify.js'
import React from 'react'
import styled from 'styled-components'

export const ActionsTable = () => {
  return (
    <Container>
        <div className='containicon'>
            <Icon icon="basil:edit-alt-outline" className='icon'/>
        </div>
        <div className='containicon'>
            <Icon icon="fluent:delete-32-regular" className='icon'/>
        </div>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    gap: 10px;
    .containicon{
        border: 1px solid #dadada;
        padding: 5px 5px 0 5px;
        border-radius: 8px;
        .icon{
            font-size: 22px;
        }
    }
`