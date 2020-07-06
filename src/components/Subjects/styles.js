import styled from 'styled-components'

export const Container = styled.div`
    grid-area: SJ;
    background-color: red;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
    max-width: 100%;
    overflow-x: hidden;
    border-right: 1px solid #dedede;
`
export const Subject = styled.div`
    width: 100vw;
    height: 80px;
    background-color: #fafafa;
    display: flex;
    align-items: center;
    border-bottom: 1px solid #dedede;
    transition: 400ms;
    color: #000;
    cursor: pointer;
`

export const Circle = styled.div`
    background-color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
    display: flex;
    @media(max-width: 800px){
        margin-left: 14px;
    }
`

export const Icon = styled.img`
    width: 30px;
    height: 30px;
`

export const Title = styled.h3`
    margin-left: 8px;
    font-family: 'Roboto';
    font-weight: 400;
    @media(max-width: 800px){
        font-size: 0.1px;
    }
`