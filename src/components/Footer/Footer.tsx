import styled from "styled-components";
import { useTheme } from "../../contexts/ThemeContext";
const Footer = () => {
    const { theme }: any = useTheme();
    return (
        <Container className={`bg${theme}`}>
            <div>
                <a href="https://t.me/exxzam">
                    <i className="fa fa-brands fa-telegram"></i>
                </a>
                <a href="https://instagram.com/mahdi12ad">
                    <i className="fa fa-brands fa-instagram"></i>
                </a>
                <a href="mailto:mahdiolamaei@proton.me">
                    <i className="fa fa-solid fa-at"></i>
                </a>
            </div>
            <span>
                Made By
                <i className="fa fa-brands fa-github"></i>
                <a href="https://github.com/exxzam"> Mahdi Olamaei</a>
                <span style={{ marginRight: "10px" }}>
                    Inspired by: <a href="https://dastyar.io">Dastyar Chrome</a>
                </span>
            </span>
        </Container>
    );
};

const Container = styled.div`
    position: fixed;
    bottom: 0;
    display: flex;
    width: 100%;
    height: auto;
    justify-content: space-around;
    z-index: 20;
    padding: 5px;
    padding-bottom: 0;
    background-color: rgba(72, 82, 94, 0.9) !important;
    color: white;
    a {
        text-decoration: none;
    }
    i {
        margin-left: 10px;
        color: white;
    }
    span {
        width: auto;
        display: inline-block;
        i {
            margin-left: 10px;
        }
        a {
            text-decoration: none;
            color: #1977f3 !important;
        }
    }
`;
export default Footer;
