import React from 'react'
import styled from 'styled-components'

const Nav = () => {
    return (
        <StyledNav>
            <h1><a id="logo" href="#">Capture</a></h1>
            <ul>
                <li><a href="#" target="_blank">1. About Us</a></li>
                <li><a href="#" target="_blank">2. Our Work</a></li>
                <li><a href="#" target="_blank">3. Contact Us</a></li>
            </ul>
        </StyledNav>
    )
}

const StyledNav = styled.div`
    background-color: #282828;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 10rem;
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
