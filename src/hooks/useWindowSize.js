import { useEffect, useState } from 'react';

const useWindowSize = () => {
    const getSize = () => {
        return {
            width: window.innerWidth,
            height: window.innerHeight
        }
    }
    const [windowSize, SetWindowSize] = useState(getSize);

    useEffect(() => {
        const handleResize = () => {
            SetWindowSize(getSize());
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowSize;
}

export default useWindowSize;