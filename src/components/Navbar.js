import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ContainerStyles } from '../styles/Container'
const NavbarStyles = styled.nav`
    height: 90px;
    display: flex;
    align-items: center;
`

const Navbar = () => {
    return (
        <NavbarStyles>
            <ContainerStyles>
                <Link to="/">
                    SVG-LOGO
                </Link>
            </ContainerStyles>
        </NavbarStyles>
    )
}

export default Navbar