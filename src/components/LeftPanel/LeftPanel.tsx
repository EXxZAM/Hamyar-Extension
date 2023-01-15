import styled from "styled-components";
import Calendar from "./Calendar/Calendar";
import Time from "./Time/Time";
import Today from "./Today/Today";
import Weather from "./Weather/Weather";

export const LeftPanel = () => {
    return (
        <Container>
            <div className="firstRow">
                <Time />
                <Weather />
            </div>
            <div className="DateTools">
                <Today />
                <Calendar />
            </div>
        </Container>
    );
};

const Container = styled.div`
    .firstRow {
        display: grid;
        grid-template-columns: repeat(2, auto);
        justify-content: space-around;
        margin-bottom: 9px;
    }
    .DateTools {
        display: grid;
        grid-template-columns: repeat(1, auto);
        justify-content: space-around;
        grid-gap: 9px;
    }
    width: auto;
    border-radius: 10px;
`;
