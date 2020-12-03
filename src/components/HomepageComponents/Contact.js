import React, { useEffect, useState } from 'react'
import { Container, Flex } from '../styles/GlobalComponents'
import { ContactContent, ContactForm, ContactSection, ContactTitle, ContactText, ContactButton, ContactSent } from '../styles/HomeComponents';
import { motion, useAnimation } from 'framer-motion'
import db from '../../firebase';
import { firestore } from 'firebase'
import { useInView } from 'react-intersection-observer';

const Contact = ({ onCursor }) => {
    const [input1, setInput1] = useState(false);
    const [input2, setInput2] = useState(false);
    const [input3, setInput3] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [isSent, setIsSent] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);

    const sendMessage = (e) => {
        e.preventDefault();
        if (name !== "" && email !== "" && message !== "") {
            db.collection('messages').add({
                name: name,
                email: email,
                message: message,
            }).then(() => { setIsSent(true); console.log("message sent") });
            setName("");
            setEmail("");
            setMessage("");
            setIsEmpty(false);
        }
        else {
            setIsEmpty(true);
        }
    }
    const Animation = useAnimation();
    const [contactRef, inView] = useInView({
        triggerOnce: true,
        rootMargin: '-70px',
    });
    useEffect(() => {
        if (inView) {
            Animation.start('visible')
        }

    }, [Animation, inView]);

    return (
        <ContactSection
            id="about"
            ref={contactRef}
            animate={Animation}
            initial='hidden'
            variants={{
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: .61, ease: [.6, .05, -.01, .9] }
                },
                hidden: {
                    opacity: 0,
                    y: 172,
                },
            }}

        >
            <Container className="ContactContainer">
                <Flex className="ContactFlex" alignTop>
                    <ContactContent>
                        <ContactTitle>
                            Let's Talk
                        </ContactTitle>
                        <ContactText>
                            I'm interested in friendly collaborations and freelance opportunities. However, if you have any idea, feedback or wanna say Hi feel free to leave a message or contact me...
                        </ContactText>
                    </ContactContent>
                    <ContactForm>
                        <motion.input onFocus={() => setInput1(true)} onBlur={() => setInput1(false)} animate={{ borderTop: input1 ? "1px solid gray" : "none", borderLeft: input1 ? "1px solid gray" : "none", borderRight: input1 ? "1px solid gray" : "none", transition: { duration: 1, ease: [.6, .05, -.01, .9] } }} initial={{ borderBottom: "1px solid gray" }} value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Name*" />
                        <motion.input onFocus={() => setInput2(true)} onBlur={() => setInput2(false)} animate={{ borderTop: input2 ? "1px solid gray" : "none", borderLeft: input2 ? "1px solid gray" : "none", borderRight: input2 ? "1px solid gray" : "none", transition: { duration: 1, ease: [.6, .05, -.01, .9] } }} initial={{ borderBottom: "1px solid gray" }} value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="Email" id="Email-Input" placeholder="Email Id*" />
                        <motion.textarea onFocus={() => setInput3(true)} onBlur={() => setInput3(false)} animate={{ borderTop: input3 ? "1px solid gray" : "none", borderLeft: input3 ? "1px solid gray" : "none", borderRight: input3 ? "1px solid gray" : "none", transition: { duration: 1, ease: [.6, .05, -.01, .9] } }} initial={{ borderBottom: "1px solid gray" }} value={message} onChange={(e) => setMessage(e.target.value)} name="Text" id="Text-Input" cols="30" rows="5" placeholder="Message*"></motion.textarea>
                        <ContactSent>
                            <ContactButton
                                type="submit"
                                onClick={sendMessage}
                                onMouseEnter={() => onCursor("cursorTheme")}
                                onMouseLeave={onCursor}
                            >Send</ContactButton>
                            {
                                isSent && (
                                    <div className="sentMessage green">
                                        <p>Message Sent &nbsp; </p>
                                        <span className="MessageClose" onClick={() => setIsSent(false)}>&times;</span>
                                    </div>
                                )
                            }
                            {
                                isEmpty && (
                                    <div className="sentMessage red">
                                        <p>Message not filled &nbsp; </p>
                                        <span className="MessageClose" onClick={() => setIsEmpty(false)}>&times;</span>
                                    </div>
                                )
                            }
                        </ContactSent>
                    </ContactForm>
                </Flex>
            </Container>
        </ContactSection >
    )
}

export default Contact
