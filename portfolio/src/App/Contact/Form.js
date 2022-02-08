import styled from "styled-components";
import {StyledButton} from "../../Shared/Button.js";

export const ContactForm = styled.form`
    ${StyledButton} {
        margin-top: .5rem;
    };
    @media(min-width: ${props=> props.theme.breakpoints.xl}){
        width: 600px
    }

`;

export const Message = styled.div`
    background-color: ${props=>props.success ? '#57c141' : '#ff472b'};
    padding: ${props=>props.theme.paddings.xl};
    color: ${props=>props.theme.colors.white};
    border-radius: 10px;
`

export const ContactInput = styled.input`
    width: 100%;
    margin: .5rem 0;
    padding: ${props=>props.theme.paddings.md};
    border-radius: 10px;
    outline: none;
    border: 2px solid ${props=>props.theme.colors.font};
    color: ${props=>props.theme.colors.font};
    background: none;
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;

    &::placeholder{
        color:${props=>props.theme.colors.font};
    }

    &[type='textarea']{
        padding-bottom: 10rem;
    }

    &:focus,
    &:active{
        outline-color: ${props=>props.theme.colors.primary};
        border-color: ${props=>props.theme.colors.primary};
    }

    @media(min-width: ${props=> props.theme.breakpoints.xl}){
        padding: ${props=>props.theme.paddings.lg};
        font-size: ${props=>props.theme.font_sizes.md};
    }
    @media(min-width: ${props=> props.theme.breakpoints.xxl}){
        padding: ${props=>props.theme.paddings.xl};
    }
`;