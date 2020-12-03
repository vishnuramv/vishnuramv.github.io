import styled, { css } from "styled-components";
import { motion } from 'framer-motion';


export const Container = styled.div`
    flex-grow: 1;
    margin: 0 15%;
    padding: 0 32px;
    position: relative;
    width: auto;
    // height: 100%;
    @media (min-width: 1024px) {
        max-width: 960px
    }
    @media (min-width: 1216px) {
        max-width: 1152px
    }
    @media (min-width: 1408px) {
        max-width: 1244px
    }
    @media (max-width: 770px) {
        margin: 0 auto;
    }
    ${props => props.fluid && css`
        padding: 0;
        margin: 0;
        width: 100%;
    `}
    ${props => props.wider && css`
        margin: 0 10%;
    `}
`;
export const Flex = styled(motion.div)`
    position: relative;
    display: flex;
    align-items: center;

    ${props => props.fColumn && css`
        flex-direction: column
    `}
    ${props => props.spaceBetween && css`
        justify-content: space-between;
    `}
    ${props => props.spaceBetween && css`
        justify-content: space-between;
    `}
    ${props => props.spaceAround && css`
        justify-content: space-around;
    `}
    ${props => props.spaceEvenly && css`
        justify-content: space-evenly;
    `}
    ${props => props.flexEnd && css`
        justify-content: flex-end;
    `}
    ${props => props.flexStart && css`
        justify-content: flex-start;
    `}
    ${props => props.noHeight && css`
        height: 0;
    `}
    ${props => props.alignTop && css`
        align-items: flex-start;
    `}
    ${props => props.alignCenter && css`
        align-items: center;
    `}
`;

export const Cursor = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 18px;
    height: 18px;
    background-color: ${props => props.theme.red};
    border-radius: 100%;
    transform: translate(-50%,-50%);
    transition: all .3s ease-in-out;
    transition-property: width, height, border;
    will-change: width, height, transform, border;
    pointer-events: none;
    z-index: 999;
    &.nav-open {
        background-color: ${props => props.theme.text}
    }
    &.cursorRed {
        background-color: transparent;
        width: 48px;
        height: 48px;
        border: 4px solid ${props => props.theme.red}
    }
    &.cursorTheme {
        border: 4px solid ${props => props.theme.text}
    }
    &.Locked {
        background: transparent !important;
        // width: 56px;
        // height: 56px;
        border: 4px solid ${props => props.theme.text} !important;
        top: ${props => props.theme.top} !important;
        left: ${props => props.theme.left} !important;
        z-index: 1000;
  }
`
