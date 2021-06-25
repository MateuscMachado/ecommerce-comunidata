import ClienteForm from "../ClienteForm";
import CadastroEndereco from "../CadastroEndereco";
import { useState } from "react";
import {
    Container,
    Button
} from "./styles";
import { api } from "../../services/api";


function AtualizarCliente(props) {
    const [changeBody, setChangeBody] = useState(false)

    const handleClick = () => {
        setChangeBody(!changeBody)
    }

    // const atualizarCliente = (e) =>{
    //     e.preventDefault();
    //     api
    //     .put(`/clientes`, props.id)
    //     .then((response => console.log(response.data)));
    // }

    return (
        <Container>
            {
                changeBody === false ?
                    <CadastroEndereco /> :
                    <ClienteForm id={props.id}/>
            }
            <Button onClick = {handleClick}>Próximo</Button>
        </Container>
    )
}

export default AtualizarCliente;