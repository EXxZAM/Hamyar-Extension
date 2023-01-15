import React, { useEffect, useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import styled from "styled-components";
import Footer from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { LeftPanel } from "./components/LeftPanel/LeftPanel";
import { MiddlePanel } from "./components/MiddlePanel/MiddlePanel";
import RightPanel from "./components/RightPanel/RightPanel";
import { useBackground } from "./contexts/BackgroundContext";
import { useColors } from "./contexts/ColorsContext";
function App() {
    const { background }: any = useBackground();
    const { colors }: any = useColors();

    let images;
    background !== "default"
        ? (images = background)
        : (images = process.env.PUBLIC_URL + `/backgrounds/background.jpg`);
    const [isSmall, setSmall] = useState<Boolean>(window.innerWidth <= 1200);

    const updateMedia = () => {
        setSmall(window.innerWidth <= 1200);
    };

    useEffect(() => {
        window.addEventListener("resize", updateMedia);
        return () => window.removeEventListener("resize", updateMedia);
    });
    return (
        <>
            <HelmetProvider>
                {isSmall ? (
                    <>
                        <MainAppSmall>
                            <Header />
                            <SmallContainer>
                                <MiddlePanel />
                                <div className="panels">
                                    <RightPanel />
                                    <div
                                        style={{
                                            marginRight: "10px",
                                        }}
                                    >
                                        <LeftPanel />
                                    </div>
                                </div>{" "}
                            </SmallContainer>{" "}
                        </MainAppSmall>{" "}
                        <footer>
                            <Footer />
                        </footer>
                    </>
                ) : (
                    <>
                        <MainApp>
                            <Header />
                            <Container>
                                <RightPanel />
                                <MiddlePanel />
                                <LeftPanel />
                            </Container>
                        </MainApp>
                        <footer style={{ marginTop: "20px" }}>
                            <Footer />
                        </footer>
                    </>
                )}

                <Helmet>
                    <style>
                        {`
                        body { 
                            background-image: url(${images}); 
                        }
                        `}
                    </style>
                    {colors !== "default" ? (
                        <style>
                            {`
                            .bgDark {
                                background-color: ${colors} !important;
                                color: white !important;
                            }
                            .bgLight {
                                background-color: ${colors} !important;
                                color: #3d518f !important;
                            }
                            ::-webkit-scrollbar {
                                width: 10px;
                                border-radius: 1.3rem;
                            }
                            ::-webkit-scrollbar-track {
                                border-radius: 1.3rem;
                            }
                            ::-webkit-scrollbar-thumb {
                                background: ${colors};
                                border-radius: 1.3rem;
                            }
                            ::-webkit-scrollbar-thumb:hover {
                                background: ${colors};
                                border-radius: 1.3rem;
                            }
                            `}
                        </style>
                    ) : (
                        <style>
                            {`
                            .bgDark {
                                background-color: rgba(72, 82, 94, 0.9) !important;
                                color: white !important;
                            }
                            .bgLight {
                                background-color: #f4f4f4 !important;
                                color: #3d518f !important;
                            }
                            `}
                        </style>
                    )}
                    {isSmall && (
                        <style>
                            {` body {
                            
                                overflow-y: overlay !important;
                        }`}
                        </style>
                    )}
                </Helmet>
            </HelmetProvider>
        </>
    );
}

const MainApp = styled.div`
    width: 1152px;
    height: 688px;
    margin: auto;
`;

const MainAppSmall = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    height: 100%;
    margin: auto;
    padding: 0 10px 0 10px;
    .panels {
        display: flex;
        justify-items: space-around;
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    height: 587px;
`;

const SmallContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 100px;
`;

export default App;
