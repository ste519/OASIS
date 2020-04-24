import React from 'react'
import { Fab } from '@material-ui/core';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
export default function Alert(props) {
    return (
        <div className="Alert">
            <h2 className="title">ARE YOU CURRENTLY GASPING FOR AIR OR HAVE SEVERE CHEST PAIN OR WEAKNESS?</h2>
            <div className="btn-group">
                <div className="yes-btn">
                    <Fab style={{ background: "#EA2027" }} aria-label="add" href="/emergency" size="large" className="fab">
                        <span>YES</span>
                    </Fab>
                </div>
                <div className="no-btn">
                    <Fab style={{ background: "#0559FD" }} aria-label="add" href="/confirm" size="large" className="fab">
                        <span>NO</span>
                    </Fab>
                </div>
                <Fab style={{ background: "#9206FF" }} aria-label="add" href="/onboard" size="medium" className="fab back-btn">
                <ArrowLeftIcon />
            </Fab>
            </div>
        </div>
    )
}
