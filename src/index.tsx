import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BackgroundProvider } from "./contexts/BackgroundContext";
import { ColorsProvider } from "./contexts/ColorsContext";
import { ItemsProvider } from "./contexts/ItemsContext";
import { NewsProvider } from "./contexts/NewsContext";
import { TasksProvider } from "./contexts/TaskContext";
import { ThemeProvider } from "./contexts/ThemeContext";
import "./index.css";
const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);
root.render(
    <React.StrictMode>
        <TasksProvider>
            <ItemsProvider>
                <ThemeProvider>
                    <NewsProvider>
                        <BackgroundProvider>
                            <ColorsProvider>
                                <App />
                            </ColorsProvider>
                        </BackgroundProvider>
                    </NewsProvider>
                </ThemeProvider>
            </ItemsProvider>
        </TasksProvider>
    </React.StrictMode>
);
