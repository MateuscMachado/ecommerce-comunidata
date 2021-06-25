import UserForm from "../../components/UserForm";
import CadastroEndereco from "../../components/CadastroEndereco";
import {useState, useContext} from 'react';
import {apiCep} from '../../services/apiCep'
import {api} from '../../services/api'
import { FormContext } from '../../contexts/FormContexts';
import {
    ContainerButton,
    Button,
    ContainerTitle,
    Title
}
from './styles'

function Cadastro() {

    const {address, setAddress, form, setForm, callAPI, changeBody, setChangeBody, handleClick} = useContext(FormContext)


    /*async function callAPI() {
        var cep = document.getElementById("cep").value;
        cep = cep.replace("-", "")
        var result = await apiCep.get(`/${cep}/json`);
        setAddress(result.data);
    }*/

    /*const handleSubmit = (e) => {
        e.preventDefault();
        var cep = document.getElementById("cep").value;
        var response = 
        api
        .get(`/enderecos/${cep}/numero?numero=${address.numero}`)
        .then((response => console.log(response.data))).catch(erro => console.log(erro));
        
        setAddress(response.data)
    }*/
    console.log(changeBody)
    return (
        <>
            {
                changeBody === false ?
                    <CadastroEndereco /> :
                    <UserForm />
            }
            <ContainerButton>
            <Button onClick={handleClick}>Continuar Cadastro</Button>
            </ContainerButton>
        </>
    )
}
export default Cadastro;