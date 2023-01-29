import React from 'react'
import { Paper, Typography, Divider } from '@mui/material'
import "./main.css"

function removeMinutes(hourString, minutesToRemove) {
    let date = new Date()
    date.setHours(parseInt(hourString.split("h")[0]), parseInt(hourString.split("h")[1]))
    date.setHours(date.getHours(), date.getMinutes() - minutesToRemove)
    return `${date.getHours()}h${date.getMinutes()}`
}

export default function Main({Time}) {
    return (<React.Fragment><Paper elevation={5} className='centeredHorizontally centeredVertically mainPaper'>
        <Typography variant='h1' className='mainHour' fontSize={'10vmin'}>
            Prochain repas :
            <br/>
            {Time}
        </Typography>
    </Paper>
    <Divider orientation='horizontal' />
    <Paper elevation={4} className='secondPaper centeredHorizontally'>
        <Typography variant='h3' className='mainHour' fontSize={'5vmin'}>
            Rdv en bas du bat A à {removeMinutes(Time, 15)}, départ à {removeMinutes(Time, 10)} pile
        </Typography>
    </Paper>
    </React.Fragment>)
}