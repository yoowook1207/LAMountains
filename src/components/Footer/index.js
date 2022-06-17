import { FooterContainer, FooterWrapper, FooterLogo, Copyright } from "./FooterElements"
import Logo from '../../images/FooterLogoName.png'

const Footer = () => {

    return (
        <>
            <FooterContainer>
                <FooterWrapper>
                    <FooterLogo src={Logo} alt='Logo with name'>
                        
                    </FooterLogo>

                    <Copyright>
                        COPYRIGHT 2016. ALL RIGHTS RESERVED
                    </Copyright>
                </FooterWrapper>
            </FooterContainer>
        </>
    )
}

export default Footer