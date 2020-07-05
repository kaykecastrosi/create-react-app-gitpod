import React, { useState } from 'react'

import { Grid } from './styles'

import Header from '../Header'
import Subjects from '../Subjects'
import Bottom from '../Bottom'

export default function Layout() {
    return (
        <Grid>
            <Header />
            <Subjects />
            <Bottom />
        </Grid>
    )
}