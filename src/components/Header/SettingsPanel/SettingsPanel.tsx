import { useEffect, useState } from "react";
import { RgbaStringColorPicker } from "react-colorful";
import styled from "styled-components";
import tinycolors from "tinycolor2";
import { useBackground } from "../../../contexts/BackgroundContext";
import { useColors } from "../../../contexts/ColorsContext";
import { useTheme } from "../../../contexts/ThemeContext";

const SettingsPanel = ({ show }: { show: boolean }) => {
    const [showColors, setShowColors] = useState<boolean>(false);
    const [showForm, setShowForm] = useState<boolean>(false);
    const { updateColors, colors, saveColor, colorList, removeColors }: any =
        useColors();
    const [colorState, setColorState] = useState<string>(colors);

    const {
        background,
        updateBackground,
        backgroundList,
        removeHistory,
        addHistory,
    }: any = useBackground();
    const { updateTheme, theme }: any = useTheme();

    useEffect(() => {
        if (tinycolors(colorState).isLight() && colorState !== "default") {
            if (theme === "Dark") {
                updateTheme();
            }
        } else if (
            tinycolors(colorState).isDark() &&
            colorState !== "default"
        ) {
            if (theme === "Light") {
                updateTheme();
            }
        }

        updateColors(colorState.toString());
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [colorState]);

    const handleColor = () => {
        setShowColors(!showColors);
    };

    return (
        <div>
            {show ? (
                <Wrapper>
                    <i className="fa fa-solid fa-caret-up" />
                    <Container className={`bg${theme}Settings`}>
                        <div className="settingItem">
                            <h3>حالت شب</h3>
                            <label className="switch setting " id="switch">
                                {theme === "Light" ? (
                                    <input
                                        type="checkbox"
                                        checked={false}
                                        onChange={() => {
                                            updateTheme();
                                            setColorState("default");
                                        }}
                                    />
                                ) : (
                                    <input
                                        type="checkbox"
                                        checked={true}
                                        onChange={() => {
                                            updateTheme();
                                            setColorState("default");
                                        }}
                                    />
                                )}
                                <span className="slider  round" />
                            </label>
                        </div>
                        <br />
                        <div className="settingItem">
                            <div className="bgSettingText">
                                <h3>تغییر تصویر پس زمینه</h3>
                            </div>
                        </div>

                        <br />
                        <div
                            style={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "space-between",
                                alignItems: "center",
                            }}
                        >
                            <p>پس زمینه های آماده:</p>
                            {background !== "default" ? (
                                <button
                                    onClick={() => {
                                        background !== "defualt" &&
                                            updateBackground("default");
                                    }}
                                >
                                    ریست
                                </button>
                            ) : (
                                <button className="disabled">ریست</button>
                            )}
                        </div>
                        <div className="images">
                            <>
                                <img
                                    onClick={() => {
                                        updateBackground("default");
                                    }}
                                    src={
                                        process.env.PUBLIC_URL +
                                        `/backgrounds/background.jpg`
                                    }
                                    alt="defaultBg"
                                    onError={(node) => {
                                        node.currentTarget.remove();
                                    }}
                                />

                                <img
                                    onClick={() => {
                                        updateBackground(
                                            process.env.PUBLIC_URL +
                                                `/backgrounds/background-1.jpg`
                                        );
                                    }}
                                    src={
                                        process.env.PUBLIC_URL +
                                        `/backgrounds/background-1.jpg`
                                    }
                                    alt="defaultBg"
                                    onError={(node) => {
                                        node.currentTarget.remove();
                                    }}
                                />

                                <img
                                    onClick={() => {
                                        updateBackground(
                                            process.env.PUBLIC_URL +
                                                `/backgrounds/background-2.jpg`
                                        );
                                    }}
                                    src={
                                        process.env.PUBLIC_URL +
                                        `/backgrounds/background-2.jpg`
                                    }
                                    alt="defaultBg"
                                    onError={(node) => {
                                        node.currentTarget.remove();
                                    }}
                                />

                                <img
                                    onClick={() => {
                                        updateBackground(
                                            process.env.PUBLIC_URL +
                                                `/backgrounds/background-3.jpg`
                                        );
                                    }}
                                    src={
                                        process.env.PUBLIC_URL +
                                        `/backgrounds/background-3.jpg`
                                    }
                                    alt="defaultBg"
                                    onError={(node) => {
                                        node.currentTarget.remove();
                                    }}
                                />
                            </>
                        </div>
                        <br />
                        {backgroundList.length !== 0 ? (
                            <>
                                <div className="imagesDefaults">
                                    <p>تاریخچه تصاویر پس زمینه:</p>

                                    <button
                                        onClick={() => {
                                            removeHistory();
                                        }}
                                    >
                                        حذف تاریخچه
                                    </button>
                                </div>
                                <div className="images">
                                    {backgroundList.map(
                                        (item: string, index: number) => (
                                            <div
                                                key={index}
                                                onClick={() => {
                                                    updateBackground(item);
                                                }}
                                                className="imageContainer"
                                            >
                                                <img
                                                    src={item}
                                                    alt="test"
                                                    onError={(node) => {
                                                        node.currentTarget.remove();
                                                    }}
                                                />
                                            </div>
                                        )
                                    )}
                                </div>
                            </>
                        ) : null}
                        <div className="colorSelector">
                            {!showForm ? (
                                <button
                                    onClick={() => {
                                        setShowForm(true);
                                    }}
                                    style={{ width: "100%" }}
                                >
                                    تصویر جدید
                                </button>
                            ) : (
                                <button
                                    onClick={() => {
                                        setShowForm(false);
                                    }}
                                    style={{ width: "100%" }}
                                >
                                    بستن فرم
                                </button>
                            )}
                        </div>
                        {showForm && (
                            <>
                                <br />
                                <div className="settingItem">
                                    <form
                                        onSubmit={(e: any) => {
                                            e.preventDefault();
                                            if (
                                                e.target.address.value.match(
                                                    /\.(jpeg|jpg|gif|png)$/
                                                ) !== null
                                            ) {
                                                updateBackground(
                                                    e.target.address.value
                                                );
                                                addHistory(
                                                    e.target.address.value
                                                );
                                                e.target.address.value = "";
                                                setShowForm(false);
                                            } else {
                                                alert(
                                                    "لینک وارد شده، قابل استفاده نبود."
                                                );
                                                e.target.address.value = "";
                                            }
                                        }}
                                    >
                                        <input
                                            type="url"
                                            placeholder="آدرس اینترنتی عکس"
                                            name="address"
                                            autoComplete="off"
                                            required
                                        />
                                        <input
                                            type="submit"
                                            className="submitBtn"
                                            value="تغییر تصویر"
                                        />
                                    </form>
                                </div>
                            </>
                        )}
                        <div className="colorSelector">
                            <div className="colorTitles">
                                <h3>تغییر رنگ پس زمینه</h3>{" "}
                                <div>
                                    <button
                                        className="buttons"
                                        onClick={handleColor}
                                    >
                                        {!showColors ? " انتخاب رنگ" : "بستن"}
                                    </button>
                                    {colorState !== "default" ? (
                                        <button
                                            onClick={() => {
                                                let text = "default";
                                                setColorState(text.toString());
                                            }}
                                        >
                                            حالت اولیه
                                        </button>
                                    ) : (
                                        <button
                                            onClick={() => {
                                                let text = "default";
                                                setColorState(text.toString());
                                            }}
                                            className="disabled"
                                        >
                                            حالت اولیه
                                        </button>
                                    )}
                                </div>
                            </div>
                            <div className="colorPicker">
                                {showColors ? (
                                    <>
                                        <ColorContainer>
                                            <RgbaStringColorPicker
                                                style={{
                                                    zIndex: 30,
                                                    display: "relative",
                                                }}
                                                color={colorState}
                                                onChange={setColorState}
                                            />
                                            <button
                                                onClick={() => {
                                                    saveColor(colorState);
                                                }}
                                            >
                                                ذخیره رنگ
                                            </button>
                                        </ColorContainer>
                                        {colorList.length !== 0 && (
                                            <>
                                                <div className="colorsHistory">
                                                    <p>رنگ های ذخیره شده:</p>

                                                    <button
                                                        onClick={() => {
                                                            removeColors();
                                                        }}
                                                    >
                                                        حذف رنگ ها
                                                    </button>
                                                </div>
                                                <div className="images">
                                                    {colorList &&
                                                        colorList.map(
                                                            (
                                                                color: string,
                                                                index: number
                                                            ) => (
                                                                <ColorBox
                                                                    onClick={() => {
                                                                        setColorState(
                                                                            color
                                                                        );
                                                                    }}
                                                                    key={index}
                                                                    style={{
                                                                        backgroundColor: `${color}`,
                                                                    }}
                                                                />
                                                            )
                                                        )}
                                                </div>
                                            </>
                                        )}
                                    </>
                                ) : null}
                            </div>
                        </div>
                    </Container>
                </Wrapper>
            ) : (
                <></>
            )}
        </div>
    );
};

const Wrapper = styled.div`
    position: relative;

    display: flex;
    flex-direction: column;
    align-content: flex-end;
    animation: fadein 0.3s ease-in;
    z-index: 50;
    .fa-caret-up {
        display: flex;
        justify-content: left;
        font-size: 20px;
        color: white;
        margin-left: 5px;
    }
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const Container = styled.div`
    width: 220px;
    height: auto;
    opacity: 100%;
    border: 2px solid #1977f3;
    border-radius: 10px;
    color: #135ebf;
    padding: 20px;
    font-weight: 200;
    font-size: 13px;
    .colorSelector {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: space-between;

        .colorTitles {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            margin-top: 5px;
            h3 {
                align-items: flex-end;
            }
            div {
                display: flex;
                flex-direction: row;
                justify-content: space-around;
                margin-top: 10px;

                button {
                    margin-right: 5px;
                }
            }
        }
        .colorPicker {
            align-self: center;
            margin-top: 10px;
        }
        button {
            font-size: 15px;
            border: none;
            color: white;
            width: 75px;
            height: 25px;
            border-radius: 4px;
            background-color: #1977f3;
            cursor: pointer;
            text-decoration: none;
        }
    }
    .cover {
        position: fixed;
        top: 0px;
        right: 0px;
        bottom: 0px;
        left: 0px;
    }
    .popover {
        position: absolute;
        z-index: 2;
    }
    .imagesDefaults,
    .colorsHistory {
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        button {
            border: none;
            width: 75px;
            padding: 5px;
            height: 25px;
            border-radius: 4px;

            cursor: pointer;
        }
    }

    .settingItem {
        display: flex;
        flex-direction: row;
        justify-content: space-between;

        form {
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            input {
                margin-left: 10px;
                width: 130px;
            }
            .submitBtn {
                font-size: 13px;
                border: none;
                color: white;
                width: 75px;
                height: 25px;
                border-radius: 4px;
                background-color: #1977f3;
                cursor: pointer;
            }
        }
    }
    .images,
    .colors {
        margin-top: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;

        img {
            margin-right: 5px;
            cursor: pointer;
            width: 50px;
            height: 30px;
        }
    }
    .switch {
        position: relative;
        display: inline-block;
        width: 60px;
        height: 34px;
    }

    .switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }

    .slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #121212;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    .slider:before {
        position: absolute;
        content: "";
        height: 26px;
        width: 26px;
        left: 4px;
        bottom: 4px;
        background-color: #ffffff;
        -webkit-transition: 0.4s;
        transition: 0.4s;
    }

    input:checked + .slider {
        background-color: #1977f3;
    }

    input:checked + .slider:before {
        -webkit-transform: translateX(26px);
        -ms-transform: translateX(26px);
        transform: translateX(26px);
    }

    .slider.round {
        border-radius: 34px;
    }

    .slider.round:before {
        border-radius: 50%;
    }

    button {
        border: none;
        width: 75px;
        padding: 5px;
        height: 25px;
        border-radius: 4px;
        background-color: rgba(255, 255, 255, 0);
        text-decoration: underline;
        cursor: pointer;
    }
`;

const ColorContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    button {
        margin-top: 10px;
    }
`;

const ColorBox = styled.div`
    cursor: pointer;
    margin-right: 5px;
    margin-top: 5px;
    width: 30px;
    height: 30px;
`;

export default SettingsPanel;
