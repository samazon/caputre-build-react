import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    font-family: 'Inter', sans-serif;
}
body{
    background-color: #1b1b1b;
}
button{
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background-color: transparent;
    color: white;
    transition: all .05s ease;
    outline: none;
    &:hover{
        background-color: #23d997;
    }
}
a {
    font-size: 1.1rem;
}
h2 {
    font-weight:lighter;
    font-size: 4rem;
}
h3 {
    color:#fff;
}
h4{
    font-weight: bold;
    font-size: 2rem;
}
span {
    font-weight: bold;
    color: #23d997;
}
p{
    padding: 3rem 0;
    color:#ccc;
    font-size: 1.4rem;
    line-height: 150%;
}
`;

export default GlobalStyle