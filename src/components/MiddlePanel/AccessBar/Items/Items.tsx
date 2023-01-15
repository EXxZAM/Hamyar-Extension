import styled from "styled-components";
import { useItems } from "../../../../contexts/ItemsContext";
import { useTheme } from "../../../../contexts/ThemeContext";

interface ItemsProps {
    name?: string;
    link?: string;
    id?: string;
    id2?: string;
    defaultValue?: boolean;
}

const Items = ({ name, link, defaultValue, id }: ItemsProps) => {
    const { theme }: any = useTheme();
    const { deleteItem }: any = useItems();
    const OpenAddItem = () => {
        const containerDiv =
            document.querySelector<HTMLDivElement>(".AddItemContainer");
        containerDiv && containerDiv.classList.remove("hidden");
    };
    const handleDelete = () => {
        deleteItem({ id });
    };
    return (
        <>
            {name !== "+" ? (
                <Container className={`bg${theme}`}>
                    {!defaultValue && (
                        <i
                            className="fa fa-solid fa-trash-o"
                            onClick={() => {
                                handleDelete();
                            }}
                        ></i>
                    )}
                    <a href={link}>
                        {link ? (
                            <img
                                src={`https://s2.googleusercontent.com/s2/favicons?domain_url=${link}`}
                                alt="website's icon"
                            />
                        ) : (
                            <span></span>
                        )}
                        <p>{name}</p>
                    </a>
                </Container>
            ) : (
                <Container
                    onClick={() => {
                        OpenAddItem();
                    }}
                    className={`bg${theme}`}
                >
                    <h1 style={{ fontFamily: "calibri", opacity: "0.5" }}>
                        {name}
                    </h1>
                </Container>
            )}
        </>
    );
};

const Container = styled.div`
    cursor: pointer;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 85px;
    height: 85px;
    border-radius: 1.3rem;
    color: white;
    margin-bottom: 10px;
    margin-top: 0;
    a {
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    p {
        margin-top: 5px;
        font-weight: 200;
    }
    .plusItem {
        background-color: rgba(72, 82, 94, 0.9);
    }
    img {
        display: flex;
        flex-direction: row;
        align-items: center;
        border-radius: 1.5rem;
    }
    img:before {
        background-image: url("/no-image.jpg");
    }
    i {
        font-size: 10px;
        margin-bottom: 5px;

        opacity: 0;

        padding: 3px;
    }
    &:hover i {
        opacity: 1;
    }

    i:hover {
        color: black;
        background-color: white;
    }
`;
export default Items;
