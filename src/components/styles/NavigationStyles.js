import { motion } from 'framer-motion';
import styled from 'styled-components'


export const Nav = styled(motion.div)`
    background: ${props => props.theme.red};
    height: 100vh;
    max-height: 100vh;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    /* display: block; */
    color: ${props => props.theme.text};
    z-index: 100;
    overflow: hidden !important;
`;

export const NavHeader = styled.div`
    top: 72px;
    position: relative;
    h2 {
        color: ${props => props.theme.background};
    }
    @media (max-width: 770px) {
        top: 56px
    }
`;
export const LogoNav = styled.div`
    svg {
        width: 50px;
        height: 50px;
        path {
            fill: ${props => props.theme.background};
        }
    }
`;

export const NavList = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    ul {
        padding: 0;
        li {
            list-style: none;
            font-size: 3rem;
            text-transform: uppercase;
            font-weight: 900;
            height: min-content;
            line-height: 96px;
            overflow: hidden;
            @media (max-width: 420px) {
                font-size: 2rem;
            }
            .link {
                color: ${props => props.theme.background};
                position: relative;
                display: flex;
                align-items: center;
                .arrow {
                    height: 76px;
                    margin-right: 8px;
                    svg {
                        width: 100px;
                        path {
                            fill: ${props => props.theme.background};
                        }
                    }
                    @media (max-width: 420px) {
                        svg {
                            width: 50px;
                        }
                    }
                }

            }
        }
    }
`;


export const CloseNav = styled.div`
    button {
        margin-left: 45%;
        transform-origin: center;
        background-color: transparent;
        border: none;
        /* padding: 20px; */
        outline: none;
        span {
            width: 30px;
            height: 3px;
            border-radius: 30%;
            display: block;
            background: ${props => props.theme.background};
            margin: 8px
        }
    }
    @media (max-width: 420px) {
        button {
            margin-left: 25%;
        }
    }
`;



export const NavFooter = styled.div`
    position: absolute;
    bottom: 0;
    /* top: 0; */
    left: 0;
    width: 100%;
    padding: 56px 0;
    h1 {
        color: ${props => props.theme.background};
    }
    svg > path {
        fill: ${props => props.theme.background} !important;

    }
    @media (max-width: 840px) {
        .FooterFlex {
            flex-direction: column;
        }
    }
`;
