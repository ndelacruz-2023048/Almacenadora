import {createGlobalStyle} from "styled-components"
export const GlobalStyles = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: "Inter", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
    }

    body::-webkit-scrollbar{
        width: 12px;
        background: rgba(24,24,24,0.2);
    }

    body::-webkit-scrollbar-thumb{
        background:rgba(148,148,148,0.9);
        border-radius: 10px;
        filter:blur(10px);
    }

    button{
        border: none;
    }

    h1,h2,h3,h4,h5,h6,p{
        margin: 0;
    }
   

   
`