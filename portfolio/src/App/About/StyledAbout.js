import styled from "styled-components";

export const Image = styled.img`
    object-fit: cover;
    width: 100%;
    max-width: 400px;
    max-height: 400px;
    border-radius: 20px;
    border: 3px solid ${props=>props.theme.colors.primary};
    margin: .5rem;
    justify-self: center;
`

export const Split = styled.div`
    display: flex;
    align-items: center;
    @media (max-width: ${props=>props.theme.breakpoints.sm}){
        flex-direction: column;
        
    }
`
