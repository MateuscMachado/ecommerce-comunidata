import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Produto from "../../components/Produto";
import api from "../../services/api";

function Home() {

    const [listaProdutos, setListaProdutos] = useState([])

    async function handleProducts() {

        const response = await api.get(`/produtos`);
        console.log(`Teste`);
        console.log(response);

        const produtos = response.data;
        console.log(response.data);

        setListaProdutos([produtos]);
    }
    handleProducts();

    useEffect(() => {

    }, [])

    return (
        <div>
            {
                listaProdutos.map(produto => {
                    return <Produto /*name={} description={} image={}*/ />
                })
            }
        </div>
    )
}

export default Home;