import styled from "styled-components";

export const Container =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    width: 80%;
`
export const Box = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 70vh;
    width: 70vh;
    background: #c4c4c4
;
    h2{
        margin-top: 10vh;
    }
`
export const Form = styled.form`
    display: flex;
    width: 80%;
    justify-content: space-between;
    height: 50vh;
    align-items: flex-end;
    button{
        position: inherit;
        width: 17vh;
        height: 7vh;
        font-size: 20px;
    }
`