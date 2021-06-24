import { Container, Box, Form } from "./styles"

function DeletarCliente() {
    return (
        <Container>
            <Box>
                <h2>Deseja mesmo deletar sua conta?</h2>
                <Form>
                    <button type="submit">Sim</button>
                    <button type="submit">Cancelar</button>
                </Form>
            </Box>
        </Container>
    )
}

export default DeletarCliente;