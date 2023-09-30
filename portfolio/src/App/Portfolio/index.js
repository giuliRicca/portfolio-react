import React from 'react';
import { Section } from '../../Shared/Section';
import Heading, {Text} from '../../Shared/Heading';
import {PorjectsContainer, Project, FolderIcon, ProjectLink} from './Projects.js'
import {Github} from "@styled-icons/boxicons-logos/Github";
import Fade from 'react-reveal/Fade';
import {useTranslation} from "react-i18next";

function Portfolio() {
    const {t} = useTranslation();
    return (
    <Section id="portfolio">
        <Heading size='lg' >{t('Portfolio.title')}</Heading> 
        <br/>
        <PorjectsContainer>
            <Fade left>

            <Project>
                <FolderIcon size={40} />
                <Heading size='md' color='font_dark'>{t('Portfolio.projects.1.title')}</Heading>
                <Text color='white'>
                {t('Portfolio.projects.1.description')}
                </Text>
                <br/>
                <ProjectLink href="https://github.com/giuliRicca/Prayers">
                    <Github size={40}/>
                </ProjectLink>
                <Text color='mute' size='sm' uppercase>Django Python Bootstrap SQL</Text>
            </Project>

            <Project>
                <FolderIcon size={40} />
                <Heading size='md' color='font_dark'>{t('Portfolio.projects.2.title')}</Heading>
                <Text color='white'>
                {t('Portfolio.projects.2.description')}
                </Text>
                <br/>
                <ProjectLink href="https://github.com/giuliRicca/aulavirtual">
                    <Github size={40}/>
                </ProjectLink>
                <Text color='mute' size='sm' uppercase>Django Python Bootstrap</Text>
            </Project>

            <Project>
                <FolderIcon size={40} />
                <Heading size='md' color='font_dark'>{t('Portfolio.projects.3.title')}</Heading>
                <Text color='white'>{t('Portfolio.projects.3.description')}</Text>
                <br/>
                <ProjectLink href="https://github.com/giuliRicca/portfolio-react">
                    <Github size={40}/>
                </ProjectLink>
                <Text color='mute' size='sm' uppercase>React Styled-Components Js</Text>
            </Project>

            <Project>
                <FolderIcon size={40} />
                <Heading size='md' >{t('Portfolio.projects.4.title')}</Heading>
                <Text color='white'>
                {t('Portfolio.projects.4.description')}
                </Text>
                <br/>
                <ProjectLink href="https://github.com/giuliRicca/django-eccomerce">
                    <Github size={40}/>
                </ProjectLink>
                <Text color='mute' size='sm' uppercase>Django Python Bootstrap Javascript</Text>
            </Project>
            
            <Project>
                <FolderIcon size={40} />
                <Heading size='md' color='font_dark'>{t('Portfolio.projects.5.title')}</Heading>
                <Text color='white'>
                    {t('Portfolio.projects.5.description')}
                </Text>
                <br/>
                <ProjectLink href="https://github.com/giuliRicca/service-planning-py">
                    <Github size={40}/>
                </ProjectLink>
                <Text color='mute' size='sm' uppercase>Django Python Bootstrap</Text>
            </Project>
            
            </Fade>

        </PorjectsContainer>
    </Section>
)
}

export default Portfolio;
