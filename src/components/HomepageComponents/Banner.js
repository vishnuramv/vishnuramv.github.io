import React from 'react';
import {
    BannerContainer,
    // BannerBackground,
    // BannerTop,
    // BannerBottom,
    // BannerImage,
    // Canvas,
    BannerContent,
    HeadLine,
    SubText,
    Buttons,
    WorkButton,
    ResumeButton
} from '../styles/HomeComponents';
// import useWindowSize from '../../hooks/useWindowSize';
// import { useGlobalStateContext } from '../../context/GlobalContext';
import { Flex } from '../styles/GlobalComponents';
const Banner = ({ onCursor }) => {
    // const canvas = useRef(null);
    // const { isDark } = useGlobalStateContext();

    // const size = useWindowSize();
    // useEffect(() => {
    //     const renderingElement = canvas.current;
    //     const drawingElement = renderingElement.cloneNode();

    //     const drawingCtx = drawingElement.getContext('2d');
    //     const renderingCtx = renderingElement.getContext('2d');

    //     let lastX;
    //     let lastY;
    //     let isMoving = false;
    //     renderingCtx.globalCompositeOperation = "source-over";
    //     renderingCtx.fillStyle = isDark ? "#000000" : "#ffffff";
    //     renderingCtx.fillRect(0, 0, size.width, size.height);
    //     // renderingCtx.font = "120px Roboto";
    //     // renderingCtx.fillStyle = "white";
    //     // renderingCtx.fillText("Hello World", size.width / 3, size.height / 2);
    //     renderingElement.addEventListener("mouseover", e => {
    //         isMoving = true
    //         lastX = e.pageX - renderingElement.offsetLeft
    //         lastY = e.pageY - renderingElement.offsetTop
    //     });

    //     renderingElement.addEventListener("click", e => {
    //         isMoving = true
    //         lastX = e.pageX - renderingElement.offsetLeft
    //         lastY = e.pageY - renderingElement.offsetTop
    //     });

    //     renderingElement.addEventListener("mouseup", e => {
    //         isMoving = false
    //         lastX = e.pageX - renderingElement.offsetLeft
    //         lastY = e.pageY - renderingElement.offsetTop
    //     });

    //     renderingElement.addEventListener("mousemove", e => {
    //         if (isMoving) {
    //             drawingCtx.globalCompositeOperation = "source-over"
    //             renderingCtx.globalCompositeOperation = "destination-out"
    //             const currentX = e.pageX - renderingElement.offsetLeft
    //             const currentY = e.pageY - renderingElement.offsetTop
    //             drawingCtx.lineJoin = "round"
    //             drawingCtx.moveTo(lastX, lastY)
    //             drawingCtx.lineTo(currentX, currentY)
    //             drawingCtx.closePath()
    //             drawingCtx.lineWidth = 80
    //             drawingCtx.stroke()
    //             lastX = currentX
    //             lastY = currentY
    //             renderingCtx.drawImage(drawingElement, 0, 0)
    //         }
    //     })
    // }, [isDark, size.width, size.height]);

    const parent = {
        initial: { scaleY: 1 },
        animate: {
            scaleY: 1,
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
        <BannerContainer onMouseEnter={() => onCursor("cursorRed")} onMouseLeave={onCursor}>
            {/* <BannerBackground>
                <BannerTop>
                    <BannerImage style={{ backgroundImage: `url(${require("../../assets/images/pic10.jpg")})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <BannerImage style={{ backgroundImage: `url(${require("../../assets/images/pic2.jpeg")})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }} />
                    <BannerImage style={{ backgroundImage: `url(${require("../../assets/images/pic11.jpg")})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <BannerImage style={{ backgroundImage: `url(${require("../../assets/images/pic9.jpg")})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'left', backgroundSize: 'cover' }} />
                    <BannerImage style={{ backgroundImage: `url(${require("../../assets/images/pic8.jpg")})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} />
                </BannerTop>
                <BannerBottom>
                    <BannerImage style={{ backgroundImage: `url(${require("../../assets/images/pic3.jpg")})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <BannerImage style={{ backgroundImage: `url(${require("../../assets/images/pic4.jpg")})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <BannerImage style={{ backgroundImage: `url(${require("../../assets/images/pic5.jpg")})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} />
                    <BannerImage style={{ backgroundImage: `url(${require("../../assets/images/pic1.jpg")})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'bottom', backgroundSize: 'cover' }} />
                    <BannerImage style={{ backgroundImage: `url(${require("../../assets/images/pic6.jpg")})`, backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover' }} />
                </BannerBottom>
            </BannerBackground> */}
            {/* <Canvas width={size.width} height={size.height} ref={canvas} /> */}
            <BannerContent>
                <Flex fColumn variants={parent} initial="initial" animate="animate">
                    <HeadLine variants={child}>Hi<span role="img" aria-label="hand-wave">👋</span> I'm Vishnu Ram,</HeadLine>
                    <SubText variants={child}>I'm a Web Developer. I do Freelance work and I would love to <br /> Collaborate with you...</SubText>
                    <Buttons variants={child}>
                        <WorkButton whileHover={{ color: "#ea291e", backgroundColor: "#ffffff" }} href="/#projects">See My Work</WorkButton>
                        <ResumeButton whileHover={{ color: "#ffffff", backgroundColor: "#ea291e" }} href="https://drive.google.com/file/d/1DcOeWxL-S2DuCjMD30zr3aLqzNJ8ZcDX/view?usp=sharing" target="_blank">See My Resume</ResumeButton>
                    </Buttons>
                </Flex>
            </BannerContent>
        </BannerContainer>
    )
}

export default Banner
