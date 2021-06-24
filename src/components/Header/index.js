import { HeaderStyle, Input, LogoHeader, Div, ButtonPesquisa, Entrar, Text } from "./styles";
import { Link } from "react-router-dom";
function Header() {
    return (
        <HeaderStyle>
            <LogoHeader  src="https://cdn.discordapp.com/attachments/823984320809009222/857319637397274654/logoCanto.png" />
             <Text>Comunidata</Text>
            <Div class="nav-right">
                <Input placeholder="search"/>
                <ButtonPesquisa type="submit">pesquisar</ButtonPesquisa>
            </Div>
            <Entrar>
                <Link to="/login" ><button className='entrar'>Entrar</button> </Link>
            </Entrar>
        </HeaderStyle>

    )

}
export default Header;