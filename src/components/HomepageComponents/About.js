import React, { useEffect, useState } from 'react'
import { Container, Flex } from '../styles/GlobalComponents'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion';
import { useGlobalStateContext } from '../../context/GlobalContext';
import { AboutContent, AccordionContent, AccordionHeader, AccordionIcon, HomeAbout, Skills, Span } from '../styles/HomeComponents';

const accordionIds = [
    {
        id: 0,
        title: "Web & Mobile App",
        results: [
            "ReactJs | VanillaJs",
            "Flutter",
            "Django | NodeJs",
            "Material-Ui | Bootstrap",
        ],
    },
    {
        id: 1,
        title: "Database",
        results: [
            "Firebase",
            "PostgreSQL",
            "SQLite",
            "MongoDB"
        ],
    },
    {
        id: 2,
        title: "Design & Prototype",
        results: [
            "Figma",
            "AdobeXd",
            "Photoshop",
            "Illustrator"
        ],
    },
    {
        id: 3,
        title: "Programming",
        results: [
            "Python",
            "JavaScript",
            "C++ & C#",
            "Dart",
        ],
    },

];



const About = ({ onCursor }) => {

    const [expanded, setExpanded] = useState(0);
    const Animation = useAnimation();
    const [aboutRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-70px',
    });
    useEffect(() => {
        if (inView) {
            Animation.start('visible')
        }

    }, [Animation, inView]);
    return (
        <HomeAbout id="about" ref={aboutRef}
            animate={Animation}
            initial='hidden'
            variants={{
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: .6, ease: [.6, .05, -.01, .9] }
                },
                hidden: {
                    opacity: 0,
                    y: 172,
                },
            }}
        >
            <Container>
                <Flex className="AboutFlex" alignTop >
                    <AboutContent>
                        <h2>
                            I'm a <Span>Rookie Dev</Span> and<br /> <Span>Passionate Web Developer,</Span> familiar with a wide range of programming knowledge.
                        </h2>
                        <p>
                            I see myself as a collaborative team player with excellent technical abilities like finding solutions to challenges and focused on customer satisfaction. I'm also an undergraduate <b>Computer Science</b> student. I learned <i>game development</i> and <i>3D modelling</i> as a hobby and I also listen to podcasts. <b>Fun fact:</b> I'm a dog person without a dog.
                        </p>
                    </AboutContent>
                    <Skills>
                        <h3>
                            What do I know & use?
                        </h3>
                        <div className="AccordianCont">
                            {
                                accordionIds.map((details, index) => (
                                    <Accordion
                                        onCursor={onCursor} key={index} data={details} expanded={expanded} setExpanded={setExpanded} />
                                ))
                            }
                        </div>
                    </Skills>
                </Flex>
            </Container>

        </HomeAbout>
    )
}


const Accordion = ({ data, expanded, setExpanded, onCursor }) => {
    // const { isDark } = useGlobalStateContext();
    const isOpened = data.id === expanded;
    const [hovered, setHovered] = useState(false);
    return (
        <div className="Accordian">
            <AccordionHeader
                onClick={() => setExpanded(isOpened ? false : data.id)}
                onMouseEnter={() => onCursor("cursorTheme")}
                onMouseLeave={onCursor}
                onHoverStart={() => setHovered(!hovered)}
                onHoverEnd={() => setHovered(!hovered)}
                whileHover={{
                    color: '#ffffff'
                }}
            >
                <AccordionIcon>
                    <motion.span
                        animate={{ rotate: isOpened || hovered ? 0 : 45, x: 3 }}
                        transition={{ duration: .6, ease: [.6, .05, -.01, .9] }}
                    ></motion.span>
                    <motion.span
                        animate={{ rotate: isOpened || hovered ? 0 : -45, x: -3 }}
                        transition={{ duration: .6, ease: [.6, .05, -.01, .9] }}
                    ></motion.span>
                </AccordionIcon>
                {data.title}
            </AccordionHeader>
            <AccordionContent key='content' animate={{ height: isOpened ? '100%' : '0' }} transition={{ duration: .6, ease: [.6, .05, -.01, .9] }}>
                {
                    data.results.map((text, index) => (
                        <span key={index}>{text}</span>
                    ))
                }
            </AccordionContent>
        </div>
    );
}


export default About
