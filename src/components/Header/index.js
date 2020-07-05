import React from 'react'
import { Container, Title, Button } from './styles'
import { MdSchool } from "react-icons/md";
import {IconContext} from "react-icons"

export default function Header() {
        return (
            <Container>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <IconContext.Provider  value={{ style: {fontSize: '50px',  marginLeft: "8px",} }} >
                    <MdSchool/>
                </IconContext.Provider>
                <Title>SCHOOLWORK</Title>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Button>
                        <h3 style={{ fontWeight: 400, fontFamily: 'Roboto'}}>Painel do Admin</h3>
                    </Button>
                </div>
                
            </Container>
    )
}