import styled from "styled-components"

export const BarraTitulo = styled.div`
    display: flex;
    background-color: #c4c4c4;
    height: 10vh;
    align-items: center;
    justify-content: center;
    font-size: 25px;
    font-weight: bold;
`

export const Conteudo = styled.div`
    display: flex;
`

export const ColunaOpcoes = styled.aside`
    display: flex;
    justify-content: center;
    background-color: #e9e6e6;
    height: 90vh;
    width: 30%;
`

export const ListaOpcoes = styled.ul`
    list-style: none;
    width: 85%;
    padding: 0%;
    text-align: center;
`

export const OpInserir = styled.li`
    border: 1px solid black;
    border-radius: 0.2em;
    margin: 2%;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10%;
    margin-top: 10%;

    &:hover {
        background-color: #c4c4c4;
        cursor: pointer;
    }
`

export const OpDeletar = styled.li`
    border: 1px solid black;
    border-radius: 0.2em;
    margin: 2%;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10%;

    &:hover {
        background-color: #c4c4c4;
        cursor: pointer;
    }
`

export const OpAtualizar = styled.li`
    border: 1px solid black;
    border-radius: 0.2em;
    margin: 2%;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10%;

    &:hover {
      background-color: #c4c4c4;
      cursor: pointer;
    }
`

