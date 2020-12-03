import styled from "styled-components";
import { motion } from 'framer-motion';

export const FooterSection = styled(motion.div)`
    padding: 0 0 10vh 0;
    display: flex;
    align-items: center;
    @media (max-width: 840px) {
        .FooterFlex {
            flex-direction: column;
        }
    }
`;

export const FooterEmail = styled(motion.h1)`
    font-family: 'Libre Baskerville', serif;
    @media (max-width: 420px) {
        font-size: 1.35rem;
        margin-bottom: 30px;
    }
`;

export const FooterIcons = styled(motion.div)`
    display: flex;
    align-items: center;
    svg {
        margin: 0 10px;
        width: 32px;
        height: 32px;
        path {
            fill: ${props => props.theme.text}
        }
    }
`;