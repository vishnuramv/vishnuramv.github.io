import { Link } from 'gatsby'
import React from 'react'
import { Container, Flex } from './styles/GlobalComponents'
import { CloseNav, Nav, NavHeader, NavList, LogoNav, NavFooter } from './styles/NavigationStyles'
import { motion, AnimatePresence } from 'framer-motion';
import { Instagram, BrandLogo, Linkedin, Github, Medium, Devto } from '../assets/images/social-icons';
import { FooterEmail, FooterIcons } from './styles/FooterComponents';

export default function Navigation({ onCursor, toggleMenu, setToggleMenu }) {
    const navRoute = [
        { id: 0, title: "About Me", path: "/#about", },
        { id: 1, title: "My Work", path: "/#projects", },
        { id: 2, title: "Contact Me", path: "/#contact", },
    ];
    const textMotion = {
        rest: {
            x: -20,
            transition: {
                duration: .6,
                ease: [.6, .05, -.01, .9]
            }
        },
        hover: {
            x: 10,
            transition: {
                duration: .6,
                ease: [.6, .05, -.01, .9]
            }
        }
    };

    const slashMotion = {
        rest: {
            x: "-100%",
            opacity: 0,
            scaleX: 0,
            duration: .6,
            ease: [.6, .05, -.01, .9]
        },
        hover: {
            x: "0",
            opacity: 1,
            scaleX: 1,
            transition: {
                duration: .6,
                ease: [.6, .05, -.01, .9]
            }
        }
    };

    return (
        <AnimatePresence>
            {toggleMenu && (
                <Nav initial={{ x: '-100%', scaleX: 0 }} exit={{ x: '-100%', scaleX: 0 }} animate={{ x: toggleMenu ? '0%' : '-100%', scaleX: toggleMenu ? 1 : 0 }} transition={{ duration: .8, ease: [.6, .05, -.01, .9] }}>
                    <Container wider>
                    <NavHeader>
                            <Flex spaceBetween noHeight>
                                <LogoNav onMouseEnter={() => onCursor("cursorTheme")} onMouseLeave={onCursor}>
                                    <Link to="/">
                                        <BrandLogo />
                                    </Link>
                                </LogoNav>
                                <CloseNav onClick={() => setToggleMenu(!toggleMenu)} onMouseEnter={() => onCursor("cursorTheme")} onMouseLeave={onCursor}>
                                    <button>
                                        <span></span>
                                        <span></span>
                                    </button>
                                </CloseNav>
                            </Flex>
                    </NavHeader>
                        <NavList>
                            <ul>
                                {navRoute.map(route => (
                                    <motion.li
                                        key={route.id}
                                        onClick={() => setToggleMenu(!toggleMenu)}
                                        onMouseEnter={() => onCursor("cursorTheme")}
                                        onMouseLeave={onCursor}
                                    >
                                        <Link to={route.path}>
                                            <motion.div initial="rest" whileHover="hover" animate="rest" className="link">
                                                <motion.span variants={slashMotion} className="arrow">
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 101 57">
                                                        <path d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z" fill="#FFF" fillRule="evenodd"></path>
                                                    </svg>
                                                </motion.span>
                                                <motion.span variants={textMotion}>{route.title}</motion.span>
                                            </motion.div>
                                        </Link>
                                    </motion.li>
                                ))}

                            </ul>
                        </NavList>
                    </Container>
                    <NavFooter>
                        <Container wider>
                            <Flex className="FooterFlex" spaceBetween>
                                <FooterEmail>Vishnu.v1902@gmail.com</FooterEmail>
                                <FooterIcons>
                                    <a href="https://instagram.com/vvishnu___" target="_blank">
                                        <Instagram />
                                    </a>
                                    <a href="https://linkedin.com/in/vishnu1902" target="_blank">
                                        <Linkedin />
                                    </a>
                                    <a href="https://github.com/vishnuramv" target="_blank">
                                        <Github />
                                    </a>
                                    <a href="https://vishnuramv.medium.com/" target="_blank">
                                        <Medium />
                                    </a>
                                    <a href="https://dev.to/vishnuramv" target="_blank">
                                        <Devto />
                                    </a>
                                </FooterIcons>
                            </Flex>
                        </Container>
                    </NavFooter>
                </Nav>
            )}
        </AnimatePresence>
    );

}

