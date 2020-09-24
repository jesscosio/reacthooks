import React from "react";

const viewportContext = React.createContext({});

export const ViewportProvider = ({children}) => {
    // The current width of the viewport
    const [width,setWidth] = React.useState(window.innerWidth);
    const [height,setHeight] = React.useState(window.innerHeight);

    React.useEffect(()=>{
        const handleWindowResize = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        }
        /* updates "width" state variable when the window size changes */
        window.addEventListener("resize", handleWindowResize);

        // Return a function from the effect that will remove the event listener
        return () => window.removeEventListener("resize", handleWindowResize);

        /* pass empty array to signify we want the effect to run only when the component mounts
        and not each time it updates */
    }, []);

    // Store height and width in values of the provider
    return (
        <viewportContext.Provider value={{width, height}}>
            {children}
        </viewportContext.Provider>
    );
}

export const useViewport = () => { 
    const {width,height} = React.useContext(viewportContext);
    return {width,height};
}

export default ViewportProvider;