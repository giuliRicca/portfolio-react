import React from 'react';
import { Section } from '../../Shared/Section';
import {StyledButton} from '../../Shared/Button';
import Heading, {Text} from '../../Shared/Heading';
import Fade from 'react-reveal/Fade';
import {useTranslation} from "react-i18next";

function Home() {
  const {t} = useTranslation();

  return (
    <Section id="home">
    <Fade left>
      <Heading size='xl'>Giuliano Ricca</Heading>
      <Heading size='lg' color='primary'>{t('Home.title')}</Heading>
    </Fade>
      <Text>
        {t('Home.description')}
      </Text>
      <br/>
      <StyledButton as='a' size='xl' href="#contact">
        {t('Home.button')}
      </StyledButton>
    </Section>
  )
}

export default Home;
