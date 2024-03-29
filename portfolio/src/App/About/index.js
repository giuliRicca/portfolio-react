import React from 'react';
import {useTheme} from 'styled-components';
import { Section } from '../../Shared/Section';
import Heading, {Text} from '../../Shared/Heading';
import Fade from 'react-reveal/Fade';
import {ReactLogo, Django, Python, Html5, Css3, Nodejs} from '@styled-icons/boxicons-logos';
import {Split, Image} from "./StyledAbout.js";
import me from "../../assets/me.png";
import {useTranslation} from "react-i18next";

function About() {
    const theme = useTheme();
    const {t} = useTranslation();

    return (
        <Section id="about">
            <Fade bottom >
            <Split>
                <div>
                    <Heading size='xl'>{t('About.title')}</Heading>
                    <Text>
                        {t('About.description')}
                    </Text>
                    <br />
                    <Heading color='primary' size='lg' uppercase>{t('About.skills')}:</Heading>
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
                </div>
            
                <Image src={me}/>
            </Split>
            </Fade>
        </Section>
        
    )
}

export default About;
