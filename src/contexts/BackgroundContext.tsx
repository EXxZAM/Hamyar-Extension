import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const BackgroundContext = React.createContext({});
export const useBackground = () => {
    return useContext(BackgroundContext);
};

export const BackgroundProvider = ({ children }: any) => {
    const [background, setBackground] = useLocalStorage(
        "BACKGROUND",
        "default"
    );
    const [backgroundList, setBackgroundList] = useLocalStorage(
        "BACKGROUNDLIST",
        []
    );

    const updateBackground = (location: string) => {
        if (background !== location) {
            localStorage.setItem(
                "BACKGROUND",
                JSON.stringify(location.toString())
            );
            setBackground(location.toString());
        }
    };

    const addHistory = (location: string) => {
        setBackgroundList((pervItems: any) => {
            return [...pervItems, location];
        });
    };

    const removeHistory = () => {
        localStorage.removeItem("BACKGROUNDLIST");
        setBackgroundList([]);
    };

    return (
        <BackgroundContext.Provider
            value={{
                background,
                updateBackground,
                backgroundList,
                removeHistory,
                addHistory,
            }}
        >
            {children}
        </BackgroundContext.Provider>
    );
};
