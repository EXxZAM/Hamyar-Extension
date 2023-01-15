import moment from "jalali-moment";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { useTheme } from "../../../contexts/ThemeContext";
import { miladiDates } from "../../../utils/DatesData";
import { EventsShamsi } from "../../../utils/EventsData";

interface dateInterface {
    year?: string;
    month?: string;
    day?: string;
    monthNumber?: number;
}

const Today = () => {
    const { theme }: any = useTheme();
    const [date, setDate] = useState<dateInterface>();
    const [miladiDate, setMiladiDate] = useState<dateInterface>();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    let months: any;
    useEffect(() => {
        const monthNumber: string = moment().locale("fa").format("M");
        // eslint-disable-next-line react-hooks/exhaustive-deps
        months = {
            1: "فروردین",
            2: "اردیبهشت",
            3: "خرداد",
            4: "تیر",
            5: "مرداد",
            6: "شهریور",
            7: "مهر",
            8: "آبان",
            9: "آذر",
            10: "دی",
            11: "بهمن",
            12: "اسفند",
        };
        setIsLoading(false);
        setDate({
            year: moment().locale("fa").format("YYYY"),
            month: months[Number(monthNumber)],
            day: moment().locale("fa").format("D"),
            monthNumber: Number(monthNumber),
        });
        setMiladiDate({
            year: moment().locale("en").format("YYYY"),
            day: moment().locale("en").format("D"),
            monthNumber: Number(moment().locale("en").format("M")),
        });
    }, [months]);

    const miladiMonth: number | undefined = Number(miladiDate?.monthNumber);

    function toFarsiNumber(n: string | undefined | number) {
        const farsiDigits = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
        if (n !== undefined) {
            return n.toString().replace(/\d/g, (x: any) => farsiDigits[x]);
        } else {
            return n;
        }
    }
    return (
        <Container className={`bg${theme}`}>
            {isLoading ? (
                <h2>در حال دریافت</h2>
            ) : (
                <div className="dateInfo">
                    <p>{toFarsiNumber(date?.year)}</p>
                    <h1>{toFarsiNumber(date?.day)}</h1>
                    <h2>{toFarsiNumber(date?.month)}</h2>
                </div>
            )}

            <div className="leftPanel">
                <div className="dateConverted">
                    <ul>
                        <li>
                            {toFarsiNumber(miladiDate?.day)}
                            {miladiMonth && " " + miladiDates[miladiMonth]}
                            {" " + toFarsiNumber(miladiDate?.year)}
                        </li>
                        <li>
                            {toFarsiNumber(date?.year)}/
                            {toFarsiNumber(date?.monthNumber)}/
                            {toFarsiNumber(date?.day)}
                        </li>
                    </ul>
                </div>

                {!isLoading &&
                    EventsShamsi.filter(
                        (x) =>
                            x.day === date?.day?.toString() &&
                            x.month === date?.monthNumber?.toString()
                    ).map((x, index) => (
                        <div key={index} className="dateEvents">
                            <ul>
                                {x.isVacation ? (
                                    <li className="holiday">
                                        <p>{x.title}</p>
                                    </li>
                                ) : (
                                    <>
                                        <li>
                                            <p>{x.title}</p>
                                        </li>
                                    </>
                                )}
                            </ul>
                        </div>
                    ))}
            </div>
        </Container>
    );
};

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    grid-gap: 20px;
    justify-content: space-around;
    width: 243px;
    height: 92px;
    padding: 12px 8px;
    border-radius: 1.3rem;

    .leftPanel {
        display: flex;
        flex-direction: column;
    }
    .dateInfo {
        margin-right: 30px;
        display: flex;
        width: 52px;
        height: 92px;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        h2 {
            font-weight: 100;
        }
    }
    .dateEvents {
        margin-right: 15px;
        font-size: 12px;
    }
    .dateConverted {
        margin-right: 15px;
        font-size: 12px;
        color: #ffb602;
        display: flex;
        flex-direction: column;
    }
    .holiday {
        color: red;
    }
    .holiday::after {
        content: "(تعطیل)";
    }
`;
export default Today;
