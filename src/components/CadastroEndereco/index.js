import { AreaForm2, Input, Form, ContainerTitle, Title, Container, Button } from './styles'
import React, { useState, useContext } from 'react';
import { api } from '../../services/api'
import { apiCep } from '../../services/apiCep'
import { FormContext } from '../../contexts/FormContexts';

function CadastroEndereco() {
    const { address, setAddress, callAPI, handleClick, setForm, form } = useContext(FormContext)

    /*async function callAPI() {
        var cep = document.getElementById("cep").value;
        var result = await apiCep.get(`/${cep}/json`);
        setAddress(result.data);
    }*/
    const handleSubmit = async (e) => {
        e.preventDefault();
        var cep = document.getElementById("cep").value;
        var response = await api.get(`/enderecos/${cep}/numero?numero=${address.numero}`)
        setAddress(response.data)
        setForm(prevState => ({ ...prevState, endereco: { id: response.data.id } }))
    }
    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setAddress({[name]:value});
    // }
    return (
        <>
            <ContainerTitle>
                <Title>Formulário de Cadastro</Title>
            </ContainerTitle>
            <Container>
                <Form onSubmit={handleSubmit}>
                    <AreaForm2>
                        <Input id="cep"
                            name="cep"
                            placeholder="CEP"
                            onBlur={callAPI}
                            label="CEP"
                        />
                        <Input disabled={true} value={address?.logradouro} />
                        <Input disabled={true} value={address?.localidade} />
                        <Input disabled={true} value={address?.uf} />

                        <Input id="numero"
                            name="numero"
                            placeholder="Número"
                            onChange={e => setAddress({ numero: e.target.value })}
                            label="Numero"
                        />
                        <Button /*{onClick={handleClick}}*/ type="submit">Concluir</Button>
                    </AreaForm2>
                </Form>
            </Container>
        </>
    )
};
export default CadastroEndereco;