import React, { useState } from "react";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import type { Value } from "react-multi-date-picker";
import { Calendar as Calendar_fa } from "react-multi-date-picker";
import weekends from "react-multi-date-picker/plugins/highlight_weekends";
import "react-multi-date-picker/styles/backgrounds/bg-dark.css";
import "react-multi-date-picker/styles/colors/yellow.css";
import styled from "styled-components";
import { useTheme } from "../../../contexts/ThemeContext";

const Calendar = () => {
    const { theme }: any = useTheme();
    const [date, setDate] = useState<Value>(new Date());

    return (
        <Container className={`bg${theme}`}>
            {theme === "Dark" ? (
                // eslint-disable-next-line react/jsx-pascal-case
                <Calendar_fa
                    plugins={[weekends()]}
                    className="calendar white"
                    value={date}
                    onChange={setDate}
                    format="MM/DD/YYYY HH:mm:ss"
                    calendar={persian}
                    locale={persian_fa}
                />
            ) : (
                // eslint-disable-next-line react/jsx-pascal-case
                <Calendar_fa
                    plugins={[weekends()]}
                    className="calendar"
                    value={date}
                    onChange={setDate}
                    format="MM/DD/YYYY HH:mm:ss"
                    calendar={persian}
                    locale={persian_fa}
                />
            )}
            <button onClick={() => setDate(new Date())}>برگشت به امروز</button>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    z-index: 1;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 243px;
    height: 262px;
    padding: 20px 8px;
    border-radius: 1.3rem;
    font-size: 13px;
    position: relative;
    .white {
        span {
            color: white;
        }

        .rmdp-month-picker {
            background-color: rgba(72, 82, 94);
            border: 1px solid white;
        }
        .rmdp-year-picker {
            background-color: rgba(72, 82, 94);
            border: 1px solid white;
        }
    }
    .calendar {
        width: 100%;
        height: 100%;
        background: none;
        border: none;
        outline: none;
        box-shadow: none;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .iconNews {
        margin-left: 5px;
        font-size: 20px;
    }
    a {
        text-decoration: none;
        color: white;
        font-size: 15px;
        font-weight: lighter;
    }

    hr {
        background-color: white;
    }
    button {
        font-size: 15px;
        border: none;
        color: white;
        width: 90px;
        height: 25px;
        padding: 5px;
        border-radius: 4px;
        background-color: #1977f3;
        cursor: pointer;
    }
`;

export default Calendar;
