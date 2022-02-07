import styled from "styled-components"

export const Section = styled.section`
    display: flex;
    flex-direction: column;
    align-items: ${props=>props.align || 'flex-start'};
    background-color: ${props => props.theme.colors.background};
    padding: 5rem 4rem;

    &:first-child{
        padding-top: 150px;
    }    

    @media(min-width: ${props=> props.theme.breakpoints.xl}){
        padding: ${props=>props.theme.paddings.section_xl}
    }
`