import {
    Container,
    ImageContainer,
    Image,
    TextContainer,
    Description,
    Price,
} from './styles';

function Produto({name, description, image}) {
    return (
        <Container>

            <ImageContainer>
                <Image />
            </ImageContainer>

            <TextContainer>
                <Description></Description>
                <Price></Price>
            </TextContainer>
        </Container>
    )
}

export default Produto;