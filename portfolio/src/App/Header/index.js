import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import { StyledButton } from '../../Shared/Button';
import {StyledNavbar, NavBrand, NavItems, NavItem, NavLink, NavHamburger} from './Navbar';
import Switch from './Switch';
import Languages from './Languages';
import cv_en from '../../assets/cv_en.pdf';
import cv_es from '../../assets/cv_es.pdf';

function Header (props) {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
    const {t, i18n} = useTranslation();

    const toggleMenu = () => {
        setMenuIsOpen(!menuIsOpen);
    }

    const handlClick = (e)=> {
        e.preventDefault();
        toggleMenu();
        window.location.href =e.target.href;
    }


    return(
    <StyledNavbar>
        <div id='left'>
            <NavBrand href='#home'>Giuliano</NavBrand>
            <Languages></Languages>
        </div>

        <div id="right">
            <Switch theme={props.theme} handleChange={props.toggleTheme}/>

            <NavHamburger onClick={toggleMenu} active={`${menuIsOpen ? "active" : "" }`}>
                <span></span>
                <span></span>
                <span></span>
            </NavHamburger>  

            
            <NavItems active={menuIsOpen}>
                <NavItem>
                    <NavLink onClick={handlClick} href='#home'>
                        {t('Header.home')}
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={handlClick} href="#about">
                        {t('Header.about')}
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={handlClick} href="#portfolio">
                        portfolio
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={handlClick} href="#contact" >
                        {t('Header.contact')}
                    </NavLink> 
                </NavItem>

                <NavItem>
                    <StyledButton as='a' href={i18n.language==='en' ? cv_en : cv_es} color='primary' download>CV</StyledButton>
                </NavItem>
            </NavItems>
        </div>

    </StyledNavbar>
    );
}


export default Header;

