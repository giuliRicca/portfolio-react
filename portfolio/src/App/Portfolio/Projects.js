import styled from 'styled-components';
import Heading from "../../Shared/Heading.js";
import {Folder} from "@styled-icons/bootstrap/Folder";

export const PorjectsContainer = styled.div`
    width:100%;
    display:grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: 2rem;

    @media (min-width: ${props=>props.theme.breakpoints.xxl}){
        grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
    }

    @media (max-width: ${props=>props.theme.breakpoints.xs}){
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
`
export const FolderIcon = styled(Folder)`
    margin-bottom: 1rem;
    color: ${props=>props.theme.colors.primary};
`

export const ProjectLink = styled.a`
    position: absolute;
    top:1.8rem;
    right:1.5rem;
    color:${props=>props.theme.colors.white};
    transition: color .3s ease;

    &:hover,
    &:focus{
        color: ${props=>props.theme.colors.black};
    }
`

export const Project = styled.div`
    background-color: ${props=>props.theme.colors.black};
    border-radius: 27px;
    position: relative;
    height: 300px;
    padding: 2rem;
    transition: transform .5s ease ,
                background-color .3s ease;

    ${Heading} {
        color: ${props=>props.theme.colors.white};
    }


    p:last-child{
        position: absolute;
        bottom: 20px;
        word-spacing: 1rem;
    }

    &:hover,
    &:focus{
        transform: translateY(-15px);
        background-color: ${props=>props.theme.colors.primaryHover};

        ${FolderIcon} {
            fill: #fff;
        }
    }

`
