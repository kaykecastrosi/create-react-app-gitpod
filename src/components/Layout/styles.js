import styled from 'styled-components'

export const Grid = styled.div`
    display: grid;
    grid-template-columns: 20% auto ;
    grid-template-rows: 80px auto 80px ;
    grid-template-areas:
        'HD HD'
        'SJ CT'
        'BT BT';
    height: 100vh;
`