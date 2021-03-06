import React, { useState, useContext } from 'react';
import {
    Container,
    Title,
    Input,
    Form,
    AreaForm1,
    ContainerTitle,
    Button,
    ContainerButton
} from "./styles";
import CadastroEndereco from '../CadastroEndereco';
import { FormContext } from '../../contexts/FormContexts';
import {api} from '../../services/api';

function ClienteForm (props) {
    const {form, setForm, address, setAddress} = useContext(FormContext)
    const {endereco} = form;

    const changeInput = (newValue) => {
        setForm(form => (
            { ...form, ...newValue }
        ))
    }

    const atualizarCliente = async (e) =>{
        e.preventDefault();
        var response = await api.put(`/clientes/${props.id}`, form)
    }

    return (
        <>
            <ContainerTitle>
                <Title>Formulário de Cadastro</Title>
            </ContainerTitle>
            <Container>
                <Form onSubmit={atualizarCliente}>
                    <AreaForm1>
                        <Input
                            name="nomeCompleto"
                            placeholder="Nome"
                            onChange={e => changeInput({ nomeCompleto: e.target.value })}
                            label="Nome-Completo"
                            value={form.nomeCompleto}
                        />
                        <Input 
                            name="email"
                            placeholder="E-mail"
                            onChange={e => changeInput({ email: e.target.value })}
                            label="E-mail"
                            value={form.email}
                        />
                        <Input 
                            name="nomeUsuario"
                            placeholder="Usuário"
                            onChange={e => changeInput({ nomeUsuario: e.target.value })}
                            label="Nome-Usuario"
                            value={form.nomeUsuario}
                        />
                        <Input 
                            name="senha"
                            placeholder="Senha"
                            onChange={e => changeInput({ senha: e.target.value })}
                            label="Senha"
                            value={form.senha}
                        />
                        <Input
                            name="cpf"
                            placeholder="CPF"
                            onChange={e => changeInput({ cpf: e.target.value })}
                            value={form.cpf}
                            label="CPF"
                        />
                        <Input 
                            name="telefone"
                            placeholder="Telefone"
                            onChange={e => changeInput({ telefone: e.target.value })}
                            value={form.telefone}
                            label="Telefone"
                        />
                        <Input 
                            name="dataNasc"
                            placeholder="Data Nascimento"
                            onChange={e => changeInput({ dataNasc: e.target.value })}
                            label="DataNasc"
                            value={form.dataNasc}
                        />
                    </AreaForm1>
                    <ContainerButton>
                    <Button type="submit">Enviar</Button>
                    </ContainerButton>
                </Form>
            </Container>

        </>
    );
}
export default ClienteForm;