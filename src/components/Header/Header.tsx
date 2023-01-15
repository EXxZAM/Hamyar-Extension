import { useState } from "react";
import styled from "styled-components";
import SettingsPanel from "./SettingsPanel/SettingsPanel";

export const Header = () => {
    const [showSettingsPanel, setShowSettingsPanel] = useState(false);
    return (
        <Container>
            <div className="rightHeader">
                <h2>همیار</h2>
            </div>
            <div className="leftHeader">
                <img
                    className="gearIcon"
                    src="/gear.png"
                    alt="settings"
                    onClick={() => setShowSettingsPanel(!showSettingsPanel)}
                />
                <SettingsPanel show={showSettingsPanel} />
            </div>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    width: auto;
    margin: 8px;
    height: 40px;
    justify-content: space-between;

    .gearIcon {
        cursor: pointer;
        width: 24px;
        filter: invert(100%);
    }

    svg {
        display: inline-block;
        width: 40px;
        height: auto;
        background-color: #1977f3;
        border-radius: 15px;
    }

    .rightHeader {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    h2 {
        color: #1a77f3;
    }

    .leftHeader {
        margin-top: 1.5%;
        display: grid;
        flex-direction: column;
        align-items: top;
        justify-items: end;
    }

    i {
        cursor: pointer;
        background-image: url("/gear.png");
    }

    .logotrans {
        width: 100px;
    }
`;
