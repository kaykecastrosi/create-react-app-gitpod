import React from 'react'

import { Grid } from './styles'

import Header from '../Header'
import Subjects from '../Subjects'
import Content from '../Content'

export default function Layout() {
    return (
        <Grid>
            <Header />
            <Subjects />
            <Content />
        </Grid>
    )
}