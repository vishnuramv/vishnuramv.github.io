import { motion } from 'framer-motion';
import styled, { css } from 'styled-components'


export const BannerContainer = styled(motion.div)`
    background: ${props => props.theme.background};
    height: 100vh;
    width: 100%;
    position: relative;
    /* margin-bottom: 296px; */
`;

export const BannerBackground = styled.div`
    height: 100vh;
    width: 100%;
    overflow: hidden !important;
`;

export const BannerTop = styled.div`
    height: 50vh;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    @media (max-width: 770px) {
        display: none;
    }
`;
export const BannerBottom = styled.div`
    height: 50vh;
    width: 100%;
    display: flex;
    @media (max-width: 770px) {
        height: 100vh;
        flex-wrap: wrap !important;
    }
`;

export const BannerImage = styled.div`
    height: 100%;
    flex: 1;
    min-width: 200px;
    /* width: 100%; */
    /* background-image: ${props => props.imgUrl}; */
    box-shadow: inset 0 0px 400px ${props => props.theme.background};
    max-height: 50vh;
`;

export const Canvas = styled.canvas`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100% !important;
    max-width: 100vw !important;
    min-height:100vh !important;
    min-width: 100vw !important;
    display: block;
`;

export const BannerContent = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    pointer-events: none;
`;

export const HeadLine = styled(motion.h1)`
    font-size: 72px;
    /* font-weight: bolder; */
    margin-bottom: 0;
    text-transform: uppercase;
    font-family: 'Libre Baskerville', serif;
    text-align: center;
    @media (max-width: 770px) {
        font-size: 52px;
    }
    @media (max-width: 420px) {
        font-size: 40px;
    }
`;

export const SubText = styled(motion.h4)`
    font-size: 24px;
    text-align: center;
    font-family: 'Source Sans Pro', sans-serif;
    @media (max-width: 420px) {
        font-size: 18px;
    }
`;

export const Buttons = styled(motion.div)`
    width: 35%;
    display: flex;
    justify-content: space-between;
    @media (max-width: 840px) {
        width: 50%;
    }
    @media (max-width: 420px) {
        width: 85%;
    }
`;
export const WorkButton = styled(motion.a)`
    padding: 10px;
    border: 3px solid ${props => props.theme.text};
    /* background-color: #ea291e; */
    color: ${props => props.theme.red};
    font-weight: 700;
    letter-spacing: 1.5px;
    pointer-events: initial;
`;
export const ResumeButton = styled(motion.a)`
    padding: 10px;
    background-color: transparent;
    outline: none;
    color: ${props => props.theme.text} !important;
    /* background-color: #ea291ea4; */
    font-weight: 700;
    letter-spacing: 1.5px;
    border: 3px solid ${props => props.theme.red};
    pointer-events: initial;
`;



// About


export const HomeAbout = styled(motion.div)`
    min-height: 100vh;
    width: 100%;
    display: flex;
    /* justify-content: space-around; */
    align-items: center;
    /* overflow: hidden; */
    @media (max-width: 840px) {
        .AboutFlex {
            flex-direction: column;
        }
    }
`;
export const AboutContent = styled(motion.div)`
    /* width: 100%; */
    flex: 1;
    h2 {
        width: 90%;
        font-size: 2.3rem;
        font-weight: 400;
        color: ${props => props.theme.text};
        font-family: 'Libre Baskerville', serif;
    }
    p {
        max-width: 70%;
        font-size: 1rem;
        line-height: 1.6rem;
        color: ${props => props.theme.text};
        font-family: 'Source Sans Pro', sans-serif;
        i , b {
            color: ${props => props.theme.red};
        }
    }
    @media (max-width: 840px) {
        width: 100%;
        h2 {
            width: 100%;
            font-size: 2rem;
        }
        p {
            max-width: 100%;
        }
    }
    @media (max-width: 420px) {
        h2 {
            font-size: 1.4rem;
        }
    }
`;

export const Span = styled(motion.span)`
    color: ${props => props.theme.red};
`;

export const Skills = styled(motion.div)`
    margin-top: 20px;
    h3 {
        font-family: 'Libre Baskerville', serif;
    }
    @media (max-width : 840px) {
        .AccordianCont {
            display: flex;
            align-items: flex-start;
            flex-wrap: wrap;
        }
        .Accordian {
            margin-right: 10%;
        }
    }
`;

// Accordion

export const AccordionHeader = styled(motion.div)`
    width: 100%;
    color: ${props => props.theme.red};
    height: 32px;
    display: flex;
    align-items: center;
    font-weight: 600;
    font-size: 1.15rem;
    margin: 8px 0;
    font-family: 'Libre Baskerville', serif;
`;

export const AccordionIcon = styled(motion.div)`
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 8px;
    span {
        width: 16px;
        height: 4px;
        background: ${props => props.theme.red};
        transition: .1 ease-in-out;
    }
`;

export const AccordionContent = styled(motion.div)`
    overflow: hidden;
    padding-left: 40px;
    span {
        width: 100%;
        margin: 8px 0;
        font-size: .875rem;
        color: ${props => props.theme.text};
        display: block;
        font-weight: 300;
        font-family: 'Source Sans Pro', sans-serif;
    }
`;


// Projects

export const ProjectContainer = styled(motion.div)`
    min-height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    overflow-x: hidden;
`;

export const ProjectHead = styled(motion.h1)`
    margin: 36px 0;
    color: ${props => props.theme.red};
    font-size: 36px;
    font-weight: 700;
    font-family: 'Libre Baskerville', serif;
    @media (max-width: 420px) {
        font-size: 1.8rem;
    }
`;

export const ProjectRow = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 5px;
    @media (max-width: 420px) {
        flex-direction: column;
        justify-content: space-around;
    }
`;

export const Project = styled(motion.a)`
    position: relative;
    overflow: hidden;
    margin-right: 10px;
    img {
        height: 275px;
        width: 100%;
        min-width: 350px;
    }
    ${props => props.flex1 && css`
        flex: 1;
    `}
    @media (max-width: 390px) {
        img {
            min-width: unset;
        }
    }
`;

export const ProjectContent = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    height: 275px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-family: 'Source Sans Pro', sans-serif;
    ${props => props.dark && css`
        box-shadow: inset 0 0px 100px 40px black;
    `}
`;

export const ProjectButtons = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-around;
    width: 60%;
    margin-top: 10%;
    ${props => props.small && css`
        width: 80%;
    `}
`;

export const ProjectButton = styled(motion.a)`
    padding: 10px;
    font-weight: 700;
    letter-spacing: 1.5px;
    /* pointer-events: initial; */
    border: 3px solid white;
    color: ${props => props.theme.red};
    ${props => props.source && css`
        color: white;
        border: 3px solid ${props => props.theme.red};
    `}
`;

export const ProjectTitle = styled(motion.h2)`
    position: absolute;
    bottom: 10px;
    color: white
`;

// Contact

export const ContactSection = styled(motion.div)`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    @media (max-width: 420px) {
        .ContactFlex {
            flex-direction: column;
        }
    }
    @media (max-width: 840px) {
        .ContactContainer {
            margin: 0 5%;
        }
    }
`;


export const ContactContent = styled(motion.div)`
`;

export const ContactForm = styled(motion.form)`
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    justify-content: space-around;
    width: 100%;
    min-height: 50vh;
    /* margin-right: 3%; */
    input, textarea {
        min-width: 300px;
        border: none;
        outline: none;
        padding: 10px;
        background-color: ${props => props.theme.isDark ? '#111' : '#eeeeee'};
        font-family: 'Source Sans Pro', sans-serif;
        color: ${props => props.theme.text};
        font-size: 1.01rem;
        font-weight: 600;
    }
`;

export const ContactTitle = styled(motion.h1)`
    color: ${props => props.theme.red};
    font-size: 52px;
    font-weight: 700;
    font-family: 'Libre Baskerville', serif;
    margin-top: 0;
`;

export const ContactText = styled(motion.p)`
    max-width: 70%;
    font-size: 1.2rem;
    line-height: 1.6rem;
    font-weight: 600;
    color: ${props => props.theme.text};
    font-family: 'Source Sans Pro', sans-serif;
    @media (max-width: 770px) {
        max-width: 87%;
    }
    @media (max-width: 420px) {
        max-width: 100%;
    }
`;

export const ContactButton = styled(motion.button)`
    width: 30%;
    background-color: ${props => props.theme.red};
    font-family: 'Source Sans Pro', sans-serif;
    font-size: 1.1rem;
    letter-spacing: 1px;
    /* line-height: 1.6rem; */
    font-weight: 600;
    color: white;
    border-radius: 0;
    border: none;
    outline: none;
    padding: 10px;
`;

export const ContactSent = styled(motion.div)`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .MessageClose {
        font-size: 28px;
        color: ${props => props.theme.text};
    }
    .sentMessage {
        display: flex;
        align-items: center;
    }
    .green {
        color: green;
    }
    .red {
        color: red;
    }
`;