import React, { useEffect, useState } from 'react'
import { Container, Subject, Icon, Circle, Title } from './styles'
import { useSelector } from 'react-redux'
import api from '../../services/api'
import { MdSchool } from "react-icons/md";
import {IconContext} from "react-icons"

export default function Content() {
    const subjects = useSelector(state => state.subjects)
    const selected = useSelector(state => state.selected[0])
    const [tasks, setTasks] = useState([])
    const [isLoading, setLoading] = useState(false)
    useEffect(() => {
        setLoading(true)
        api.get("/tasks")
            .then(res => {
                console.log(res.data)
                setTasks(res.data)
            }).then(() => {
                setLoading(false)
            })
    }, [])

    useEffect(() => {

    }, useSelector(state => state.selected))

    const loading = () => (
        <div style={{ display: "flex", minWidth: "100%", minHeight: "100%", alignItems: "center", justifyContent: "center", backgroundColor: "#00000020" }}>
            <IconContext.Provider  value={{ style: {fontSize: '50px',  marginLeft: "8px",} }} >
                    <MdSchool/>
                </IconContext.Provider>
        </div>
    )
    
    return (
        <Container>
                {isLoading ? loading() : selected == "all" ? tasks.map(task => (
                    <Subject key={task._id} style={{  borderLeft: `5px solid ${ subjects.filter(subject => subject.code == task.subject)[0].color}`, }}>
                        <Title>{task.title}</Title>
                    </Subject>
                )) : tasks.filter(task => task.subject == selected).map(task => (
                    <Subject key={task._id} style={{  borderLeft: `5px solid ${ subjects.filter(subject => subject.code == task.subject)[0].color}`, }}>
                        <Title>{task.title}</Title>
                </Subject>))}
        </Container>

    )
}