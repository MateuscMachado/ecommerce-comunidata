import { Container, Title, AreaOptions, AreaButton, AreaText, Button, Format, } from "./styles"

function DeletarProduto() {
    return (
        <Container>
            <Title>
                Deletar Produto
            </Title>
            <AreaOptions>
                <AreaText>
                    Deseja mesmo apagar este produto?
                </AreaText>
                <Format />
                <AreaButton>
                    <Button>Sim</Button>
                    <Button>Cancelar</Button>
                </AreaButton>
            </AreaOptions>
        </Container>
    )
}
export default DeletarProduto