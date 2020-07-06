import React from 'react'
import { Container, Title, Button, ButtonText } from './styles'
import { MdSchool } from "react-icons/md";
import {IconContext} from "react-icons"

export default function Header() {
        return (
            <Container>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <IconContext.Provider  value={{ style: {fontSize: '30px',  marginLeft: "8px",} }} >
                    <MdSchool/>
                </IconContext.Provider>
                <Title>SCHOOLWORK</Title>
                </div>
                <div style={{ display: "flex", alignItems: "center" }}>
                    <Button>
                        <ButtonText>Painel do Admin</ButtonText>
                    </Button>
                </div>
                
            </Container>
    )
}