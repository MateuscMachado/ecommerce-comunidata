import UserForm from "../../components/UserForm";
import CadastroEndereco from "../../components/CadastroEndereco";
import { useContext } from 'react';
import { FormContext } from '../../contexts/FormContexts';
import { ContainerButton, Button } from './styles'

function Cadastro() {

    const {  changeBody, handleClick } = useContext(FormContext)

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