import React, { useContext } from "react";
import { v4 as uuidV4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStorage";

const ItemsContext = React.createContext({});
export const useItems = () => {
    return useContext(ItemsContext);
};

export const ItemsProvider = ({ children }: any) => {
    const [items, setItems] = useLocalStorage("ITEMS", []);

    const addItem = ({ name, url }: { name: string; url: string }) => {
        setItems((pervItems: any) => {
            if (
                pervItems.find(
                    (item: { name: string }): any => item.name === name
                )
            ) {
                return pervItems;
            }
            return [...pervItems, { id: uuidV4(), name, url }];
        });
    };
    const deleteItem = ({ id }: { id: string }) => {
        setItems((pervItems: any[]) => {
            return pervItems.filter((item) => item.id !== id);
        });
    };

    return (
        <ItemsContext.Provider
            value={{
                items,
                addItem,
                deleteItem,
            }}
        >
            {children}
        </ItemsContext.Provider>
    );
};
