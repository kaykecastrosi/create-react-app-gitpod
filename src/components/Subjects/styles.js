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
`

export const Circle = styled.div`
    background-color: #fff;
    width: 50px;
    height: 50px;
    border-radius: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 8px;
`

export const Icon = styled.img`
    width: 30px;
    height: 30px;
`

export const Title = styled.h3`
    margin-left: 8px;
    font-family: 'Roboto';
    font-weight: 400;
`