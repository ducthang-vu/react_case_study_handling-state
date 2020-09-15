import React, { useState } from 'react'

const MyContext = React.createContext(
    {
        counter: 0,
        setCounters: []
    }
)

const MyContextProvider = props => {
    const [counter, setCounter] = useState(props.initial)
    const updateCounter = difference => setCounter(counter + difference)
    const modifiers = Array.from(props.differences, x => {return {value: x, modifier: () => updateCounter(x)}})

    return (
        <MyContext.Provider value={{counter, setCounters: modifiers}}>
            {props.children}
        </MyContext.Provider>
    )
}


export { MyContext, MyContextProvider}