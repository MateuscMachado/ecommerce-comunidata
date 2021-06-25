import {
    AreaForm2,
    Input,
    Form
} from './styles'
import React, {useState, useContext} from 'react';
import {api} from '../../services/api'
import {apiCep} from '../../services/apiCep'
import { FormContext } from '../../contexts/FormContexts';

function CadastroEndereco() {
    const {address, setAddress, callAPI} = useContext(FormContext)
    
    /*async function callAPI() {
        var cep = document.getElementById("cep").value;
        var result = await apiCep.get(`/${cep}/json`);
        setAddress(result.data);
    }*/

    const handleSubmit = (e) => {
        e.preventDefault();
        var cep = document.getElementById("cep").value;
        var response = 
        api
        .get(`/enderecos/${cep}/numero?numero=${address.numero}`)
        .then((response => console.log(response.data))).catch(erro => console.log(erro));
        
        setAddress(response.data)
        console.log(address)
    }

    // const handleChange = (event) => {
    //     const { name, value } = event.target;
    //     setAddress({[name]:value});
    // }
    return (
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
                    onChange={e => setAddress({numero: e.target.value})}
                    label="Numero"
                    value={address?.numero}
                />
                <button type="submit">Concluir</button>
            </AreaForm2>
        </Form>
    )
};

export default CadastroEndereco;