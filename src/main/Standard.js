import React, { useState } from 'react'
import Counter from '../components/Counter'
import ButtonsMenu from '../components/ButtonsMenu'
import Container from './Container'

const Standard = (props) => {
    const [counter, setCounter] = useState(props.initial)
    const updateCounter = difference => setCounter(counter + difference)
    const modifiers = Array.from(props.differences, x => {return {value: x, modifier: () => updateCounter(x)}})
        
    return (
        <div className="standard-counter">
            <h2>With React Hooks</h2>
            <Counter>{counter}</Counter>
            <ButtonsMenu modifiers={modifiers}></ButtonsMenu>
        </div>
    )
}

export default Standard