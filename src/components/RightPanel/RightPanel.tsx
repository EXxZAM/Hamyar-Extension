import autoAnimate from "@formkit/auto-animate";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useTasks } from "../../contexts/TaskContext";
import { useTheme } from "../../contexts/ThemeContext";
import { Item } from "./ToDoList/Item";
import { ToDoList } from "./ToDoList/ToDoList";
function RightPanel() {
    const [showTodoList, setShowTodoList] = useState(true);
    const { tasks }: any = useTasks();
    const { theme }: any = useTheme();
    const parent = useRef(null);
    tasks &&
        tasks.sort(
            (a: { is_completed: any }, b: { is_completed: any }) =>
                Number(a.is_completed) - Number(b.is_completed)
        );

    useEffect(() => {
        parent.current && autoAnimate(parent.current);
    }, [parent]);
    return (
        <Panel>
            {showTodoList || <div className="blur" />}
            <Container className={`bg${theme}`}>
                <div className="top">
                    <div className="header">
                        <h2>دست نویس</h2>
                        <button
                            className="onTop"
                            onClick={() => {
                                setShowTodoList(!showTodoList);
                            }}
                        >
                            {showTodoList ? "مخفی کن" : "نشون بده"}
                        </button>
                    </div>

                    <hr className="divider" />
                    <ul className="ListHolder" ref={parent}>
                        {tasks &&
                            tasks.map((task: any, index: number) => {
                                return (
                                    <Item
                                        key={index}
                                        task={task.task}
                                        label={task.label}
                                        is_completed={task.is_completed}
                                        id={task.id}
                                        priority={task.priority}
                                    />
                                );
                            })}
                    </ul>
                </div>
                <div className="bottom">
                    <ToDoList />
                </div>
            </Container>
        </Panel>
    );
}

const Panel = styled.div`
    .blur {
        backdrop-filter: blur(5px);
        width: 220px;
        height: 520px;
        padding: 20px;
        border-radius: 1.3rem;
        position: absolute;
        z-index: 1;
    }
`;
const Container = styled.div`
    width: 223px;
    height: 520px;
    border-radius: 1.3rem;
    padding: 20px;
    .onTop {
        z-index: 2;
    }
    .ListHolder {
        height: 360px;
        overflow-y: auto;
        ::-webkit-scrollbar {
            width: 10px;
            border-radius: 1.3rem;
        }
        ::-webkit-scrollbar-track {
            border-radius: 1.3rem;
        }
        ::-webkit-scrollbar-thumb {
            background: #1977f3;
            border-radius: 1.3rem;
        }
        ::-webkit-scrollbar-thumb:hover {
            background: #1977f3;
            border-radius: 1.3rem;
        }
    }
    .header {
        display: grid;
        grid-auto-flow: column;
        align-items: center;
        align-content: space-around;
        justify-content: space-between;
        h2 {
            font-size: 30px;
        }
        button {
            font-size: 15px;
            border: none;
            color: white;
            width: 75px;
            height: 25px;
            border-radius: 4px;
            background-color: #1977f3;
            cursor: pointer;
        }
    }
    .divider {
        margin-top: 10px;
        height: 1px;
        background-color: rgba(140, 153, 169, 0.7);
        border: none;
    }
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    justify-content: space-between;
`;

export default RightPanel;
