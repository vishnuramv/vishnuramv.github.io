import { useEffect, useState } from 'react';
import getFirebase from '../firebase'; // import our getFirebase function

export default function useFirebase() {
    const [firebase, setFirebase] = useState(null);

    useEffect(() => {
        setFirebase(getFirebase());
    }, []);

    return firebase;
} 