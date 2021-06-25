import UserForm from "../UserForm";
import CadastroEndereco from "../CadastroEndereco";
import { useState } from "react";
import {Container, Button } from "./styles";
import { api } from "../../services/api";

function AtualizarCliente(props) {
    const [changeBody, setChangeBody] = useState(false)

    const handleClick = () => {
        setChangeBody(!changeBody)
    }

    const response = api.put("/clientes", props.id)

    return (
        <Container>
            {
                changeBody === false ?
                    <CadastroEndereco /> :
                    <UserForm />
            }
            <Button onClick = {handleClick}>Próximo</Button>
        </Container>
    )
}
export default AtualizarCliente;