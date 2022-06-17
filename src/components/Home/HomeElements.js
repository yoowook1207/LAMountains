import styled from 'styled-components'

export const HomeContainer = styled.div `
    height: 900px;
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 1600px;
    margin-left:auto;
    margin-right:auto;
    position: relative;
    z-index: 1;
`

export const HomeBg = styled.div `
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const BgImg = styled.img `
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #000;
`

export const HomeContent = styled.div `
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #fff;
`

export const Title = styled.h1 `
    color: #fff;
    font-size:  80px;
    text-align: center;
    font-family: 'Monsieur La Doulaise', cursive;
    font-weight: 400;
    margin: 0;

    @media screen and (max-width: 768px) {
        font-size: 64px;
    }

    @media screen and (max-width: 480px) {
        font-size: 48px;
    }
`

export const HomeP = styled.p `
    color: #fff;
    font-size:  32px;
    text-align: center;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    margin: 0 0 20px 0;

    @media screen and (max-width: 768px) {
        font-size: 32px;
    }

    @media screen and (max-width: 480px) {
        font-size: 24px;
    }
`

export const ArrowHolder = styled.div `
      animation: fadeIn 5s;
  -webkit-animation: fadeIn 5s;
  -moz-animation: fadeIn 5s;
  -o-animation: fadeIn 5s;
  -ms-animation: fadeIn 5s;
`
