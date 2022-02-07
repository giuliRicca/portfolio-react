import React from 'react';
import {useTheme} from 'styled-components';
import { Section } from '../../Shared/Section';
import Heading, {Text} from '../../Shared/Heading';
import Fade from 'react-reveal/Fade';
import {ReactLogo, Django, Python, Html5, Css3, Nodejs} from '@styled-icons/boxicons-logos'


function About() {
    const theme = useTheme();
    return (
        <Section id="about">
            <Fade bottom >
            <Heading size='xl'>About Me</Heading>
            <Text>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Molestias in totam dicta ipsum magnam atque, 
                distinctio corrupti. Voluptatum at, vel est nesciunt porro odit doloribus.
            </Text>
            <br />
            <Heading color='primary' size='lg' uppercase>Some of my skills:</Heading>
            <div>
                <span>
                    <Django size={theme.sizes.icon_size} color={theme.colors.font}/>
                </span>
                <span>
                    <Python size={theme.sizes.icon_size} color={theme.colors.font}/>
                </span>
                <span>
                    <ReactLogo size={theme.sizes.icon_size} color={theme.colors.font}/>
                </span>
                <span>
                    <Html5 size={theme.sizes.icon_size} color={theme.colors.font}/>
                </span>
                <span>
                    <Css3 size={theme.sizes.icon_size} color={theme.colors.font}/>
                </span>
                <span>
                    <Nodejs size={theme.sizes.icon_size} color={theme.colors.font}/>
                </span>
            </div>
            </Fade>
        </Section>
        
    )
}

export default About;
