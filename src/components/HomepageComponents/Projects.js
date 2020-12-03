import { useAnimation } from 'framer-motion';
import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer';
import { Container } from '../styles/GlobalComponents'
import { Project, ProjectContainer, ProjectRow, ProjectContent, ProjectButtons, ProjectButton, ProjectTitle, ProjectHead } from '../styles/HomeComponents'

const Projects = () => {
    const Animation = useAnimation();
    const [projectRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-70px',
    });
    useEffect(() => {
        if (inView) {
            Animation.start('visible')
        }

    }, [Animation, inView]);

    const parent = {
        initial: { backgroundColor: "rgba(0, 0, 0, 0)" },
        animate: {
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            transition: {
                staggerChildren: 0.2,
            },
        },
    }

    const child = {
        initial: {
            scaleY: 0,
            y: 100,
            opacity: 0,
        },
        animate: {
            scaleY: 1,
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: [.6, .05, -.01, .9]
            },
        },
    }

    return (
        <ProjectContainer
            id="projects"
            ref={projectRef}
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
            <ProjectHead>What have I done?</ProjectHead>
            <Container>
                <ProjectRow>
                    <Project href="https://netflix-reactclone.web.app" target="_blank" flex1>
                        <img src={require("../../assets/images/netflix.png")} alt="Netflix Clone" />
                        <ProjectContent variants={parent} initial="initial" whileHover="animate">
                            <ProjectButtons variants={child}  >
                                <ProjectButton whileHover={{ color: "red", backgroundColor: "#ffffff" }} href="https://netflix-reactclone.web.app" target="_blank">View Demo</ProjectButton>
                                <ProjectButton source whileHover={{ color: "#ffffff", backgroundColor: "#ea291e" }} href="https://github.com/vishnuramv/netflix-clone" target="_blank">View Source</ProjectButton>
                            </ProjectButtons>
                            <ProjectTitle variants={child} >Netflix Clone</ProjectTitle>
                        </ProjectContent>
                    </Project>
                    <Project href="https://whatsapp-clonereact.web.app" target="_blank">
                        <img src={require("../../assets/images/whatsapp.png")} alt="Whatsapp Clone" />
                        <ProjectContent variants={parent} initial="initial" whileHover="animate" dark>
                            <ProjectButtons variants={child} small>
                                <ProjectButton whileHover={{ color: "red", backgroundColor: "#ffffff" }} href="https://whatsapp-clonereact.web.app/" target="_blank">View Demo</ProjectButton>
                                <ProjectButton source whileHover={{ color: "#ffffff", backgroundColor: "#ea291e" }} href="https://github.com/vishnuramv/whatsapp-clone" target="_blank">View Source</ProjectButton>
                            </ProjectButtons>
                            <ProjectTitle variants={child} >Web.Whatsapp.com Clone</ProjectTitle>
                        </ProjectContent>
                    </Project>
                </ProjectRow>
                <ProjectRow>
                    <Project href="https://track-covid-react.web.app" target="_blank">
                        <img src={require("../../assets/images/covid.png")} alt="Covid Tracker" />
                        <ProjectContent variants={parent} initial="initial" whileHover="animate" dark>
                            <ProjectButtons variants={child} small>
                                <ProjectButton whileHover={{ color: "red", backgroundColor: "#ffffff" }} href="https://track-covid-react.web.app" target="_blank">View Demo</ProjectButton>
                                <ProjectButton source whileHover={{ color: "#ffffff", backgroundColor: "#ea291e" }} href="https://github.com/vishnuramv/covid19-tracker" target="_blank">View Source</ProjectButton>
                            </ProjectButtons>
                            <ProjectTitle variants={child} >Covid Tracker</ProjectTitle>
                        </ProjectContent>
                    </Project>
                    <Project href="https://spotify-reactclone.web.app" target="_blank" flex1>
                        <img src={require("../../assets/images/spotify.png")} alt="Spotify Clone" />
                        <ProjectContent variants={parent} initial="initial" whileHover="animate">
                            <ProjectButtons variants={child} >
                                <ProjectButton whileHover={{ color: "red", backgroundColor: "#ffffff" }} href="https://spotify-reactclone.web.app" target="_blank">View Demo</ProjectButton>
                                <ProjectButton source whileHover={{ color: "#ffffff", backgroundColor: "#ea291e" }} href="https://github.com/vishnuramv/spotify-clone" target="_blank">View Source</ProjectButton>
                            </ProjectButtons>
                            <ProjectTitle variants={child} >Spotify Clone</ProjectTitle>
                        </ProjectContent>
                    </Project>
                </ProjectRow>
            </Container>
        </ProjectContainer>
    )
}

export default Projects
