import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Counter from '../components/Counter'
import ButtonsMenu from '../components/ButtonsMenu'
import { updateCounter } from '../store/action'

const WithRedux = (props) => {
    const counter = useSelector(state => state.counter)
    const dispatch = useDispatch()
    const modifiers = Array.from(props.differences, x => {return {
        value: x, 
        modifier: () => dispatch(updateCounter(x))
    }})

    return (
        <React.Fragment>
            <h2>With Redux</h2>
            <Counter>{counter}</Counter>
            <ButtonsMenu modifiers={modifiers}></ButtonsMenu>
        </React.Fragment>
    )
}

export default WithRedux