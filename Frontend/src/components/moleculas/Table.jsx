import styled from "styled-components"
import { Check } from "../atomos/Check";
import { useState } from "react";
import { PurpleTag } from "../atomos/Tag";
import photoProfile from '../../assets/photoProfile.avif'
import { Icon } from "@iconify/react/dist/iconify.js";

export const Table = ()=> {

    const companies = [
        { name: "Catalog", domain: "catalogapp.io", status: "Customer", about: "Content curating app\nBrings all your news into one place" },
        { name: "Circoolees", domain: "getcircoolees.com", status: "Churned", about: "Design software\nSuper lightweight design app" },
        { name: "Command+R", domain: "cmdr.ai", status: "Customer", about: "Data prediction\nAI and machine learning data" },
        { name: "Hourglass", domain: "hourglass.app", status: "Customer", about: "Productivity app\nTime management and productivity" },
        { name: "Layers", domain: "getlayers.io", status: "Churned", about: "Web app integrations\nConnect web apps seamlessly" },
        { name: "Quotient", domain: "quotient.co", status: "Customer", about: "Sales CRM\nWeb-based sales doc management" },
        { name: "Sisyphus", domain: "sisyphus.com", status: "Customer", about: "Automation and workflow\nTime tracking, invoicing and expenses" },
    ];

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
                            Company 
                            <Icon icon="solar:arrow-down-line-duotone"/>
                        </THeadContent>
                    </THead>
                    <THead>Status</THead>
                    <THead>About</THead>
                </Row>
            </Head>
            <Body>
                {companies.map((company)=>(
                    <Row key={company.name}>
                        <TBody>
                            <Check
                                logo={<Image src={photoProfile}/>}
                                label={`${company.name}\n${company.domain}`}
                                checked={isChecked[company.name] || false}
                                onChange={() => handleCheckboxChange(company.name)}
                            />
                        </TBody>
                        <TBody>
                            <PurpleTag>{company.status}</PurpleTag>
                        </TBody>
                        <TBody>
                            {company.about.split('\n').map((line, index)=> (
                                <AboutLine key={index} isBold={index === 0}>
                                    {line}
                                </AboutLine>
                            ))}
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