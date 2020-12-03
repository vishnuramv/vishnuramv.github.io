import React, { useEffect, useState } from 'react'
import { useGlobalStateContext } from '../context/GlobalContext';
import { Cursor } from './styles/GlobalComponents';

function CustomCursor({ toggleMenu }) {
    const [mousePosition, setMousePosition] = useState({
        x: 400,
        y: 400,
    });
    const onMouseMove = (event) => {
        const { pageX: x, pageY: y } = event;
        setMousePosition({ x, y });
    };
    const { cursorStyles, cursorType } = useGlobalStateContext();



    useEffect(() => {
        document.addEventListener('mousemove', onMouseMove);
        return () => {
            document.removeEventListener('mousemove', onMouseMove);
        }
    }, []);
    return (
        <>
            <Cursor className={`${cursorType ? "cursorRed" : ""} ${cursorType} ${toggleMenu ? "nav-open" : ""}`} style={{ left: `${mousePosition.x}px`, top: `${mousePosition.y}px` }} />
        </>
    )
}

export default CustomCursor
