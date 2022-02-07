import React from 'react';
import { Section } from '../../Shared/Section';
import {StyledButton} from '../../Shared/Button';
import Heading, {Text} from '../../Shared/Heading';
import Fade from 'react-reveal/Fade';

function Home() {
  return (
    <Section id="home">
    <Fade left>
      <Heading size='xl'>Giuliano Ricca</Heading>
      <Heading size='lg' color='primary'>Full Stack Developer</Heading>
    </Fade>
      <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, soluta.</Text>
      <br/>
      <StyledButton as='a' size='xl' href="#contact">
        Contacto
      </StyledButton>
    </Section>
  )
}

export default Home;
