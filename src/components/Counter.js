import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    margin: 10px auto;
    width: 50px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid black;
    font-weight: bold;
    background-color: #A7FFFF;
    `

const Counter = (props) => {
    return (
        <StyledDiv>
            <span>{props.children}</span>
        </StyledDiv>
    )
}

export default Counter