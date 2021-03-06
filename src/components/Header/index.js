import { HeaderStyle, Input, LogoHeader, Formatacao, Div, ButtonPesquisa, Entrar, Text } from "./styles";
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useState } from "react";

function Header() {

    const [prodName, setProdName] = useState();

    const buscarNome = async () => {
        var response = await api.get(`/produtos/nome?nome=${document.getElementById("search").value}`)
        setProdName(response.data)
    }

    return (
        <HeaderStyle>
            <Formatacao>
                <Link to="/">
                    <LogoHeader src="https://cdn.discordapp.com/attachments/823984320809009222/857319637397274654/logoCanto.png" />
                </Link>
                <Text>Comunidata</Text>
            </Formatacao>
            <Div class="nav-right">
                <Input id="search" placeholder="search" />
                <Link to={`/produto/${prodName?.id}`}><ButtonPesquisa onClick={buscarNome}>pesquisar</ButtonPesquisa></Link>
            </Div>
            <Entrar>
                <Link to="/login" ><button className='entrar'>Entrar</button> </Link>
            </Entrar>
        </HeaderStyle>
    )
}
export default Header;