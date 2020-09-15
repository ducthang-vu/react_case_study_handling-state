import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
    background-color: #FFCACC;
    flex-basis: calc(100% / 3);
    text-align: center;
    }`


const Container = (props) => {
    return (
        <StyledDiv>{props.children}</StyledDiv>
    )
}

export default Container