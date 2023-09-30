import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${props=>props.theme.colors.background};
    padding: ${props=>props.theme.paddings.xl};
    display:flex;
    justify-content: space-between;
    align-items:center;

    *{
        margin: 0 .5rem;
    }
`