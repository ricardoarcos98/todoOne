const TodoCreate =()=>{
    return(
        <form className="bg-white rounded-md overflow-hidden py-4 px-4 gap-4 items-center flex mt-8">
        <span className="rounded-full h-5 w-5 border-2 inline-block"></span>
        <input
            type="text"
            placeholder="Create a New Todo..."
            className="w-full text-gray-400 outline-none"
        />
    </form> 
    )
}
export default TodoCreate;