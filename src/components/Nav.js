import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <StyledNav>
            <h1><Link id="logo" to="/">Capture</Link></h1>
            <ul>
                <li><Link to="/">1. About Us</Link></li>
                <li><Link to="/work">2. Our Work</Link></li>
                <li><Link to="/contact">3. Contact Us</Link></li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.div`
    background-color: #282828;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 2rem;
    a {
        color:#fff;
        text-decoration: none;
    }
    #logo {
        font-size: 1.5rem;
        font-family: 'Lobster', cursive;
        font-weight: lighter
    }
    ul{ 
        display: flex;
        list-style: none;
    }
    li {
        position: relative;
    }
    li:not(:first-child) {
        padding-left: 10rem;
    }
`
export default Nav
