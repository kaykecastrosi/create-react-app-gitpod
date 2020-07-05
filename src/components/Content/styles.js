import styled from 'styled-components'

export const Container = styled.div`
    grid-area: CT;
    background-color: #fafafa;
    overflow-y: scroll;
    ::-webkit-scrollbar {
        display: none;
    }
    overflow-x: hidden;
    min-width: 100%;
    min-height: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
`
export const Subject = styled.div`
    width: 350px;
    height: 350px;
    background-color: #fafafa;
    border-bottom: 1px solid #dedede;
    border-right: 1px solid #dedede;
    border-top: 1px solid #dedede;
    transition: 400ms;
    color: #000;
    cursor: pointer;
    min-width: 100px;
    margin-right: 15px;
    margin-top: 5px;
    margin-bottom: 5px;
    margin-left: 30px;
    border-radius: 8px;
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