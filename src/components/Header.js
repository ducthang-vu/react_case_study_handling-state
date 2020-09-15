import React from 'react'
import styled from 'styled-components'

const StyledHeader = styled.header`
    padding: 15px;
    text-align: center;
    background-color: #F29EAA;
    color: white;
`

const Header = () => {
    return (
        <StyledHeader>
            <h1>React Case study (handling state)</h1> 
        </StyledHeader>
    )
}

export default Header