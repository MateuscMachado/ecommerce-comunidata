import { useEffect, useState } from "react"
import { api } from "../../services/api"
import { Container, Title, AreaOptions, AreaButton, AreaText, Button, Format, Input } from "./styles"

function DeletarProduto() {
    const [id, setId] = useState();

    
    const deletarProduto = async ()=>{
        await api.delete(`/produtos/${id.target.value}`)
        alert("Produto eliminado com sucesso!!!")
    }


    return (
        <Container>
            <Title>
                Deletar Produto
            </Title>
            <AreaOptions>
                <AreaText>
                    Deseja mesmo apagar este produto?
                </AreaText>
                <Format>
                    <Input id= "idProd" type= "number" placeholder="ID do Produto" onChange={setId}/>
                </Format>
                <AreaButton>
                    <Button onClick={deletarProduto}>Sim</Button>
                    <Button>Cancelar</Button>
                </AreaButton>
            </AreaOptions>
        </Container>
    )
}
export default DeletarProduto