import { useEffect, useRef, useState } from 'react';
import NightIcon from "./components/icons/NightIcon";
import SunIcon from './components/icons/SunIcon';

const incicialStateDarkMode=localStorage.getItem("theme")==="dark";
const Header =()=>{
const[darkMode,setDarkMode]=useState(incicialStateDarkMode)
const refHeader=useRef(null);
useEffect(()=>{
    if(darkMode){
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme","dark")
    }else{
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme","light")
    }

},[darkMode])

return(
    <header className="container mx-4 px-4 pt-8" >
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