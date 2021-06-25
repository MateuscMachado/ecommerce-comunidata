import { Link } from "react-router-dom"
import { Button, Container, Input, Texto, ContainerTitle, Title } from "./styles"
import { useState } from "react"

function Login() {
    const [setNome, nome] = useState()
    const [setSenha, senha] = useState()

    return (
        <div>
             <ContainerTitle>
                <Title>Faça seu Login</Title>
            </ContainerTitle>
            <Container>
                <form action="">
                    <Input onChange={a => setNome(a.target.value)} type="text" placeholder="Nome Usuário" />
                    <Input onChange={b => setSenha(b.target.value)} type="text" placeholder="Senha Usuário " />
                </form>
                <Link to="/" ><Button>Entrar</Button> </Link>
                <Texto>
                    <Link to="/cadastro"><p>Não tem cadastro? Crie uma conta</p></Link>
                </Texto>
            </Container>

        </div>
    )
}
export default Login;