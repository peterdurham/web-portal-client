import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button'

const NavbarStyles = styled.nav`
    height: 90px;
    display: flex;
    align-items: center;
`

const NavbarContainer = styled.div`
padding: 0 40px;
width: 100%;
display: flex;
justify-content: space-between;

& button { margin-left: 16px; }

@media (min-width: 1280px) {
    width: 1200px;
    margin: 0 auto;
}
`

const Navbar = ({ auth, logoutUser }) => {
    return (
        <NavbarStyles>
            <NavbarContainer>
                <div>
                    <Link to="/">
                        SVG-LOGO
                    </Link>
                </div>
                <nav>
                    {auth.isAuthenticated ? (
                        <>
                            <span>User: {auth.user.id}</span>
                            <Button onClick={logoutUser}>
                                Logout
                            </Button>
                        </>
                    ) : (
                        <>
                            <NavLink to="/login">
                                <Button>Login</Button>
                            </NavLink>
                            <NavLink to="/register">
                                <Button type="cta">Register</Button>
                            </NavLink>
                        </>
                    )}
                </nav>
            </NavbarContainer>
        </NavbarStyles>
    )
}

export default Navbar