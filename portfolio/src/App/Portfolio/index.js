import React from 'react';
import { Section } from '../../Shared/Section';
import Heading, {Text} from '../../Shared/Heading';
import {PorjectsContainer, Project, FolderIcon, ProjectLink} from './Projects.js'
import {Github} from "@styled-icons/boxicons-logos/Github";
import Fade from 'react-reveal/Fade';

function Portfolio() {
    return (
    <Section id="portfolio">
        <Heading size='lg' >My Portfolio</Heading> 
        <br/>
        <PorjectsContainer>
            <Fade left>
            <Project>
                <FolderIcon size={40} />
                <Heading size='md' color='font_dark'>Prayers</Heading>
                <Text color='white'>This is an app made with Django for users to post prayer requests. Made with Django</Text>
                <br/>
                <ProjectLink href="https://github.com/giuliRicca/Prayers">
                    <Github size={40}/>
                </ProjectLink>
                <Text color='mute' size='sm' uppercase>Django Python Bootstrap SQL</Text>
            </Project>
            
            <Project>
                <FolderIcon size={40} />
                <Heading size='md' color='font_dark'>Service Planning</Heading>
                <Text color='white'>This is an app made with Django for users to post prayer requests. Made with Django</Text>
                <br/>
                <ProjectLink href="https://github.com/giuliRicca/portfolio-react">
                    <Github size={40}/>
                </ProjectLink>
                <Text color='mute' size='sm' uppercase>React Styled-Components Js</Text>
            </Project>

            <Project>
                <FolderIcon size={40} />
                <Heading size='md' color='font_dark'>Aula Virtual</Heading>
                <Text color='white'>
                    This is a Classroom app made with Django.
                </Text>
                <br/>
                <ProjectLink href="https://github.com/giuliRicca/aulavirtual">
                    <Github size={40}/>
                </ProjectLink>
                <Text color='mute' size='sm' uppercase>Django Python Bootstrap</Text>
            </Project>

            <Project>
                <FolderIcon size={40} />
                <Heading size='md' >Django-Eccomerce</Heading>
                <Text color='white'>
                This is a simple Ecommerce app made with Django. It does not require the user to register instead is saves you cart in cookies.
                </Text>
                <br/>
                <ProjectLink href="https://github.com/giuliRicca/django-eccomerce">
                    <Github size={40}/>
                </ProjectLink>
                <Text color='mute' size='sm' uppercase>Django Python Bootstrap Javascript</Text>
            </Project>
            
            <Project>
                <FolderIcon size={40} />
                <Heading size='md' color='font_dark'>Service Planning</Heading>
                <Text color='white'>This is an app made with Django for users to post prayer requests. Made with Django</Text>
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
