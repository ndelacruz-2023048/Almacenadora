import styled from 'styled-components'
import { Header } from '../components/organismos/Header'
import { Sidebar } from '../components/organismos/Sidebar/Sidebar'
import { useEffect } from 'react'
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export const Layout = ({children}) => {
    useEffect(()=>{
        const sectionLinkSpan = document.querySelector('.sectionLink');
        const styles = window.getComputedStyle(sectionLinkSpan, '::before');
        const rect = sectionLinkSpan.getBoundingClientRect();
        const right = parseFloat(styles.right);
        const beforeY = rect.right + right;
    
        window.addEventListener('resize', () => {
            console.log('beforeY estimado:', beforeY);
        });
        
  },[])
  
  

  return (
    <Container>
        <Section1>
            <Sidebar />
        </Section1>
        <Section2>
            <ContainerSection2>
                <Header/>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <Main>
                        {children}
                    </Main>
                </LocalizationProvider>
                
            </ContainerSection2>
        </Section2>
    </Container>
  )
}

const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100vh;
`

const Section1 = styled.div`
    background-color: #28364b;
    width: 8%;
`
const Section2 = styled.div`
    display: flex;
    justify-content: end;
    background-color: #eeeff0;
    width: 92%;
    
`
const ContainerSection2 = styled.div`
    width: 97%;
    margin: 0 auto;
`

const Main = styled.div`
    height: 92%;
`