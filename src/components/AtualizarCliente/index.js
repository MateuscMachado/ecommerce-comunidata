import UserForm from "../UserForm";
import CadastroEndereco from "../CadastroEndereco";
import { useState } from "react";
import {
    Container,
    Title,
    Input,
    Form,
    AreaForm1,
    ContainerTitle,
    Button
} from "./styles";


function AtualizarCliente() {
    const [changeBody, setChangeBody] = useState(false)

    const handleClick = () => {
        setChangeBody(!changeBody)
    }

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