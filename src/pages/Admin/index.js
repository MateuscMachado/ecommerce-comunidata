import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import InserirProduto from "../../components/InserirProduto";
import DeletarProduto from "../../components/DeletarProduto";
import AtualizarProduto from "../../components/AtualizarProduto";

import { BarraTitulo, ColunaOpcoes, OpInserir, OpDeletar, OpAtualizar, ListaOpcoes, Conteudo, } from './style';

function Admin(props) {

    const [opcao, setOpcao] = useState();

    function inserirProduto() {
        setOpcao(1);
    }

    function deletarProduto() {
        setOpcao(2);
    }

    function atualizarProduto() {
        setOpcao(3);
    }

    return (
        <>
            <BarraTitulo>
                <div>ÁREA DO ADMINISTRADOR</div>
            </BarraTitulo>
            <Conteudo>
                <ColunaOpcoes>
                    <ListaOpcoes>
                        <OpInserir onClick={inserirProduto}>
                            Inserir Produto
                        </OpInserir>
                        <OpDeletar onClick={deletarProduto}>
                            Deletar Produto
                        </OpDeletar>
                        <OpAtualizar onClick={atualizarProduto}>
                            Atualizar Produto
                        </OpAtualizar>
                    </ListaOpcoes>
                </ColunaOpcoes>
                {
                    opcao === 1 ?
                        <InserirProduto /> :
                        opcao === 2 ?
                            <DeletarProduto /> :
                            <AtualizarProduto />
                }
            </Conteudo>
        </>
    )
}
export default Admin;