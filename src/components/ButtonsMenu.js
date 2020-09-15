import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
    margin: 10px;
    width: 50px;
    height: 50px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background-color: #29C7C2;
    color: white;
    font-weight: bold;
    border: 1px solid #29C7C2;
    padding: 8px;
    cursor: pointer;
    &:hover {
        background-color: #25E2E8;
        color: black;
    }`

const ButtonsMenu = (props) => {
    return (
        props.modifiers.map((modifier, index) =>
            <StyledButton 
                onClick={modifier.modifier}
                key={index}
            >
                {modifier.value > 0 && '+'}{modifier.value}
            </StyledButton>
        )
    )
}

export default ButtonsMenu