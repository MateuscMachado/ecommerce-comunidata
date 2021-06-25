import UserForm from "../../components/UserForm";
import CadastroEndereco from "../../components/CadastroEndereco";
import {useState, useContext} from 'react';
import {apiCep} from '../../services/apiCep'
import {api} from '../../services/api'
import { FormContext } from '../../contexts/FormContexts';

function Cadastro() {

    const {address, setAddress, form, setForm, callAPI} = useContext(FormContext)
    const [changeBody, setChangeBody] = useState(false)

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

    const handleClick = () => {
        setChangeBody(!changeBody)
    }

    return (
        <>
            {
                changeBody === false ?
                    <CadastroEndereco /> :
                    <UserForm />
            }
            <button onClick={handleClick}>Continuar!</button>
        </>
    )
}
export default Cadastro;