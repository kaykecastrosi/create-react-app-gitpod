import React, { useEffect, useState } from 'react'
import { FinalData, Data, Platform, Body, Container, Subject, Icon, Circle, Title, Description, Header } from './styles'
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
        <div style={{ transition: "400ms", display: "flex", minWidth: "100%", minHeight: "100%", alignItems: "center", justifyContent: "center", backgroundColor: "#00000020" }}>
            <IconContext.Provider  value={{ style: {fontSize: '50px',  marginLeft: "8px",} }} >
                    <MdSchool/>
                </IconContext.Provider>
        </div>
    )
    
    return (
        <Container>
                {isLoading ? loading() : selected == "all" ? tasks.map(task => (
                    <Subject key={task._id} style={{  borderLeft: `5px solid ${ subjects.filter(subject => subject.code == task.subject)[0].color}`, }}>
                       <Header>
                        <Circle style={{backgroundColor: `${subjects.filter(subject => subject.code == task.subject)[0].color}`}}>
                        <Icon src={require(`../../../assets/icons/${task.subject}.png`)} />
                        </Circle>
                        <Title>{task.title}</Title>
                       </Header>
                       <Body>
                           <Description>{task.description}</Description>
                       </Body>
                       <Data>
                           <FinalData>Data final: {task.finalData}</FinalData>
                       </Data>
                       <Platform>
                           <img style={{ width: "70px", height: "35px" } } src={require(`../../../assets/platforms/${task.platform}.png`)} />
                       </Platform>
                           
                    </Subject>
                )) : tasks.filter(task => task.subject == selected).map(task => (
                    <Subject key={task._id} style={{  borderLeft: `5px solid ${ subjects.filter(subject => subject.code == task.subject)[0].color}`, }}>
                       <Header>
                        <Circle style={{backgroundColor: `${subjects.filter(subject => subject.code == task.subject)[0].color}`}}>
                        <Icon src={require(`../../../assets/icons/${task.subject}.png`)} />
                        </Circle>
                        <Title>{task.title}</Title>
                       </Header>
                       <Body>
                           <Description>{task.description}</Description>
                       </Body>
                       <Data>
                           <FinalData>Data final: {task.finalData}</FinalData>
                       </Data>
                       <Platform>
                           <img style={{ width: "70px", height: "35px" } } src={require(`../../../assets/platforms/${task.platform}.png`)} />
                       </Platform>
                           
                    </Subject>
                    ))}
        </Container>

    )
}