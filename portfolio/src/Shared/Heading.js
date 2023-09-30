import styled from "styled-components";

const Heading = styled.h1`
    font-size: ${props => props.theme.font_sizes[props.size] || props.theme.font_sizes.medium};
    color: ${props => props.theme.colors[props.color] || props.theme.colors.font};
    ${({uppercase}) => `
        text-transform: uppercase;
    `}

    padding: .2rem 0;

    @media(min-width: ${props=> props.theme.breakpoints.xl}){
        font-size: ${props=> props.size==='xl' ? props.theme.font_sizes.xxl : props.theme.font_sizes['xl']}
    }
`
export default Heading


export const Text = styled.p`
    font-size: ${props => props.theme.font_sizes[props.size] || props.theme.font_sizes.sm};
    color: ${props => props.theme.colors[props.color] || props.theme.colors.font};
    text-transform: ${props=>props.uppercase ? "uppercase" : ""};

    @media(min-width: ${props=>props.theme.breakpoints.xl}){
        font-size: ${props=> props.size==='xs' ? props.theme.font_sizes.md : props.theme.font_sizes.lg}
    }
`
