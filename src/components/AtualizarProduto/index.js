import { useState } from 'react';
import { Container, Title, Input, InfoProduct, AreaImage, AreaButton, Button, InfoID, InputImagem } from "./styles"
import { api } from "../../services/api";


function AtualizarProduto() {

    //const [infoProduto, setInfoProduto] = useState([]);

    /* // Setar as novas informações de produto
    function apiRequest() {

        setInfoProduto(produtos);
    }
    */
   
   const initialFormState = {
       id: '',
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
    const [prodId, setProdId] = useState();

    const setInput = (newValue) => {
        setForm(form => (
            { ...form, ...newValue }
            ))
    }

    const atualizarProd= async ()=>{
        await api.put(`/produtos/${form.id}`, form)
        alert("Produto atualizado com sucesso!!!")
    }
    
    return (
        <Container>
            <Title>
                Atualizar Produto
            </Title>
            <InfoID>
                 <Input id="prodtId" type="text" placeholder="ID do produto"
                    onChange={e => setInput({id: e.target.value })}/>
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
                <Button onClick={atualizarProd}>Concluído</Button>
            </AreaButton>
        </Container>
    )

}
export default AtualizarProduto;