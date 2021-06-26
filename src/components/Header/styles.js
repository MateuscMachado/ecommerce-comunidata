import styled from "styled-components";

export const HeaderStyle = styled.header`
    position: relative;
    background-color: rgb(30, 75, 117);
    height: 3em;
    display: flex ;
    box-shadow: 0 0 1em rgb(30, 75, 117);
    z-index: 1;
    `
export const Input = styled.input`
    width: 50vh;
`;
export const Formatacao = styled.div`
    height: 47px;
    width: 15em;
`;
export const LogoHeader = styled.img` 
    height: 47px;
`;
export const Div = styled.div`
    border-radius: 0.4em;
    width: 70vh;
    align-self:center;
    margin-right: auto;
    margin-left: auto;
    border-right: none;
`;
export const ButtonPesquisa = styled.button`
    border-bottom-right-radius:0.5em;
    border-top-right-radius:0.5em;
    border-right: auto;
    align-self:center;
    font-size: 12px;
    border: 2px solid white;
`;
export const Entrar = styled.div`
    margin-right:5%;
    align-self:center;
`;
export const Text = styled.text` 
    font-family:Georgia, 'Times New Roman', Times, serif;
    color: whitesmoke;
    font-size:23px;
    text-decoration: none;
`;