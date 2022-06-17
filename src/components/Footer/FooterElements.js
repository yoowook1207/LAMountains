import styled from "styled-components";

export const FooterContainer = styled.div `
    width:100%;
    background-color: #414f6b;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const FooterWrapper = styled.div `
    width:100%;
    max-width: 960px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const FooterLogo = styled.img `
    padding-left: 20px;

    @media screen and (max-width: 768px) {
        padding-left: 5px; 
        height: 30px;
    }
`

export const Copyright = styled.div `
    font-family: 'Lato', sans-serif;
    font-style: italic;
    color: #63769d;
    letter-spacing: 1px;

    @media screen and (max-width: 768px) {
        padding-right: 5px; 
        font-size: 14px;
    }

    @media screen and (max-width: 480px) {
        padding-right: 5px; 
        font-size: 10px;
    }
`