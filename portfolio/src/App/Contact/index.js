import React, {useState, useRef} from 'react';
import axios from 'axios';
import { StyledButton } from '../../Shared/Button.js';
import Heading from '../../Shared/Heading.js';
import {Section} from '../../Shared/Section.js';
import {ContactForm, ContactInput, Message} from "./Form.js";
import ReCAPTCHA from "react-google-recaptcha";
import {useTranslation} from 'react-i18next';

const Contact = () => {
    const {t} = useTranslation();
    const formId = 'jick6Lmt';
    const reCaptchaKey = "6Lc1SWMeAAAAABQ6aX7yvZDtjH9gdcEO4op84azU";
    const reCaptchaRef = useRef();
    const [reCaptchaToken, setReCaptchaToken] = useState();
    const [message, setMessage] = useState();
    const [submitting, setSubmitting] = useState(false);
    const [formData, setFormData] = useState({
        'email': '',
        'message': '',
    });
    
    const updateRecaptchaToken = (token) =>{
        setReCaptchaToken(token);
        
    }

    const handleInputChange = e =>{
        const {id, value} = e.target;
        setFormData({
            ...formData,
            [id]: value,
        });
    }

    const handleSubmit = async (event)=>{
        event.preventDefault();
        setSubmitting(true);
        await postSubmission();
        setFormData({
            "email": "",
            "message": ""
        })
        reCaptchaRef.current.reset();
        setSubmitting(false);
    }

    const postSubmission = async ()=>{
        const payload = {
            ...formData,
            "g-recaptcha-response": reCaptchaToken,
        }
        try {
            await axios.post(`https://submit-form.com/${formId}`, payload);
            setMessage({
                'success': true,
                'text': 'Form Submitted successfully',
            });
        } catch (error) {
            console.error(error);
            setMessage({
                'success': false,
                'text': 'An Error Ocurred',
            });
        }
    }



    
    
    return (
        <Section id='contact' align='center'>
            <Heading size='xl'>{t('Contact.title')}</Heading>
            <ContactForm onSubmit={handleSubmit}>

            {message ? 
                <Message success={message.success}>
                    {message.text}
                </Message> :
                ""
            }
                
                <ContactInput placeholder={t('Contact.email')} id="email" 
                type='email' onChange={handleInputChange} value={formData.email} required/>

                <ContactInput placeholder={t('Contact.message')} id="message" 
                type='textarea' onChange={handleInputChange} value={formData.message}  required/>

                <ReCAPTCHA  ref={reCaptchaRef}
                            sitekey={reCaptchaKey} 
                            onChange={updateRecaptchaToken}
                />
                <StyledButton as='button' type='submit' size='xl'
                >
                    {submitting ? "..submitting" : "submit"}
                </StyledButton>
            </ContactForm>
        </Section>
    );
}

export default Contact;