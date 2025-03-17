import React, { createContext } from 'react'
import { useState } from 'react';
import Popupprd from '../Component/Popupprd';
export const Popupctx=createContext();
const PopProvider = ({children}) => {
   
 const[Poprd,setPoprd]=useState(false)
    const openPop = (value) => {
        setPoprd(value);
    }

    const closePop = () => {
        setPoprd("");
    }
  return (
    <div>
        <Popupctx.Provider value={{openPop,closePop}}>
         {Poprd&&<Popupprd Poprd={Poprd} closePop={closePop}/>}
           {children}
        </Popupctx.Provider>
    </div>
  )
}

export default PopProvider