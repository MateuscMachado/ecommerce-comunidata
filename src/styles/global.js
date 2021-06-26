import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    font-family: Verdana, Geneva, Tahoma, sans-serif  ;
    margin: 0; 
    padding: 0; 
    outline: 0; 
    box-sizing: border-box;
} 
input {
    border-radius: 0.5em;
}
body{
    background: lightgray;
}

div.insideContainer{
    background: #C4C4C4;
    position: relative;
    height: 100vh;
    width: 70%;
    margin-left: 15%;
}
`;
