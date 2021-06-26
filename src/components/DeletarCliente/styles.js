import styled from "styled-components";

export const Container =styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: white;
    width: 80%;
`;
export const Box = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 70vh;
    width: 70vh;
    background: #242528;
    color: #f2f2f2;
    box-shadow: 0 0 2em #242528;
    border-radius: 1em;
    h2{
        margin-top: 10vh;
    }
`;
export const AreaButtons = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-between;
    height: 50vh;
    align-items: flex-end;
    button{
        width: 17vh;
        height: 7vh;
        font-size: 20px;
        color: #242528;
        background-color: #C4C4C4;
        border-radius: 0.2;
    }
`;