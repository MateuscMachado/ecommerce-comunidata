import { Link } from "react-router-dom"
import { Button, Container, Input, Texto, ContainerTitle, Title } from "./styles"
import { useEffect, useState } from "react"
import { api } from "../../services/api"

function Login() {
    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
    const [clientes, setClientes] = useState([])

    useEffect(() =>{
        const listClientes = async (e) => {
            //e.preventDefault();
            const response = await api.get("/clientes")
            setClientes(response.data)
        }
        listClientes();
    },[])


    return (
        <>
            <ContainerTitle>
                <Title>Faça seu Login</Title>
            </ContainerTitle>
            <Container>
                <form action="">
                    <Input id="username" onChange={a => setNome(a.target.value)} type="text" placeholder="Nome Usuário" />
                    <Input id="password" onChange={b => setSenha(b.target.value)} type="password" placeholder="Senha Usuário " />
                    {
                        clientes.filter(cliente => cliente.nomeUsuario === nome)?
                        <Link to={`/cliente/${clientes?.id}`} ><Button>Entrar</Button> </Link>:
                        nome==="admin"?
                        <Link to={`/admin`}><Button>Entrar</Button> </Link>:
                        alert("Cliente não cadastrado")
                    }
                </form>
                <Texto>
                    <Link to="/cadastro"><p>Não tem cadastro? Crie uma conta</p></Link>
                </Texto>
            </Container>

        </>
    )
}
export default Login;