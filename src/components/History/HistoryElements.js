import styled from 'styled-components'

export const HistoryContainer = styled.div `
    height: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    position: relative;
`

export const HistoryBg = styled.div `
    position: relative;
    /* top:0;
    left:0;
    bottom:0;
    right:0; */
    width: 100%;
    height: 100%;
    overflow: hidden;
    z-index: 1;
`

export const BgImg = styled.img `
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
`

export const HistoryContents = styled.div `
    z-index: 3;
    max-width: 1600px;
    position: absolute;
    display: flex;
    width:100%;
    height: 100%;
    flex-direction: column;
`

export const HistoryText = styled.div `
    max-width: 960px;
    margin: 70px auto;
    width: 100%;
`

export const HistoryTitle = styled.img `
    max-height: 110px;

    @media screen and (max-width: 768px) {
        max-height: 80px;
    }

    @media screen and (max-width: 480px) {
        max-height: 60px;
    }
`

export const HistoryP = styled.div `
    display: flex;
    justify-content: center;
    width: 100%;
`

export const TextP = styled.div `
    font-size: 15px;
    max-width: 820px;
    line-height: 1.6;
    font-family: 'Lato', sans-serif;


    @media screen and (max-width: 768px) {
        font-size: 14px;
    }

    @media screen and (max-width: 480px) {
        font-size: 13px;
    }

`

export const Gallery = styled.div `
    position:absolute;
    bottom: 0px;
    display: flex;
    justify-content: center;
    width: 100%;
    background-color: rgba(65,79,107,0.5);
`

export const GalleryContainer = styled.div `
    margin: 20px;
    display: flex;
    justify-content: center;
    width: 80%;
`