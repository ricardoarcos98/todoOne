import TodoItem from "./TodoItem";

const TodoList = ({ todo, removeTodo, updateTodo }) => {
    return (
        <div className="bg-white rounded-t-md [&>article]:p-4 mt-8 overflow-hidden transition-all duration-1000 dark:bg-gray-800 ">
            {todo.map((todo) => (
                <TodoItem
                    key={todo.id}
                    todo={todo}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
            ))}
        </div>
    );
};
export default TodoList;
