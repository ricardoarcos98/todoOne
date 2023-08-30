import { useEffect, useState } from 'react';
import NightIcon from "./components/icons/NightIcon";
import SunIcon from './components/icons/SunIcon';

const Header =()=>{

const[darkMode,setDarkMode]=useState(true)
    
useEffect(()=>{
    if(darkMode){
        document.documentElement.classList.add("dark");
    }else{
        document.documentElement.classList.remove("dark");
    }

},[darkMode])

return(
    <header className="container mx-4 px-4 pt-8  ">
                <div className="flex justify-between">
                    <h1 className=" uppercase text-white text-4xl tracking-[0.3em] ">
                        ToDo
                    </h1>
                    <button onClick={()=>setDarkMode(!darkMode)}>
                        {
                            darkMode? <SunIcon/>:<NightIcon/>
                        }
                    </button>
                </div>

     </header>
)
}
export default Header; 