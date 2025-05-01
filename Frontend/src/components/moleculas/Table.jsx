import styled from "styled-components"
import { Check } from "../atomos/Check";
import { useState } from "react";
import { PurpleTag } from "../atomos/Tag";
import photoProfile from '../../assets/photoProfile.avif'
import { Icon } from "@iconify/react/dist/iconify.js";
import { useProductStore } from "../../stores/ProductStore";
import { StatusProduct } from "../atomos/StatusProduct";
import { ActionsTable } from "./ActionsTable";

export const Table = ()=> {
    const {listProducts}= useProductStore()
    const {message} = listProducts;
    
    const [isChecked, setIsChecked] = useState({});

    const handleCheckboxChange = (name) => {
        setIsChecked((prev) => ({
          ...prev,
          [name]: !prev[name],
        }));
      };
    return(
        <TableContainer>
            <Head>
                <Row>
                    <THead>
                        <THeadContent>
                            <Icon icon="solar:minus-square-line-duotone" className="Company"/> 
                            Product 
                            <Icon icon="solar:arrow-down-line-duotone"/>
                        </THeadContent>
                    </THead>
                    <THead>Status</THead>
                    <THead>Description</THead>
                    <THead>Date Register</THead>
                    <THead>Provider</THead>
                    <THead>Actions</THead>
                </Row>
            </Head>
            <Body>
                {message.map((products)=>(
                    <Row key={products.name}>
                        <TBody>
                            <Check
                                logo={<Image src={products.uploadImage}/>}
                                label={`${products.productName}\n${products.productCategory}`}
                                checked={isChecked[products.name] || false}
                                onChange={() => handleCheckboxChange(products.name)}
                            />
                        </TBody>
                        <TBody>
                            <StatusProduct stock={products.productStock}>{products.productStock}</StatusProduct>
                        </TBody>
                        <TBody>
                            <PurpleTag>{products.productDescription}</PurpleTag>
                        </TBody>
                        <TBody>
                            <PurpleTag>{products.productDate}</PurpleTag>
                        </TBody>
                        <TBody>
                            <PurpleTag>{products.productProvider}</PurpleTag>
                        </TBody>
                        <TBody>
                            <ActionsTable/>
                        </TBody>
                    </Row>
                ))}
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

const THeadContent = styled.div`
    display: flex;
    align-items: center;
    .Company{
        margin: 0 1px;
        color: #000000;
        font-size: 30px;
        cursor: pointer;
    }
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
        background-color: white;
    }
    &:nth-child(even) {
        background-color: #f9fbfc; 
    }
    &:hover{
        background-color: #cecece;
    }
`

const Image = styled.img`
    width: 35px;
    height: 35px;
    object-fit: cover;
    border-radius: 50%;
    border: none;
`

const AboutLine = styled.div`
    font-weight: ${({ isBold }) => (isBold ? "bold" : "normal")};
    font-size: ${({ isBold }) => (isBold ? "14px" : "12px")};
    color: #333;
`;