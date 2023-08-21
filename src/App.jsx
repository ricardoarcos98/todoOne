import CrossIcon from "./components/icons/CrossIcon";
import NightIcon from "./components/icons/NightIcon";

const App = () => {
    return (
        <div className="bg-[url('./assets/images/bg-mobile-light.jpg')] bg-contain  bg-no-repeat bg-gray-300 min-h-screen">
            <header className="container mx-4 px-4 pt-8  ">
                <div className="flex justify-between">
                    <h1 className=" uppercase text-white text-4xl tracking-[0.3em] ">
                        ToDo
                    </h1>
                    <button>
                        <NightIcon className="fill-red-400" />
                    </button>
                </div>

                <form className="bg-white rounded-md overflow-hidden py-4 px-4 gap-4 items-center flex mt-8">
                    <span className="rounded-full h-5 w-5 border-2 inline-block">
                        {" "}
                    </span>
                    <input
                        type="text"
                        placeholder="Create a New Todo..."
                        className="w-full text-gray-400 outline-none"
                    />
                </form>
            </header>

            <main className="container mx-4 px-4 mt-8">
                <div className="bg-white rounded-md [&>article]:p-4 ">
                    <article className="flex gap-4  border-b border-b-gray-400">
                        <button className="flex-none rounded-full h-5 w-5 border-2 inline-block">
                        </button>
                        <p className="text-gray-600 grow">
                            Complete online Javascript course
                        </p>
                        <button>
                            <CrossIcon />{" "}
                        </button>
                    </article>
                    <article className="flex gap-4  border-b border-b-gray-400">
                        <button className="flex-none rounded-full h-5 w-5 border-2 inline-block">
                        </button>
                        <p className="text-gray-600 grow">
                            Complete online Javascript course
                        </p>
                        <button>
                            <CrossIcon />{" "}
                        </button>
                    </article>
                    <article className="flex gap-4 border-b border-b-gray-400">
                        <button className="flex-none rounded-full h-5 w-5 border-2 inline-block">
                        </button>
                        <p className="text-gray-600 grow">
                            Complete online Javascript course
                        </p>
                        <button>
                            <CrossIcon />{" "}
                        </button>
                    </article>
                    <section className="py-4 px-4 flex justify-between">
                        <span className="text-gray-400"> 5 items left </span>
                        <button className="text-gray-400">
                            clear completed{" "}
                        </button>
                    </section>
                </div>
            </main>

            <section className="container mx-auto mt-8 px-4">
                <div className="bg-white p-4 rounded-md flex justify-center gap-10">
                    <button className="text-blue-600"> All</button>
                    <button className="hover:text-blue-600"> Active</button>
                    <button className="hover:text-blue-600"> Completed </button>
                </div>
            </section>

            <p className="text-center mt-8"> Drag and drop to reorder list </p>
        </div>
    );
};
export default App;
