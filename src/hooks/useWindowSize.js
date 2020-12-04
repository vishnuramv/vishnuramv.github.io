import { useEffect, useState } from 'react';

const useWindowSize = () => {
    const getSize = () => {
        return {
            width: (typeof window !== `undefined`) && window.innerWidth,
            height: (typeof window !== `undefined`) && window.innerHeight,
        }
    }
    const [windowSize, SetWindowSize] = useState(getSize);

    useEffect(() => {
        const handleResize = () => {
            SetWindowSize(getSize());
        }
        window.addEventListener('load', handleResize);
        window.addEventListener('resize', handleResize);

    }, [windowSize]);

    return windowSize;
}

export default useWindowSize;