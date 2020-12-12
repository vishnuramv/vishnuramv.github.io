import React from 'react'
import { Container, Flex } from './styles/GlobalComponents';
import { FooterEmail, FooterIcons, FooterSection } from './styles/FooterComponents';
import { Devto, Github, Instagram, Linkedin, Medium } from '../assets/images/social-icons'

const Footer = ({ onCursor }) => {
    return (
        <FooterSection>
            <Container wider>
                <Flex className="FooterFlex" spaceBetween>
                    <FooterEmail>Vishnu.v1902@gmail.com</FooterEmail>
                    <FooterIcons>
                        <a href="https://instagram.com/vvishnu___" target="_blank" onMouseEnter={() => { onCursor("cursorRed"); }} onMouseLeave={onCursor}>
                            <Instagram />
                        </a>
                        <a href="https://linkedin.com/in/vishnu1902" target="_blank" onMouseEnter={() => { onCursor("cursorRed"); }} onMouseLeave={onCursor}>
                            <Linkedin />
                        </a>
                        <a href="https://github.com/vishnuramv" target="_blank" onMouseEnter={() => { onCursor("cursorRed"); }} onMouseLeave={onCursor}>
                            <Github />
                        </a>
                        <a href="https://vishnuramv.medium.com/" target="_blank" onMouseEnter={() => { onCursor("cursorRed"); }} onMouseLeave={onCursor}>
                            <Medium />
                        </a>
                        <a href="https://dev.to/vishnuramv" target="_blank" onMouseEnter={() => { onCursor("cursorRed"); }} onMouseLeave={onCursor}>
                            <Devto />
                        </a>
                    </FooterIcons>
                </Flex>
            </Container>
        </FooterSection>
    )
}

export default Footer
