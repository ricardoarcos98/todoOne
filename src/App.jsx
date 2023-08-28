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
        completed: true,
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

    const creatTodo=(title)=>{
    const newTodo={
        id: Date.now(),
        title: title.trim(),
        completed:false,
    }
    setTodo([...todo, newTodo])
    }

    const removeTodo=(id)=>{
     setTodo(todo.filter((todo)=>todo.id !== id)) // que devuelva todo lo contrario al id que se le esta pasando.
    }

    const updateTodo=(id)=>{
        setTodo(todo.map(
            todo => todo.id ===id? {...todo, completed: !todo.completed}:todo
        ))
    }
   
    const computedItemsLeft= todo.filter((todo)=> !todo.completed).length;

    const clearCompleted=()=>{
        setTodo(todo.filter((todo)=>!todo.completed))
    } 
    const [filter, setFilter]=useState("all")
    const changeFilter=(filter)=>setFilter(filter);

    const filteredTodos=()=>{
        switch (filter){
            case "all":
                return todo;
            case "active":
                return todo.filter((todo)=>!todo.completed);
            case "completed":
                return todo.filter((todo)=>todo.completed);
            default:
                return todo;
        }
    }
   
    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain  bg-no-repeat bg-gray-300 min-h-screen dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] ">
            <Header />

            <main className="container mx-4 px-4 mt-8">
                <TodoCreate creatTodo={creatTodo}/>

                {/* TodoList (todoItem) TodoUpdate & TodoDelete */}
                <TodoList todo={filteredTodos()} removeTodo={removeTodo} updateTodo={updateTodo} />
                <TodoComputed computedItemsLeft={computedItemsLeft} clearCompleted={clearCompleted} />
                <TodoFilter changeFilter={changeFilter} filter={filter}  />
            </main>

            <footer className="text-center mt-8 dark:text-gray-400 ">
                Drag and drop to reorder list
            </footer>
        </div>
    );
};
export default App;
