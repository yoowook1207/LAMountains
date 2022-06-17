import styled from 'styled-components'

export const ClimbContainer = styled.div `
    height: fit-content;
    flex-wrap: wrap;
    background: #fff;
    position: relative;
`

export const TitleHolder = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    height: 180px;
`

export const ClimbText = styled.div `
    max-width: 960px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 40px;
`

export const ClimbTitle = styled.img `
    max-height: 110px;

    @media screen and (max-width: 768px) {
        max-height: 80px;
    }

    @media screen and (max-width: 480px) {
        max-height: 60px;
    }
`

export const ClimbP = styled.div `
    display: flex;
    align-items: center;
    padding-left: 30px;
    padding-right: 30px;
`

export const TextP = styled.p `
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

export const ClimbNav = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
`

export const ClimbContents = styled.div `
    width: 100%;
`

export const ClimbBg = styled.div `
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