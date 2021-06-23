import { Container, ImageContainer, Image, TextContainer, Price, Title } from './styles';
import { Link } from 'react-router-dom'

function CardProduto(props) {
    console.log(props.url);
    return (
        <Container>
            <Image src={props.url} alt={props.nome} />
            <TextContainer>
                <Title>{props.nome}</Title>
                <Price>R${props.preco}</Price>
            </TextContainer>
        </Container>
    )
}

export default CardProduto;