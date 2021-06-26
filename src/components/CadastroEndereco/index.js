import { AreaForm2, Input, Form, ContainerTitle, Title, Container, Button } from './styles'
import React, { useState, useContext } from 'react';
import { api } from '../../services/api'
import { FormContext } from '../../contexts/FormContexts';

function CadastroEndereco() {
    const { address, setAddress, callAPI, handleClick, setForm, form } = useContext(FormContext)

    const handleSubmit = async (e) => {
        e.preventDefault();
        var cep = document.getElementById("cep").value;
        api.get(`/enderecos/${cep}/numero?numero=${address.numero}`)
        .then((response)=>{
            setAddress(response.data);
            setForm(prevState => ({ ...prevState, endereco: { id: response.data.id } }));
            handleClick()})
            .catch((error)=>{
            alert(error.message)
        })
        
        
    }
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
                        <Button type="submit">Concluir</Button>
                    </AreaForm2>
                </Form>
            </Container>
        </>
    )
};
export default CadastroEndereco;