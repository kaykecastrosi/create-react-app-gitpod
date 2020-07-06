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
    transition: 400ms;
`
export const Subject = styled.div`
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: 60px auto 60px;
    grid-template-areas: 
        'HD HD'
        'CT CT'
        'FN PF';
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
    @media(max-width: 800px){
        width: 280px;
        height: 280px;   
    }
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
    flex-shrink: 0;
`

export const Icon = styled.img`
    width: 30px;
    height: 30px;
`

export const Title = styled.h2`
    margin-left: 8px;
    font-family: 'Roboto';
    font-weight: 400;
`

export const Description = styled.p`
    font-size: 20px;
    font-family: 'Roboto';
    word-wrap: break-word;
`

export const Header = styled.div`
    grid-area: HD; 
    display: flex; 
    flex-direction: row; 
    margin-top: 10px;
    align-items: center;
`

export const Body = styled.div`
    grid-area: CT;
    margin-left: 10px;
`

export const Data = styled.div`
    grid-area: FN;
`

export const Platform = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    grid-area: PF;
    border-radius: 8px;
    background-color: #ff8700;
    margin-bottom: 6px;
    margin-right: 6px;
    flex-shrink: none;
    align-items: center;
    justify-content: center;
`

export const FinalData = styled.h2`
    margin-left: 8px;
    font-family: 'Roboto';
    font-weight: 400;
    @media(max-width: 800px){
        font-size: 20px; 
    }
`
