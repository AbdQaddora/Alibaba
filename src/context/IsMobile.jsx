import React, { createContext, useContext, useEffect, useState } from 'react'
const IsMobileContext = createContext(false);

export const useIsMobile = () => {
    return useContext(IsMobileContext);
}

const getInatialIsMobileValue = () => {
    if (window.innerWidth > 920) {
        return false;
    }else{
        return true;
    }
}

const IsMobileProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(getInatialIsMobileValue());

    useEffect(() => {
        window.addEventListener("resize", () => {
            if (window.innerWidth > 920 && isMobile) {
                setIsMobile(false);
            }

            if (window.innerWidth <= 920 && !isMobile) {
                setIsMobile(true);
            }
        })

    }, [isMobile]);

    return (
        <IsMobileContext.Provider value={isMobile}>
            {children}
        </IsMobileContext.Provider>
    )
}

export default IsMobileProvider