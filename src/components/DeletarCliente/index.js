import { Container, Box, AreaButtons } from "./styles"
import { api } from "../../services/api";

function DeletarCliente(props) {

    const deletarCliente = async () => {     
        var response = await api.delete(`/clientes/${props.id}`)
        alert("Cliente deletado com sucesso!")
    }
    console.log("PROPS")
    console.log(props)
    
    return (
        <Container>
            <Box>
                <h2>Deseja mesmo deletar sua conta?</h2>
                <AreaButtons>
                    <button onClick={deletarCliente}>Sim</button>
                    <button type="text">Cancelar</button>
                </AreaButtons>
            </Box>
        </Container>
    )
}

export default DeletarCliente;