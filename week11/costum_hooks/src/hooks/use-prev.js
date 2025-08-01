import { useEffect, useRef } from "react"

export const usePrev = (value) => {
    const ref = useRef();
    console.log("re-render happned with new value " + value);

    
    useEffect(() => {
        ref.current = value;
    },[value]);

    return ref.current;
}