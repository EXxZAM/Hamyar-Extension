import React from "react";
import styled from "styled-components";
import { useTheme } from "../../../contexts/ThemeContext";
import { useFetch } from "../../../services/useFetch";
import {
    getWeatherDescription,
    translateWeather,
} from "../../../utils/WeatherData";
const Weather = () => {
    const { theme }: any = useTheme();
    const { isLoadingWeather, currentWeather, isConnected } = useFetch(
        "weather",
        `https://api.dastyar.io/api/Weather/112931`
    );
    function toFarsiNumber(n: any) {
        const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

        return n.toString().replace(/\d/g, (x: any) => farsiDigits[x]);
    }
    return (
        <Container className={`bg${theme}`}>
            {!isLoadingWeather ? (
                <>
                    <div className="weatherIfo">
                        <h1>
                            {currentWeather.main?.temp
                                ? toFarsiNumber(
                                      Math.floor(
                                          Number(currentWeather.main?.temp)
                                      )
                                  )
                                : ""}
                            °C
                        </h1>
                        <img
                            src={
                                currentWeather.weather[0]?.icon
                                    ? `http://openweathermap.org/img/w/${currentWeather.weather[0]?.icon}.png`
                                    : ""
                            }
                            alt="weather state"
                        />
                    </div>
                    <div>
                        <p>
                            {currentWeather.weather[0]?.description &&
                                translateWeather(
                                    currentWeather.weather[0]?.description
                                )}
                        </p>
                        <p>
                            {
                                getWeatherDescription(
                                    Math.floor(
                                        Number(currentWeather.main?.temp)
                                    )
                                )[0]
                            }
                        </p>
                        <br />
                    </div>
                    {/* <div className="footer">
                        <i className="fa fa-solid fa-cloud" />
                        <a href="https://openweathermap.org/city/112931">
                            <p>پیش بینی کامل</p>
                        </a>
                    </div> */}
                </>
            ) : !isConnected ? (
                <h4>تو که اینترنت نداری :( </h4>
            ) : (
                <h4>در حال دریافت</h4>
            )}
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-content: center;
    width: 116px;
    height: 122px;
    padding: 2px;
    border-radius: 1.3rem;
    text-align: center;

    .footer {
        display: flex;
        flex-direction: row;
        font-size: 10px;
        p {
            margin-right: 5px;
        }
    }
    .weatherIfo {
        display: grid;
        grid-template-columns: repeat(2, auto);
        justify-content: space-around;
    }
    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        align-content: center;

        font-size: 13px;
        width: auto;
    }
    h1 {
        font-size: 20px;
        font-weight: bold;
    }
    a {
        text-decoration: none;
        font-size: 13px;
    }
    img {
        width: 50px;
        transition: 0.5s;
        animation: cowmove 4s infinite;
    }
    p {
    }

    @keyframes cowmove {
        0% {
            transform: translateX(0) rotateY(0deg);
        }
        49% {
            transform: translateX(8px) rotateY(0deg);
        }
        50% {
            transform: translateX(8px) rotateY(0);
        }
        100% {
            transform: translateX(0) rotateY(0);
        }
    }
`;
export default React.memo(Weather);
