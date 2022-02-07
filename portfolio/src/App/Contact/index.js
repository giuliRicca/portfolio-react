import React from 'react';
import { StyledButton } from '../../Shared/Button.js';
import Heading from '../../Shared/Heading.js';
import {Section} from '../../Shared/Section.js';
import {ContactForm, ContactInput} from "./Form.js"

const Contact = () => {
    return (
        <Section id='contact' align='center'>
            <Heading size='xl'>Contact Me</Heading>
            <ContactForm>
                <ContactInput placeholder='Email' type='email' />
                <ContactInput placeholder='Message' type='textarea' />
                <StyledButton as='button' type='submit' size='xl'>Submit</StyledButton>
            </ContactForm>
        </Section>
    );
}

export default Contact;