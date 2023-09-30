import React from 'react';
import {StyledFooter} from "./Footer.js";
import Heading, {Text} from "../../Shared/Heading.js";
import {ReactLogo} from '@styled-icons/boxicons-logos';

function Footer() {
  return (
    <StyledFooter>
        <Heading size='md'>Giuliano</Heading>
        <Text size='sm'>This site was made with 
        <ReactLogo size={30} color='#5ccfee'/></Text>
    </StyledFooter>
  )
}

export default Footer;
