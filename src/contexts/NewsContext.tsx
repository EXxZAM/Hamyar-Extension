import React, { useContext } from "react";
import useLocalStorage from "../hooks/useLocalStorage";

const NewsContext = React.createContext({});
export const useNews = () => {
    return useContext(NewsContext);
};

export const NewsProvider = ({ children }: any) => {
    const [showNews, setShowNews] = useLocalStorage("SHOW_NEWS", "false");

    const updateLayout = () => {
        if (showNews === "true") {
            localStorage.setItem("SHOW_NEWS", "false");
            setShowNews("false");
        }
        if (showNews === "false") {
            localStorage.setItem("SHOW_NEWS", "true");
            setShowNews("true");
        }
    };

    return (
        <NewsContext.Provider
            value={{
                showNews,
                updateLayout,
                setShowNews,
            }}
        >
            {children}
        </NewsContext.Provider>
    );
};
