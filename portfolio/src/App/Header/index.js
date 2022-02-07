import React, {useState} from 'react';
import { StyledButton } from '../../Shared/Button';
import {StyledNavbar, NavBrand, NavItems, NavItem, NavLink, NavHamburger} from './Navbar';
import Switch from './Switch';

function Header (props) {
    const [menuIsOpen, setMenuIsOpen] = useState(false);
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

        <NavBrand href='#home'>Giuliano</NavBrand>

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
                        home
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={handlClick} href="#about">
                        about me
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={handlClick} href="#portfolio">
                        portfolio
                    </NavLink>
                </NavItem>
                <NavItem>
                    <NavLink onClick={handlClick} href="#contact" >
                        Contact
                    </NavLink> 
                </NavItem>
                <NavItem>
                    <StyledButton as='a' href="#cv" color='primary'>CV</StyledButton>
                </NavItem>
            </NavItems>
        </div>

    </StyledNavbar>
    );
}


export default Header;

