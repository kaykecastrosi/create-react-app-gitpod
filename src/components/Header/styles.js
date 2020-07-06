import styled from 'styled-components'

export const Container = styled.div`
    grid-area: HD;
    box-sizing: border-box;
    border-bottom: 1px solid #dedede;
    background: #fff;
    display: flex;
    justify-content: space-between;
    height: 80px;
    overflow: hidden;
    align-items: center;
    color: #5fa8d3;

`

export const Title = styled.h1`
    margin-left: 16px;
    font-family: 'Roboto';
    @media(max-width: 800px){
        font-size: 20px;
        margin-left: 10px;
    }
`

export const Button = styled.div`
    width: 150px;
    height: 50px;
    border-style: solid;
    border-radius: 8px;
    background-color: #fff;
    margin-right: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-width: 3px;
    cursor: pointer;
    transition: 400ms;
    @media(max-width: 800px){
        width: 90px;
        height: 30px;
        margin-right: 16px;
    }

    &:hover {
        color: #fff;
        background-color: #5fa8d3;
    }
`

export const ButtonText= styled.h3`
    font-weight: 400; 
    font-family: 'Roboto';
    @media(max-width: 800px){
        font-size: 12px;
    }
`
