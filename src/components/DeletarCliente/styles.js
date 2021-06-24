import styled from "styled-components";

export const Container =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: yellow;
    width: 100%;
`
export const Box = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    background: coral;
    height: 70vh;
    width: 70vh;

    h2{
        margin-top: 10vh;
    }
`
export const Form = styled.form`
    display: flex;
    width: 80%;
    justify-content: space-between;
    button{
        bottom: 0;
        width: 10vh;
    }
`