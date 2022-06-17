import React, {useState, useEffect} from 'react'
import mainLogo from '../../images/Logo.png'
import mainLogo2 from '../../images/LogoName.png'
import {
    Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    LogoImg,
    LogoImg2, } from './NavbarElements'
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import { animateScroll as scroll } from 'react-scroll'


const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true)
        } else {
            setScrollNav(false)
        }
    }
    
    useEffect(() => {
      window.addEventListener('scroll', changeNav)
    }, []);
    
    const toggleHome = () => {
        scroll.scrollToTop();
    }

    const fabarsColor = {
        color: '#414f6b'
    }

  return (
    <>
        <IconContext.Provider value={{ color:'#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/' onClick={toggleHome}> 
                        <LogoImg src={mainLogo} alt="Main Logo" scrollNav={scrollNav}/>
                        <LogoImg2 src={mainLogo2} alt="Main Logo 2" scrollNav={scrollNav}/>
                    </NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars style={fabarsColor}/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='history'
                            smooth={true} duration={500} spy={true} exact='true' offset={-80} scrollNav={scrollNav}
                            >01. HISTORY</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='climb'
                            smooth={true} duration={500} spy={true} exact='true' offset={-80} scrollNav={scrollNav}
                            >02. TEAM</NavLinks>
                        </NavItem>
                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
    </>
  );
}

export default Navbar