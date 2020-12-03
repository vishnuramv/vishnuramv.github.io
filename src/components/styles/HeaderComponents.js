import { motion } from 'framer-motion';
import styled, { css } from 'styled-components'


export const HeaderNav = styled(motion.div)`
    height: 0;
    width: 100%;
    position: sticky;
    top: 72px;
    right: 0;
    left: 0;
    z-index: 99;
    background-color: ${props => props.theme.background};
    @media (max-width: 770px) {
        top: 56px
    }
`;

export const Logo = styled.div`
    a {
        color: ${props => props.theme.red};
    }
    svg {
        width: 50px;
        height: 50px;
    }
    
`;

export const Menu = styled.div`
    margin-right: -2%;
    svg {
        color: ${props => props.theme.text};
        width: 24px;
        margin-right: 15px;
    }
    button {
        height: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        background-color: transparent;
        border: none;
        outline: none;
        span {
            height: 4px;
            width: 30px;
            background-color: ${props => props.theme.text};
        }
    }
    
`;
