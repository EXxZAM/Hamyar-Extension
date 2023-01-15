import { FormEvent } from "react";
import styled from "styled-components";
import { useItems } from "../../../../contexts/ItemsContext";
import { useTheme } from "../../../../contexts/ThemeContext";

const AddItem = () => {
    const { addItem }: any = useItems();
    const { theme }: any = useTheme();
    const handleClose = () => {
        const containerDiv =
            document.querySelector<HTMLDivElement>(".AddItemContainer");
        containerDiv && containerDiv.classList.add("hidden");
    };
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const itemName = document.querySelector<HTMLInputElement>("#name");
        const itemUrl = document.querySelector<HTMLInputElement>("#url");
        addItem({ name: itemName?.value, url: itemUrl?.value });
        handleClose();
    };

    return (
        <>
            <Container className={`AddItemContainer hidden bg${theme}`}>
                <StyledForm
                    onSubmit={(e) => {
                        handleSubmit(e);
                    }}
                >
                    <div className="ItemsTitle">
                        <h1>آیتم جدید</h1>{" "}
                        <i
                            className="fa fa-times"
                            onClick={() => handleClose()}
                        ></i>
                    </div>{" "}
                    <br />
                    <div className="ItemsInputs">
                        <label htmlFor="itemName">عنوان</label>
                        <input
                            type="text"
                            id="name"
                            name="itemName"
                            maxLength={10}
                            placeholder="(حدکثر 10 کاراکتر)"
                            required
                            onInvalid={(e: any) =>
                                e.target.setCustomValidity("الزامی!")
                            }
                        />
                        <label htmlFor="urlItem">آدرس اینترنتی</label>
                        <input
                            type="url"
                            id="url"
                            name="urlItem"
                            placeholder="مثل : www.google.com"
                            required
                        />
                    </div>
                    <button>افزودن</button>
                </StyledForm>
            </Container>
        </>
    );
};

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    align-self: center;
    width: 410px;
    height: 200px;
    padding: 20px;
    border-radius: 10px;
    font-size: 15px;
    margin-top: 50px;
    animation: fadein 0.3s ease-in;

    h1 {
        font-size: 20px;
    }
    @keyframes fadein {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
`;

const StyledForm = styled.form`
    justify-content: space-around;

    .ItemsInputs {
        display: grid;
        grid-template-columns: repeat(2, auto);
        grid-gap: 10px;
    }
    .ItemsTitle {
        display: grid;
        grid-template-columns: repeat(2, auto);
        justify-content: space-between;
    }
    input {
        margin-right: 10px;
        border: 1px solid white;
        outline: none;
        border-radius: 5px;
        width: 300px;
        height: 30px;
    }
    button {
        width: 100%;
        background-color: #1977f3;
        outline: none;
        border: none;
        color: white;
        border-radius: 5px;
        margin-top: 20px;
        padding: 5px;
    }
`;
export default AddItem;
