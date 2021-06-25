import {useState} from 'react';

import {
    Container,
    Title,
    Input,
    InfoProduct,
    AreaImage,
    AreaButton,
    Button,
    InfoID
} from "./styles"

function AtualizarProduto() {

    const [infoProduto, setInfoProduto] = useState([]);



    /* // Setar as novas informações de produto
    function apiRequest() {

        setInfoProduto(produtos);
    }
    */
    return (
        <Container>
            <Title>
                Atualizar Produto
            </Title>
            <InfoID>
                <Input id="InputID" type="text" placeholder="ID do produto" />
            </InfoID>
            <InfoProduct>
                <Input id="InputNome" type="text" placeholder="Nome" />
                <Input id="InputQuantidade" type="text"placeholder="Quantidade em estoque" />
            </InfoProduct>
            <InfoProduct>
                <Input id="InputDescricao" type="text" placeholder="Descrição" />
                <Input id="InputCadastro" type="text" placeholder="Data do cadastro" />
            </InfoProduct>
            <InfoProduct>
                <Input id="InputValor" type="text" placeholder="Valor unitário" />
                <Input id="InputCategoria" type="text" placeholder="Categoria" />
            </InfoProduct>
            <AreaImage>
                <Input type="image"/>
            </AreaImage>
            <AreaButton>
                <Button onClick="" >Concluído</Button>
            </AreaButton>
        </Container>
    )
}

export default AtualizarProduto