import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Produto from "../../components/CardProduto";
import api from "../../services/api";
import produtos from '../../mock/produtos.json'

function Home() {

    const [listaProdutos, setListaProdutos] = useState(produtos)

    console.log(listaProdutos);

    return (
        <div>
            {
                listaProdutos.map(produto => {
                    return <Produto key={produto.id} nome={produto.nome} descricao={produto.descricao} url={produto.url} preco={produto.valorUnitario} />
                })
            }
        </div>
    )
}

export default Home;