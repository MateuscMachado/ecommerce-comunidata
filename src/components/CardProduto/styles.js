import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 15em;
    width: 13em;
    margin-top: 1em;
    margin-left: 1em;
    border-radius: 0.2em;
    background: #242528;
    color: #f2f2f2;
    box-shadow: 0 0 2em #242528;
`;
export const ImageContainer = styled.div`

`;
export const Image = styled.img`
    width: 100%;
    border-radius: 15px;;
`;
export const TextContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: flex-end;
height: 100%;
`;
export const Title = styled.h3`
    
    font-size: 14px;
    float: left;
`;
export const Price = styled.p`
    bottom: 0;
    float: right;
`;
