import { useState } from "react";

const TodoCreate =({creatTodo})=>{

    const [title, setTitle]=useState("")
    const handleSubmitAddTodo=(e)=>{
        e.preventDefault();
        if(!title.trim()){ // si title esta vacia
            return setTitle(''); // se escpa del metodo
        }
        creatTodo(title);
        setTitle('');
    }
    return(
        <form onSubmit={handleSubmitAddTodo} className="bg-white rounded-md overflow-hidden py-4 px-4 gap-4 items-center flex mt-8">
        <span className="rounded-full h-5 w-5 border-2 inline-block"></span>
        <input
            type="text"
            placeholder="Create a New Todo..."
            className="w-full text-gray-400 outline-none"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
        />
    </form> 
    )
}
export default TodoCreate;