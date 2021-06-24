import React, {useState} from 'react';
import {
    Container,
    Title,
    Input,
    Form,
} from "./styles";
import { apiCep } from '../../services/apiCep';

const UserForm = () => {

    //contrato inicial com o cliente
    const initialFormState = {
        email: '',
        nomeUsuario: '',
        nomeCompleto: '',
        senha: '',
        cpf: '',
        telefone: '',
        dataNasc: '',
        cep: '',
        logradouro: '',
        localidade: '',
        estado: '',
        numero: ''

    }
    const [form, setForm] = useState(initialFormState)

    const setInput = (newValue) => {
        setForm(form => (
            { ...form, ...newValue }
        ))
    }

    const [adress, setAdress] = useState();
    const [hasData, setHasData] = useState(false);


    async function callAPI() {
        var cep = document.getElementById("cep").value;
        //cep = cep.replace("-", "")
        //`/${cep}/json` TEMPLATE STRING
        var result = await apiCep.get(`/${cep}/json`);
        //Armazena o result.data no estado
        setAdress(result.data);
        setHasData(true)
    }

    return (
        <Container>
            <Title>Formulário de Cadastro</Title>
            <Form>
                <div className="form-group">
                    <Input name="Nome-Completo"
                        placeholder="Nome"
                        onChange={e => setInput({ nomeCompleto: e.target.value })}
                        label="Nome-Completo"
                    />
                </div>
                <div className="form-group">
                    <Input name="email"
                        placeholder="E-mail"
                        onChange={e => setInput({ email: e.target.value })}
                        label="E-mail"
                    />
                </div>

                <div className="form-group">
                    <Input name="nomeUsuario"
                        placeholder="Usuário"
                        onChange={e => setInput({ nomeUsuario: e.target.value })}
                        label="Nome-Usuario"
                    />
                </div>

                <div className="form-group">
                    <Input name="senha"
                        placeholder="Senha"
                        onChange={e => setInput({ senha: e.target.value })}
                        label="Senha"
                    />
                </div>

                <div className="form-group">
                    <Input name="cpf"
                        placeholder="CPF"
                        onChange={e => setInput({ cpf: e.target.value })}
                        label="CPF"
                    />
                </div>

                <div className="form-group">
                    <Input name="telefone"
                        placeholder="Telefone"
                        onChange={e => setInput({ telefone: e.target.value })}
                        label="Telefone"
                    />
                </div>

                <div className="form-group">
                    <Input name="dataNasc"
                        placeholder="Data Nascimento"
                        onChange={e => setInput({ dataNasc: e.target.value })}
                        label="DataNasc"
                    />
                </div>

                <div className="form-group">
                    <Input name="cep"
                        placeholder="CEP"
                        onChange={e => setInput({ cep: e.target.value })}
                        label="CEP"
                    />
                    <button onClick={callAPI}>Fazer Request</button>
                    {
                        hasData ? (
                            <div>
                                <h3>Logradouro: <strong></strong>{adress.logradouro}</h3>
                                <h3>Localidade: <strong></strong>{adress.localidade}</h3>
                                <h3>Estado: <strong></strong>{adress.estado}</h3>
                            </div>
                        ) : null
                    }
                </div>

                <div className="form-group">
                    <Input name="numero"
                        placeholder="Número"
                        onChange={e => setInput({ numero: e.target.value })}
                        label="Numero"
                    />
                </div>

                <div className="form-group">
                    <button type="button" classeName="btn primary">Enviar Dados</button>
                </div>
            </Form>
        </Container>
    );
}
export default UserForm;