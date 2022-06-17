import styled from "styled-components";

export const Mountain1Container = styled.div `
    height: 546px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #fff;
    position: relative;
`

export const Mountain1Bg = styled.div `
    position: absolute;
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

export const Mountain1Contents = styled.div `
    display: flex;
    width: 100%;
    height: 100%;
    max-width: 960px;
    z-index: 3;
`

export const ScheduleContainer = styled.div `
    width: 352px;
    height: 230px;
    background-color: rgba(255,255,255,0.5);
    margin-top: 100px;
    margin-left: 30px;
`

export const ScheduleBox = styled.div `
    margin-left: 40px;
    margin-top: 20px;
`

export const Title = styled.div `
    font-family: 'Oswald', sans-serif;
    font-size: 32px;
    font-weight: bold;
    color: #414f6b;

`

export const ScheduleContents = styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    font-weight: bold;
`

export const Date = styled.div `
    width:50%;
`

export const Cont = styled.div `
    width:50%;
`