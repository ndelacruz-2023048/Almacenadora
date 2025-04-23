import styled from "styled-components"
import { Check } from "../atomos/Check";
import { useState } from "react";
import { PurpleTag } from "../atomos/Tag";

export const Table = ()=> {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };
    return(
        <TableContainer>
            <Head>
                <Row>
                    <THead>Company</THead>
                    <THead>Status</THead>
                    <THead>About</THead>
                </Row>
            </Head>
            <Body>
                    <Row >
                        <TBody>
                            <Check
                                label={'Catalog'}
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                        </TBody>
                        <TBody>
                            <PurpleTag>Customer</PurpleTag>
                        </TBody>
                    </Row>
            </Body>
        </TableContainer>
    )
}

const TableContainer = styled.table`
    width: 100%;
    border-collapse: collapse;
    margin: 20px 0;
    font-size: 16px;
    text-align: left;
`

const Head = styled.thead`

`

const THead = styled.th`
    background-color: #f9fbfc;
    color: #7e7f8f;
    padding: 12px 15px;
    border-bottom: 2px solid #f2f2f2;
`

const Body = styled.tbody`
    background-color: #fff;
`

const TBody = styled.td`
    color: ${({theme})=>theme.color};
    padding: 12px 15px;
    border-bottom: 2px solid #f2f2f2;
    
`

const Row = styled.tr`
    &:nth-child(odd) {
        background-color: white; // Azul claro para celdas impares
    }
    &:nth-child(even) {
        background-color: #f9fbfc; // Azul oscuro para celdas pares
    }
    &:hover{
        background-color: #cecece;
    }
`

const ButtonTable = styled.button`
    border: none;
    background-color: transparent;
    cursor: pointer;
    .IconAccion{
        width: 30px;
        height: 30px;
        color: black
    }
`