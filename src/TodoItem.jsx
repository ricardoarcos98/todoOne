import CrossIcon from "./components/icons/CrossIcon";

const TodoItem=({todo})=>{
const {id, title, completed }=todo;
return(
    <article className="flex gap-4  border-b border-b-gray-400">
    <button className="flex-none rounded-full h-5 w-5 border-2 inline-block"></button>
    <p className="text-gray-600 grow">
        {title}
    </p>
    <button>
        <CrossIcon />
    </button>
    </article>
)
}
export default TodoItem;