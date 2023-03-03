import { useState } from "react"
import { CountContext } from "./CountContext"

export const CountProvider = ({ children }) => {

    const value = 0;
    const [count, setCount] = useState(value)


    return (
        <CountContext.Provider value={{
            count,
            setCount,
            value
        }}>
            {children}
        </CountContext.Provider>
    )
}
