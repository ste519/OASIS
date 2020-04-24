import React from 'react'
import { Fab } from '@material-ui/core';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

export default function Emergency() {
    return (
        <div className="Emergency">
            <h1 className="title">YOU ARE REALLY SICK AND NEED IMMEDIATE MEDICAL ATTENTION! CALL YOU DOCTOR, GET TO A HOSPITAL, OR CALL 911!</h1>
            <Fab style={{ background: "#9206FF" }} aria-label="add" href="/" size="medium" className="back-btn">
                <ArrowLeftIcon />
            </Fab>
        </div>
    )
}
