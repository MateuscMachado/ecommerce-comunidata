import {
    Container,
    Title,
    Input,
    InfoProduct,
    AreaImage,
    AreaButton,
    Button,
} from "./styles"

function AtualizarProduto() {
    return (
        <Container>
            <Title>
                Atualizar Produto
            </Title>
            <InfoProduct>
                <Input type="text" placeholder="Nome" />
                <Input type="text"placeholder="Quantidade em estoque" />
            </InfoProduct>
            <InfoProduct>
                <Input type="text" placeholder="Descrição" />
                <Input type="text" placeholder="Data do cadastro" />
            </InfoProduct>
            <InfoProduct>
                <Input type="text" placeholder="Valor unitário" />
                <Input type="text" placeholder="Categoria" />
            </InfoProduct>
            <AreaImage>
                <Input type="image"/>
            </AreaImage>
            <AreaButton>
                <Button>Concluído</Button>
            </AreaButton>
        </Container>
    )
}

export default AtualizarProduto