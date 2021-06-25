import styled from "styled-components";

export const Button= styled.button`
  text-transform: uppercase;
  outline: 0;
  background: rgb(30, 75, 117);
  width: 100%;
  border: 0;
  padding: 15px;
  color: white;
  font-size: 14px;
  -webkit-transition: all 0.3 ease;
  transition: all 0.3 ease;
  cursor: pointer;
  margin-bottom: 0.5em;
`;

export const Container= styled.div`
  background-color: gray;
  border-radius:5%;
  align-self:center;
  margin-right: auto;
  margin-left: auto;
  width: 50vh;
  margin-top: 5%;
`;

export const Input = styled.input`
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin: 0 0 15px;
  padding: 15px;
  box-sizing: border-box;
  font-size: 14px;
`;

export const Texto= styled.div`
  justify-content: center;
  display: flexbox;
a{
  color: black;
  text-decoration: none;
}
`;

export const ContainerTitle = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top:5rem;
`;

export const Title = styled.h1`
    display: flex;
    align-items: center;
    font-size: 32px;
    color: #242528;
    margin-bottom:0;
`;

export const P = styled.p`
  padding-right: 7px;
`;