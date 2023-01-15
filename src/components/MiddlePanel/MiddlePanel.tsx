import styled from "styled-components";
import AccessBar from "./AccessBar/AccessBar";
import SearchBar from "./SearchBar/SearchBar";

export const MiddlePanel = () => {
    return (
        <Container>
            <SearchBar />
            <AccessBar />
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: auto;
    border-radius: 10px;
`;
