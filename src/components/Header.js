import React from 'react'
import { Container, Flex } from './styles/GlobalComponents'
import { HeaderNav, Logo, Menu } from './styles/HeaderComponents'
import { Sun, Moon, BrandLogoDark, BrandLogoLight } from '../assets/images/social-icons'
import { useGlobalDispatchContext, useGlobalStateContext } from '../context/GlobalContext'
import { Link } from 'gatsby'


const Header = ({ onCursor, toggleMenu, setToggleMenu }) => {
    const { isDark } = useGlobalStateContext();
    const dispatch = useGlobalDispatchContext();
    return (
        <HeaderNav animate={{ y: 0, opacity: 1 }} initial={{ y: -72, opacity: 0 }} transition={{ duration: 1, ease: [.6, .05, -.01, 0.9] }}>
            <Container wider>
                <Flex spaceBetween noHeight>
                    <Logo onMouseEnter={() => onCursor("cursorRed")} onMouseLeave={onCursor}>
                        <Link to="/">
                            {isDark ? (
                                <BrandLogoDark />
                            ) : (
                                    <BrandLogoLight />
                                )}
                        </Link>
                    </Logo>
                    <Menu>
                        <Flex alignCenter>
                            {isDark ? (
                                <div
                                    // ref={themeToggle}
                                    onClick={() => dispatch({
                                        type: "TOGGLE_THEME",
                                        theme: false,
                                    })}
                                    onMouseEnter={() => {
                                        onCursor("Locked");
                                        // setCursorPosition({ x: togglPosition.x - 7, y: togglPosition.y + 0 })
                                    }}
                                    onMouseLeave={onCursor}
                                >
                                    <Sun />
                                </div>
                            ) : (
                                    <div
                                        // ref={themeToggle}
                                        onClick={() => dispatch({
                                            type: "TOGGLE_THEME",
                                            theme: true,
                                        })}
                                        onMouseEnter={() => {
                                            onCursor("Locked");
                                            // setCursorPosition({ x: togglPosition.x - 7, y: togglPosition.y + 0 })
                                        }}
                                        onMouseLeave={onCursor}
                                    >
                                        <Moon />
                                    </div>
                                )}
                            {/* <Sun /> */}
                            <button
                                // ref={hamburger}
                                onClick={() => setToggleMenu(!toggleMenu)}
                                onMouseEnter={() => {
                                    onCursor("Locked");
                                    // setCursorPosition({ x: hamPosition.x, y: hamPosition.y + 0 })
                                }}
                                onMouseLeave={onCursor}>
                                <span></span>
                                <span></span>
                            </button>
                        </Flex>
                    </Menu>
                </Flex>
            </Container>
        </HeaderNav>
    )
}

export default Header
