import NightIcon from "./components/icons/NightIcon";

const Header =()=>{
return(
    <header className="container mx-4 px-4 pt-8  ">
                <div className="flex justify-between">
                    <h1 className=" uppercase text-white text-4xl tracking-[0.3em] ">
                        ToDo
                    </h1>
                    <button>
                        <NightIcon className="fill-white" />
                    </button>
                </div>

     </header>
)
}
export default Header; 