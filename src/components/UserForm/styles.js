import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
   
`;
export const Form= styled.form`
    height: 100%;
    width: 80%;
    background-color: black;
    justify-content: space-between;
    display: flex;

`;

export const Title = styled.h1`
    display: flex;
    align-items: center;
    font-size: 32px;
    font-weight: bold;
    margin-bottom: 10px;
    color: #444;
`;

export const Input = styled.input`
    margin: 1rem 0.4rem;
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export const AreaForm1 = styled.div`
    width: 40%;
    background-color: yellow;

`;


export const AreaForm2 = styled.div`
    width: 40%;
    background-color: green;

`;

export const ContainerTitle = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const Button = styled.div`
    width: 50%;
`;
