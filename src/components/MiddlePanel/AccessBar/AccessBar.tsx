import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef } from "react";
import styled from "styled-components";
import { useItems } from "../../../contexts/ItemsContext";
import AddItem from "./Items/AddItem";
import Items from "./Items/Items";

const AccessBar = () => {
    const { items }: any = useItems();
    const parent = useRef(null);

    useEffect(() => {
        parent.current && autoAnimate(parent.current);
    }, [parent]);
    return (
        <>
            <AddItem />
            <Container ref={parent}>
                <Items
                    name="گوگل"
                    link="https://google.com"
                    defaultValue={true}
                />
                <Items
                    name="آپارات"
                    link="https://aparat.com"
                    defaultValue={true}
                />
                <Items
                    name="تلگرام"
                    link="https://web.telegram.org/"
                    defaultValue={true}
                />
                <Items
                    name="واتساپ"
                    link="https://web.whatsapp.com"
                    defaultValue={true}
                />
                <Items
                    name="اینستاگرام"
                    link="https://instagram.com"
                    defaultValue={true}
                />
                <Items
                    name="اسنپ"
                    link="https://snapp.taxi"
                    defaultValue={true}
                />
                {items &&
                    items.map(
                        (
                            item: { id: string; name: string; url: string },
                            index: number
                        ) => {
                            return (
                                <Items
                                    key={index}
                                    name={item.name}
                                    link={item.url}
                                    id={item.id}
                                />
                            );
                        }
                    )}
                <Items name="+" />
            </Container>
        </>
    );
};

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(6, auto);
    justify-content: space-around;
    grid-gap: 5px;
    /* width: 100vw; */
    height: 182px;
    margin: 20px 0 0 0;
    padding: 20px;
`;

export default AccessBar;
