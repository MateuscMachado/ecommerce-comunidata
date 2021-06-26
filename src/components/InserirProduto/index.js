import {  useState } from "react"
import { api } from "../../services/api";

import { Container, Title, Input, InfoProduct, AreaButton, Button, InfoID } from "./styles"

function InserirProduto() {
    
    const inserirProd = async () => {
        await api.post(`/produtos`, form)
    }
    
    const initialFormState = {
        nome: '',
        qtdEstoque: '',
        descricao: '',
        dataCadastro: '',
        valorUnitario: '',
        categoria: {
             id: '' 
            },
        url: '',
    }

    const [form, setForm] = useState(initialFormState);

    const setInput = (newValue) => {
        setForm(form => (
            { ...form, ...newValue }
            ))
    }

    return (
        <Container>
            <Title>
                Inserir Produto
            </Title>
            <InfoID>
                <Input id="catId" type="text" placeholder="ID da categoria"
                    onChange={e => setInput({ categoria: { id: e.target.value } })}/>
            </InfoID>
            <InfoProduct>
                <Input id="InputNome" type="text" placeholder="Nome"
                    onChange={e => setInput({ nome: e.target.value })}/>
                <Input id="InputQuantidade" type="text" placeholder="Quantidade em estoque"
                    onChange={e => setInput({ qtdEstoque: e.target.value })} />
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
                <Input id="InputUrl" type="text" placeholder="URL da Imagem"
                    onChange={e => setInput({ url: e.target.value })}
                    label="Url" />
            </InfoProduct>
            <AreaButton>
                <Button onClick={inserirProd}>Concluído</Button>
            </AreaButton>
        </Container>
    )
}
export default InserirProduto;