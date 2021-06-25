import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import CardProduto from "../../components/CardProduto";
import { Container, Div } from "./style"

function Home() {

    const [listaProdutos, setListaProdutos] = useState([])

    useEffect(() => {
        async function handleProducts() {
            const response = await api.get(`/produtos`)
            setListaProdutos(response.data)
        }
        handleProducts();
    }, [])

    return (
        <Div>
            {
                listaProdutos.map(produto => {
                    return (
                        <Container>
                            <Link to="/produto">
                                <CardProduto key={produto.id} nome={produto.nome} descricao={produto.descricao} url={produto.url} preco={produto.valorUnitario} />
                            </Link>
                        </Container>
                    )
                })
            }
        </Div>
    )
}
export default Home;