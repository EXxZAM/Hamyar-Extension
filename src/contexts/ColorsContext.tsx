import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const ColorsContext = React.createContext({});
export const useColors = () => {
    return useContext(ColorsContext);
};

export const ColorsProvider = ({ children }: any) => {
    const [colors, setColors] = useLocalStorage("BACKGROUND_COLOR", "default");

    const [colorList, setColorList] = useLocalStorage("COLORLIST", []);

    const updateColors = (newColor: string) => {
        localStorage.setItem("BACKGROUND_COLOR", JSON.stringify(newColor));
        setColors(newColor);
    };

    const saveColor = (location: string) => {
        setColorList((pervItems: any) => {
            return [...pervItems, location];
        });
    };

    const removeColors = () => {
        localStorage.removeItem("COLORLIST");
        setColorList([]);
    };

    return (
        <ColorsContext.Provider
            value={{
                colors,
                updateColors,
                saveColor,
                removeColors,
                colorList,
            }}
        >
            {children}
        </ColorsContext.Provider>
    );
};
