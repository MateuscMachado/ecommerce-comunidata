import styled from "styled-components";

export const Banner = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 10vh;
    background-color: #c4c4c4;
`
export const Aside = styled.aside`
    display: flex;
    justify-content: center;
    width: 30vh;
    height: 90vh;
    background-color:#e9e6e6
;
`

export const List = styled.ul`
    list-style: none;
    padding: 0%;
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    width: 80%;

`

export const Items = styled.li`
    border: solid 1px black;
    margin-top: 10%;
    &:hover {
        background-color: #c4c4c4;
        cursor: pointer;
    }
`
export const Container = styled.div`
    display:flex;
    flex-direction:row

`