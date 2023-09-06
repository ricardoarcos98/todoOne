import CheckIcon from "./components/icons/CheckIcon";
import CrossIcon from "./components/icons/CrossIcon";

const TodoItem = ({ todo, removeTodo, updateTodo }) => {
    const { id, title, completed } = todo;
    return (
        <article className="flex gap-4  border-b border-b-gray-400  ">
            <button
                className={`h-5 w-5 flex-none rounded-full border-2 ${
                    completed
                        ? "  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex justify-center items-center"
                        : "inline-block "
                }`}
                onClick={() => updateTodo(id)}
            >
                {completed && <CheckIcon />}
            </button>
            <p className={`text-gray-600  dark:text-gray-400 grow ${completed && "line-through"}`}>
                {title}
            </p>
            <button className="flex-none" onClick={() => removeTodo(id)}>
                <CrossIcon />
            </button>
        </article>
    );
};
export default TodoItem;
