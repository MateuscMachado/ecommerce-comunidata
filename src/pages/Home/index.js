import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import produtos from '../../mock/produtos.json'
import CardProduto from "../../components/CardProduto";
import { Container } from "./style"


function Home() {

    const [listaProdutos, setListaProdutos] = useState([])

    console.log(listaProdutos);



  useEffect(() => {
        async function handleProducts() {
            const response = await api.get(`/produtos`)
            setListaProdutos(response.data)
        }
        handleProducts();
    }, [])


    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
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
        </div>
    )
}

export default Home;