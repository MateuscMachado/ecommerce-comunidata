import { Link, useHistory } from "react-router-dom"
import { Button, Container, Input, Texto, ContainerTitle, Title } from "./styles"
import { useEffect, useState } from "react"
import { api } from "../../services/api"

function Login() {
    const [nome, setNome] = useState("");
    const [senha, setSenha] = useState("");
    const [clientes, setClientes] = useState([]);
    const history = useHistory()

    useEffect(() => {
        const listClientes = async (e) => {
            //e.preventDefault();
            const response = await api.get("/clientes")
            setClientes(response.data.content)
        }
        listClientes();
    }, [])

    const handleLogin = (e) => {
        e.preventDefault();
        const usuario = clientes.filter(cliente => cliente.nomeUsuario === nome)[0]
        if (nome === "admin") {
            console.log("entrei no admin");
            history.push("/admin")
        } else if (usuario !== undefined) {
            console.log("entrei no cliente");
            history.push(`/clientes/${usuario.id}`)
        } else {
            alert("Usuario não cadastrado")
        }
    }

    return (
        <Container className="outerContainer">
            <Container className="innerContainer">
                <Title>Faça seu Login</Title>
                <form onSubmit={(e) => handleLogin(e)} >
                    <Input id="username" onChange={a => setNome(a.target.value)} type="text" placeholder="Nome Usuário" />
                    <Input id="password" onChange={b => setSenha(b.target.value)} type="password" placeholder="Senha Usuário " />
                    <Button type="submit" >Entrar</Button>
                </form>
                <Texto>
                    <Link to="/cadastro"><p>Não tem cadastro? Crie uma conta</p></Link>
                </Texto>
            </Container>
        </Container>
    )
}
export default Login;