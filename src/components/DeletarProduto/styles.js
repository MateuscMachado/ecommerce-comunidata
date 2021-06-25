import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    background-color: #ffffff;
    width: 100%;
    
`

export const Title = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80%;
    height: 10%;
    font-size: 25px;
    font-weight: bold;
`

export const AreaOptions = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #c4c4c4;
    border-radius: 0.3em;
    height: 40%;
    width: 90%;
    margin-bottom: 30%;
`
export const AreaText = styled.div`
    display: flex;
    justify-content: center;
    position: top;
    height: 15%;
    font-size: 25px;
    font-weight: bold;
    margin-top: 10%;
    margin-left: 5%;
    margin-right: 3%;
`

export const AreaButton = styled.div`
    display: flex;
    
    align-items: center;
    justify-content: center;
    justify-content: space-between;
    position: bottom;
    height: 15%;
    width: 70%;
    margin-left: 15%;
    margin-bottom: 5%;
`

export const Button = styled.button`
    border-radius: 0.4em;
    font-size: 25px;
    font-weight: bold;
    padding: 0.4em;

    &:hover {
        background-color: #c4c4c4;
        cursor: pointer;
    }
`

export const Format = styled.div`
    height: 70%;
`