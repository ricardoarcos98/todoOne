import { useState } from "react";
import Header from "./Header";
import TodoComputed from "./TodoComputed";
import TodoCreate from "./TodoCreate";
import TodoFilter from "./TodoFilter";
import TodoList from "./TodoList";

const initialStateTodo = [
    {
        id: 1,
        title: "Study English",
        completed: true,
    },
    {
        id: 2,
        title: "Go to the gym",
        completed: false,
    },
    {
        id: 3,
        title: "Meditate",
        completed: false,
    },
    {
        id: 4,
        title: "Play soccer",
        completed: false,
    },
    {
        id: 5,
        title: "Study for an exam",
        completed: false,
    },
];

const App = () => {
    const [todo, setTodo] = useState(initialStateTodo);
    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain  bg-no-repeat bg-gray-300 min-h-screen">
            <Header />

            <main className="container mx-4 px-4 mt-8">
                <TodoCreate />

                {/* TodoList (todoItem) TodoUpdate & TodoDelete */}
                <TodoList todo={todo} />
                <TodoComputed />
                <TodoFilter />
            </main>

            <footer className="text-center mt-8">
                Drag and drop to reorder list
            </footer>
        </div>
    );
};
export default App;
