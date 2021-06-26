import styled from "styled-components";

export const Container= styled.div`
  background-color: #C4C4C4;
  display: flex;
  flex-direction: column;
  margin-right: auto;
  margin-left: auto;
  align-items: center;
  justify-content: center;
  .innerContainer{
    margin-top: 10%;
    background: #242528;
    width: 70%;
    height: 70vh;
    border-radius: 1em;
    box-shadow: 0 0 2em #242528;
  }
`;
export const Button= styled.button`
  text-transform: uppercase;
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
export const Input = styled.input`
  outline: 0;
  background: #f2f2f2;
  width: 100%;
  border: 0;
  margin-bottom: 1em;
  height: 2em;
  box-sizing: border-box;
  font-size: 14px;
`;
export const Texto= styled.div`
a{
  color: #f2f2f2;
  text-decoration: none;
}
`;
export const Title = styled.h1`
  font-size: 32px;
  color: #f2f2f2;
  margin-bottom: 4vh;
`;