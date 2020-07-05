import React, { useState, useEffect } from 'react'
import { Container, Subject, Icon, Circle, Title } from './styles'
import { useSelector, useDispatch } from 'react-redux'

export default function Subjects(props) {
    const subjects = useSelector(state => state.subjects)
    const selected = useSelector(state => state.selected[0])
    const dispatch = useDispatch()
    function change(selected) {
        dispatch({ type: "CHANGE_SELECTED", selected })
    }

    useEffect(() => {

    }, useSelector(state => state.selected))

    return (
        <Container>
                {subjects.map(subject => (
                <Subject onClick={() => { change(subject.code) }} style={{ backgroundColor: subject.code == selected ? `${subject.color}` : "#fafafa", color: subject.code == selected ? "#fff" : "#000"  }}  key={subject.id}>
                    <Circle style={{backgroundColor: `${subject.color}`}}>
                        <Icon src={require(`../../../assets/icons/${subject.code}.png`)} />
                    </Circle>
                    <Title>{subject.title}</Title>
                </Subject>

            ))}
        </Container>

    )
}