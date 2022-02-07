import styled from "styled-components";

export const StyledButton = styled.button`
    background-color: ${props => props.theme.colors[props.color] || props.theme.colors.primary};

    color: ${props => props.theme.colors.white};
    text-decoration: none;
    text-transform: uppercase;
    text-align: center;

    transition-property: background-color;
    transition-duration: .3s;

    padding: ${props=> props.theme.paddings[props.size] || props.theme.paddings.md};
    border-radius: 25px;
    border:none;

    cursor:pointer;


    &:hover,
    &:active,
    &:focus{
        background-color: ${props => props.theme.colors.primaryHover};
    }
`