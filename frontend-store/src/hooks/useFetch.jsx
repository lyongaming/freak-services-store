import { useState, useEffect, useRef } from 'react';

export const useFetch = url => {
    
    const isMounted = useRef(true);
    const [state, setState] = useState({ data: null, error: null });

    useEffect(() => {

        return () => {
            isMounted.current = false;
        }

    }, [])
    
    useEffect(() => {

        setState({ data: null, error: null });
        fetch(url)
            .then(resp => resp.json())
            .then(data => {
                if(isMounted.current) {
                    setState({ error: null, data });
                }
            })
            .catch(() => setState({ data: null, error: "Couldn't load the info" }))

    }, [url])

    return state;
    
}
