import styled from 'styled-components';
import {StyledButton} from '../../Shared/Button.js' 


export const StyledNavbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-around;
    position: fixed;
    top:0;
    width: 100%;
    height: 80px;
    background-color: ${props => props.theme.colors.navbar};
    backdrop-filter: blur(2px);
    text-transform: uppercase;
    z-index: 1;

    #left, #right{
        display:flex;
        align-items:center;
        justify-content: center;
        flex-wrap: wrap;
    }
`

export const NavBrand = styled.a`
    color: ${props=>props.theme.colors.font};
    text-decoration: none;
    font-size: 2em;
    font-weight: bolder;
`

export const NavHamburger = styled.div`
    height: 26px;
    width: 34px;
    z-index: 1;
    display: none;
    flex-direction: column;
    justify-content: space-between;
    cursor: pointer;

    span{
        display: block;
        height: 4px;
        width: 100%;
        border-radius: 10px;
        background: ${props=>props.theme.colors.font};
        transition: transform 0.4s ease-in-out;
        &:first-child{
            transform-origin: 0% 0%;
            ${props => props.active ? "transform: rotate(45deg)" : ""}
        }
        &:nth-child(2){
            ${props => props.active ? "transform: scaleY(0)" : ""}
        }
        &:last-child{
            transform-origin: 0% 100%;
            ${props => props.active ? "transform: rotate(-45deg)" : ""}
        }
    }

    @media (max-width: ${props => props.theme.breakpoints.sm}){
        display: flex;
    }
`


export const NavItems = styled.ul`
    transition: transform .4s ease;

    @media (max-width: ${props => props.theme.breakpoints.sm}) {
        background-color: ${props=>props.theme.colors.primary};
        backdrop-filter: blur(2px);
        border-left: 10px solid ${props=>props.theme.colors.black};
        position: absolute;
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 0;
        right: 0;
        height: 100vh;
        width: 100vw;
        padding-top: 80px;
        transform: ${props => props.active ? 'translateX(0)' : "translateX(100%)"};

        ${StyledButton} {
            background-color: ${props=>props.theme.colors.black};
        }
    }

    @media (max-width: ${props=>props.theme.breakpoints.xs}){
        width:100%;
    }

`

export const NavItem = styled.li`
    display: inline-flex;
    font-size: 1.3rem;
    justify-content:center;
    cursor:pointer;
    

    @media (max-width: ${props => props.theme.breakpoints.sm}) {
        margin: 1rem 0;

    }

    @media(max-width: ${props=>props.theme.breakpoints.xs}){
        margin: .7rem 0;
    }
`

export const NavLink = styled.a`
    text-decoration: none;
    color: ${props => props.theme.colors.font};
    font-weight: 600;
    padding: .3rem 1.2rem;
    transition: color .3s ease;
    text-align: center;
    &:hover,
    &:focus{
        color: rgb(100,100,100);
    }
`

