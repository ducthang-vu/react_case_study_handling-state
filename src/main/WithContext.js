import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'
import Counter from '../components/Counter'
import ButtonsMenu from '../components/ButtonsMenu'

const WithContext = () => {
    const context = useContext(MyContext)

    return (
        <React.Fragment>
            <h2>With React Context</h2>
            <Counter>{context.counter}</Counter>
            <ButtonsMenu modifiers={context.setCounters}></ButtonsMenu>
        </React.Fragment>
    )
}

export default WithContext