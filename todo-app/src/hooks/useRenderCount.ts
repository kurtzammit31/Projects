import {useRef} from "react";

//useRef hook (unlike useState) does not cause a re-render when the value changes, so it is perfect for keeping track of render counts.
//without causing an infinite loop of re-renders, we can use useRef to keep track of how many times a component has rendered.
const useRenderCount = (): number => {
    const renderCount = useRef(0);
    renderCount.current += 1;
    return renderCount.current;
}

export default useRenderCount;