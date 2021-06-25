import { createContext, useState } from 'react';
import { api } from "../../services/api"
import { apiCep } from "../../services/apiCep"

export const FormContext = createContext();
export function FormProvider({ children }) {

    const [address, setAddress] = useState({
        bairro: "",
        cep: "",
        complemento: "",
        localidade: "",
        logradouro: "",
        numero: 0,
        uf: ""
    });

    const initialFormState = {
        email: '',
        nomeUsuario: '',
        nomeCompleto: '',
        senha: '',
        cpf: '',
        telefone: '',
        dataNasc: '',
        endereco: {
            id: 0
        }
    }
    const [form, setForm] = useState(initialFormState);

    const [changeBody, setChangeBody] = useState(false)

    async function callAPI() {
        var cep = document.getElementById("cep").value;
        cep = cep.replace("-", "")
        var result = await apiCep.get(`/${cep}/json`);
        setAddress(result.data);
    }

    const inserirCliente = (e) => {
        e.preventDefault();
        api
            .post(`/clientes`, form)
            .then((response => console.log(response.data)));

    }

    const handleClick = () => {
        setChangeBody(!changeBody)
    }

    return (
        <FormContext.Provider value={{ address, setAddress, form, setForm, callAPI, inserirCliente, changeBody, setChangeBody, handleClick }} >
            {children}
        </FormContext.Provider>
    )
}