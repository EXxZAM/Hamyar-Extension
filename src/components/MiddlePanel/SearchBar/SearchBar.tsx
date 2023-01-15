import styled from "styled-components";
import { useTheme } from "../../../contexts/ThemeContext";

const SearchBar = () => {
    const { theme }: any = useTheme();

    const searchGoogle = (e: any) => {
        e.preventDefault();
        const searchParam: string = e.target.searchInput.value;
        e.target.searchInput.value = "";
        window.open(`https://www.google.com/search?q=${searchParam}`);
    };
    return (
        <Container className={`bg${theme}`}>
            <StyledForm onSubmit={(e) => searchGoogle(e)}>
                <div className="googleSearch">
                    <span>&#x1F50E;&#xFE0E;</span>
                    <input
                        type="text"
                        name="searchInput"
                        placeholder="جستجو در گوگل"
                        required
                        onInvalid={(e: any) =>
                            e.target.setCustomValidity("الزامی!")
                        }
                        autoComplete="off"
                    />
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/2048px-Google_%22G%22_Logo.svg.png"
                        className="googleLogo"
                        alt="google logo"
                    />
                </div>
                <button
                    type="submit"
                    className="border-2 border-sky-800 dark:border-sky-600 py-2 md:w-2/12 w-4/12 rounded-3xl"
                >
                    جستجو
                </button>
            </StyledForm>
        </Container>
    );
};

const Container = styled.div`
    height: 40px;
    padding: 20px;
    border-radius: 10px;
`;

const StyledForm = styled.form`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    span {
        opacity: 0.5;
        font-size: 20px;
        color: black;
    }
    .googleSearch {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: #d1d5db;
        width: 370px;
        height: 32px;
        padding: 4px 20px 4px 16px;
        border-radius: 1.5rem;
    }

    input {
        margin-right: 5px;
        border: none;
        outline: none;
        width: 370px;
        height: 32px;
        background-color: #d1d5db;
    }
    button {
        background-color: #1977f3;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        width: 16.666667%;
        border-radius: 1.5rem;
        border: none;
        color: white;
        outline: none;
        font-size: 15px;
        cursor: pointer;
    }
    .googleLogo {
        width: 1.4rem;
        height: 1.4rem;
    }
`;

export default SearchBar;
