import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

const MenuStyles = styled.nav`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  display: flex;
  width: 960px;
  margin: 0 auto;

  & ul { display: flex; list-style: none; font-weight: 500; }
  & li { padding: 4px; border-radius: 6px; transition: .2s ease; }
  & ul li:hover { background-color: #e1fef1;  }
  & li:hover a { color: #054861; }
  & ul li a { padding: 8px; font-size: 16px; line-height: 24px; color: #676c6f; border-radius: 6px; transition: .1s all; }
  & ul li a.active { text-decoration: underline; color: black; }
  & ul li a:active { outline-style: solid; outline-color: #5cebdf; outline-width: 2.5px;}
`

const MenuLinks = () => {
    return (
        <MenuStyles>
            <ul>
                <li><NavLink to="/">Overview</NavLink></li>
                <li><NavLink to="/requests">Requests</NavLink></li>
                <li><NavLink to="/sites">Sites</NavLink></li>
                {/* <li><NavLink to="/signups">Signups</NavLink></li>
                <li><NavLink to="/email">Email</NavLink></li>
                <li><NavLink to="/advertising">Advertising</NavLink></li>
                <li><NavLink to="/social">Social</NavLink></li>
                <li><NavLink to="/offerings">Offerings</NavLink></li> */}
            </ul>
        </MenuStyles>
    )
}

export default MenuLinks