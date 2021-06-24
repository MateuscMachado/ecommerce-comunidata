import { Link } from "react-router-dom"
import { Button, Container, Input, Texto } from "./styles"
import {useState} from "react"



function Login() {
    const [setNome,nome]=useState()
    const[setSenha,senha]=useState()
    
    return (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
            <Container >
                <form action="">
                    <Input onChange={a=>setNome(a.target.value)} type="text" placeholder="Nome úsuario" />
                    <Input onChange={b=>setSenha(b.target.value) }type="text" placeholder="Senha úsuario " />
                </form>
                <Link to="/" ><Button>Entrar</Button> </Link>
                <Texto>
                    <p>Não cadastrado</p>
                    <Link to="">Crie uma conta</Link>
                </Texto>
            </Container>

        </div>
    )
}
export default Login;