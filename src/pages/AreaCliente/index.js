import React from "react";
import { useState } from "react"
import { Banner, Aside, List, Items, Container } from "./styles";
import AtualizarCliente from "../../components/AtualizarCliente";
import DeletarCliente from "../../components/DeletarCliente";
import { useRouteMatch } from "react-router-dom";


function AreaCliente() {
    const [body, setBody] = useState(1)

    function chooseUpdate() {
        setBody(1)
    }
    function chooseDelete() {
        setBody(2)
    }

    const { params } = useRouteMatch();
    console.log(params.clientes);
    return (
        <>
            <Banner>
                <h1>Bem Vindo "Nome"</h1>
            </Banner>
            <Container>
                <Aside>
                    <List>
                        <Items onClick={chooseUpdate}>Atualizar Cliente</Items>
                        <Items onClick={chooseDelete}>Deletar Cliente</Items>
                    </List>
                </Aside>
                {
                    body === 1 ?
                        <AtualizarCliente id={params.clientes} />:
                        <DeletarCliente id={params.clientes} />
                }
            </Container>
        </>
    )
}
export default AreaCliente;