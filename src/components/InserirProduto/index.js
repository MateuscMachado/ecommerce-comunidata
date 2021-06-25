import { useEffect, useState } from "react"
import { api } from "../../services/api";

import { Container, Title, Input, InfoProduct, AreaImage, AreaButton, Button, InputImagem } from "./styles"

function InserirProduto() {

    const initialFormState = {
        nome: '',
        quantidade: '',
        descricao: '',
        dataCadastro: '',
        valorUnitario: '',
        categoria: '',
        urlImagem: '',
    }

    const [form, setForm] = useState(initialFormState);
    const [listaProdutos, setListaProdutos] = useState([]);

    const setInput = (newValue) => {
        setForm(form => (
            { ...form, ...newValue }
        ))
    }

    useEffect(() => {
        async function handleProducts() {
            const response = await api.get(`/produtos`)
            setListaProdutos(response.data)
        }
        handleProducts();
    }, [])

    return (
        <Container>
            <Title>
                Inserir Produto
            </Title>
            <InfoProduct>
                <Input id="InputNome" type="text" placeholder="Nome"
                    onChange={e => setInput({ nome: e.target.value })}
                    label="Nome" />
                <Input id="InputQuantidade" type="text" placeholder="Quantidade em estoque"
                    onChange={e => setInput({ quantidade: e.target.value })}
                    label="Quantidade" />
            </InfoProduct>
            <InfoProduct>
                <Input id="InputDescricao" type="text" placeholder="Descrição"
                    onChange={e => setInput({ descricao: e.target.value })}
                    label="Descricao" />
                <Input id="InputCadastro" type="text" placeholder="Data do cadastro"
                    onChange={e => setInput({ dataCadastro: e.target.value })}
                    label="Data-do-Cadastro" />
            </InfoProduct>
            <InfoProduct>
                <Input id="InputValor" type="text" placeholder="Valor unitário"
                    onChange={e => setInput({ valorUnitario: e.target.value })}
                    label="Valor-Unitario" />
                <Input id="InputCategoria" type="text" placeholder="Categoria"
                    onChange={e => setInput({ categoria: e.target.value })}
                    label="Categoria" />
            </InfoProduct>
            <AreaImage>
                <InputImagem id="InputImagem" type="image" />
            </AreaImage>
            <AreaButton>
                <Button type="submit">Concluído</Button>
            </AreaButton>
        </Container>
    )
}
export default InserirProduto