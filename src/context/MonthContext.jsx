import React, { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

const monthContext = createContext();

export function MonthContextProvider({ children }) {
    const [month, setMonth] = useState("Janeiro");

return(
    <monthContext.Provider
    value={{month, setMonth}}
    >
        {children}
    </monthContext.Provider>
)
}

export function useMonth(){
    return useContext(monthContext);
}