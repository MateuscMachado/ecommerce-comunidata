import React, { useState } from 'react';
import {
    Container,
    Title,
    Input,
    Form,
    AreaForm1,
    AreaForm2,
    ContainerTitle,
    Button
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
        uf: '',
        numero: ''

    }
    const [form, setForm] = useState(initialFormState)

    const setInput = (newValue) => {
        setForm(form => (
            { ...form, ...newValue }
        ))
    }

    const [address, setAddress] = useState("");

    async function callAPI() {
        var cep = document.getElementById("cep").value;
        var result = await apiCep.get(`/${cep}/json`);
        setAddress(result.data);
    }

    return (
        <>
            <ContainerTitle>
                <Title>Formulário de Cadastro</Title>
            </ContainerTitle>
            <Container>
                <Form>
                    <AreaForm1>
                        <Input name="Nome-Completo"
                            placeholder="Nome"
                            onChange={e => setInput({ nomeCompleto: e.target.value })}
                            label="Nome-Completo"
                        />
                        <Input name="email"
                            placeholder="E-mail"
                            onChange={e => setInput({ email: e.target.value })}
                            label="E-mail"
                        />
                        <Input name="nomeUsuario"
                            placeholder="Usuário"
                            onChange={e => setInput({ nomeUsuario: e.target.value })}
                            label="Nome-Usuario"
                        />
                        <Input name="senha"
                            placeholder="Senha"
                            onChange={e => setInput({ senha: e.target.value })}
                            label="Senha"
                        />
                        <Input name="cpf"
                            placeholder="CPF"
                            onChange={e => setInput({ cpf: e.target.value })}
                            label="CPF"
                        />
                        <Input name="telefone"
                            placeholder="Telefone"
                            onChange={e => setInput({ telefone: e.target.value })}
                            label="Telefone"
                        />
                        <Input name="dataNasc"
                            placeholder="Data Nascimento"
                            onChange={e => setInput({ dataNasc: e.target.value })}
                            label="DataNasc"
                        />
                    </AreaForm1>
                    <AreaForm2>
                        <Input id="cep"
                            placeholder="CEP"
                            onBlur={callAPI}
                            label="CEP"
                        />
                            <Input disabled="true" value={address.logradouro}/>
                            <Input disabled="true" value={address.localidade}/>
                            <Input disabled="true" value={address.uf}/>
                            
                        <Input name="numero"
                            placeholder="Número"
                            onChange={e => setInput({ numero: e.target.value })}
                            label="Numero"
                        />
                        <button type="button" classeName="btn primary">Enviar Dados</button>
                    </AreaForm2>
                </Form>
            </Container>
        </>
    );
}
export default UserForm;