import { Container, ImageContainer, Image, TextContainer, Price, Title } from './styles';
import {Link} from 'react-router-dom'

function CardProduto(props) {
    console.log(props.url);
    return (
        <Link to = "/produto">
            <Container>
                <Image src={props.url} alt={props.nome} />
                <TextContainer>
                    <Title>{props.nome}</Title>
                    <Price>R${props.preco}</Price>
                </TextContainer>
            </Container>
        </Link>
    )
}

export default CardProduto;