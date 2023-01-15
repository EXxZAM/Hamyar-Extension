import { useEffect, useState } from "react";
import styled from "styled-components";
import { useTheme } from "../../../contexts/ThemeContext";

const Time = () => {
    function toFarsiNumber(n: any) {
        const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];

        return n.toString().replace(/\d/g, (x: any) => farsiDigits[x]);
    }
    const { theme }: any = useTheme();
    const [time, setTime] = useState<string | null>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    useEffect(() => {
        setInterval(() => {
            if (isLoading) {
                setIsLoading(false);
            }
            const hour =
                new Date().getHours() >= 10
                    ? new Date().getHours()
                    : `0${new Date().getHours()}`;
            const minute =
                new Date().getMinutes() >= 10
                    ? new Date().getMinutes()
                    : `0${new Date().getMinutes()}`;
            setTime(toFarsiNumber(hour) + ":" + toFarsiNumber(minute));
        }, 1000);
    }, [isLoading]);
    return (
        <Container className={`bg${theme}`}>
            {isLoading ? <p>در حال دریافت</p> : <h1>{time}</h1>}

            <a href="https://www.bahesab.ir/time/timer/?utm_source=dastyar&utm_medium=taghvim&utm_campaign=partner">
                <i className="fa fa-stopwatch"></i> زمان سنج{" "}
            </a>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 116px;
    height: 122px;
    padding: 2px;
    border-radius: 1.3rem;
    color: white;
    h1 {
        font-size: 25px;
        margin-top: 35%;
        flex-grow: 1;
    }
    a {
        text-decoration: none;
        font-size: 13px;
    }
`;
export default Time;
