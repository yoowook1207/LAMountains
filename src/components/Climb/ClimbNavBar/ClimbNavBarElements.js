import styled from "styled-components";

export const NavBarHolder = styled.div `
    background-color: #414f6b;
    width: 100%;
    display: flex;
    justify-content: center;
    height: fit-content;
`

export const NavBar = styled.nav `
    max-width: 960px;
    width: 100%;
    height: fit-content;
`

export const NavUl = styled.ul `
    display: flex;
    justify-content: start;
    list-style-type: none;
    align-items: center;
    margin: 0;
    padding: 0;
`

export const NavLi1 = styled.li `
    padding: 2px 25px 2px 25px;
    display: flex;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    height: 100%;
`

export const NavLi2 = styled.li `
    padding: 2px 25px 2px 25px;
    display: flex;
    justify-content: center;
    text-decoration: none;
    align-items: center;
    height:100%;
`

export const NavLink = styled.a `
    text-align: center;
    text-decoration: none;
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    color: #b0b4be;
    font-size: 20px;
    padding: 5px;

    :hover {
        color: white;
    }
`