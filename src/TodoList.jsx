import TodoItem from "./TodoItem";

const TodoList = ({ todo }) => {
    return (
        <div className="bg-white rounded-t-md [&>article]:p-4 mt-8 ">
            {todo.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    );
};
export default TodoList;
