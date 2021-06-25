import { Link } from "react-router-dom"
import { Button, Container, Input, Texto, ContainerTitle, Title } from "./styles"
import { useState } from "react"

function Login() {
    const [nome, setNome] = useState()
    const [senha, setSenha] = useState()



    return (
        <div>
             <ContainerTitle>
                <Title>Faça seu Login</Title>
            </ContainerTitle>
            <Container>
                <form action="">
                    <Input id= "username" onChange={a => setNome(a.target.value)} type="text" placeholder="Nome Usuário" />
                    <Input id = "password" onChange={b => setSenha(b.target.value)} type="text" placeholder="Senha Usuário " />
                <Link to="/cliente" ><Button>Entrar</Button> </Link>
                </form>
                <Texto>
                    <Link to="/cadastro"><p>Não tem cadastro? Crie uma conta</p></Link>
                </Texto>
            </Container>

        </div>
    )
}
export default Login;