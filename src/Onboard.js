import React from 'react'
import {Fab} from '@material-ui/core'
export default function Onboard() {
    function handleClick(e) {
        localStorage.setItem('isSick', e);
    }
    return (
        <div className="Onboard">
            <h1 className="title">MY COVID STORY</h1>
            <div className="btn-group">
            <Fab style={{background: "#EA2027"}} href="/alert" variant="extended" className="fab sick-btn" onClick={()=>handleClick('sick')}>
            <span>I AM SICK</span>
            </Fab>
            <Fab style={{background: "#0559FD"}} href="/confirm" variant="extended" className="fab not-sick-btn" onClick={()=>handleClick('not sick')}>
            <span>I AM NOT SICK</span>
            </Fab>
            </div>
        </div>
    )
}
