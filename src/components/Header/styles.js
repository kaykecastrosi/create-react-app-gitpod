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
}
`

export const Title = styled.h1`
    margin-left: 16px;
    font-family: 'Roboto';
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

    &:hover {
        color: #fff;
        background-color: #5fa8d3;
    }
`
