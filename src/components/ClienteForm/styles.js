import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    width: 100%;
   
`;
export const Form= styled.form`
    justify-content: space-between;
    display: flex;
    text-align: center;
    

`;

export const Title = styled.h1`
    display: flex;
    align-items: center;
    font-size: 32px;
    font-weight: bold;
    margin-top: 2rem;
    color: #242528;
`;

export const Input = styled.input`
   margin: 1rem 2rem;
    width: 80%;
    height: 10%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-color: cadetblue;
    background-color: #E9E6E6
    
`;

export const AreaForm1 = styled.div`
    width: 40%;
    align-items: center;
`;


export const ContainerTitle = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;

`;

export const Button = styled.button`
    display: flex;
    //flex-wrap: wrap;
    //flex-direction: column;
    align-items: center;
    justify-content: center;
    //margin-top: 20rem;
    height: 20%;
    width:10em;
    border-radius: 0.5em;
    //margin-left: 15%;
    background-color: rgb(30, 75, 117);
    color: white;
    font-weight: bolder;
    font-size: 20px;
    box-shadow: 6px 6px 6px black;
`;

export const ContainerButton= styled.div`
`;
