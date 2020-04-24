import React from 'react'
import { Fab } from '@material-ui/core';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft'
export default function Confirm() {
    function handleClick(e) {
        localStorage.setItem('tested', e);
    }

    return (
        <div className="Confirm">
            <h1 className="title">HAVE YOUR BEEN TESTED FOR COVID-19?</h1>
            <div className="btn-group">
                <div className="yes-btn">
                    <Fab style={{ background: "#EA2027" }} href="/questions" size="large" className="fab" variant="extended" onClick={()=>handleClick('positive')}>
                        <span>YES, TESTED POSITIVE</span>
                    </Fab>
                </div>
                <div className="yes-btn">
                    <Fab style={{ background: "#9206FF" }} href="/questions" size="large" className="fab" variant="extended" onClick={()=>handleClick('negative')}>
                        <span>YES, TESTED NEGATIVE</span>
                    </Fab>
                </div>
                <div className="no-btn">
                    <Fab style={{ background: "#0559FD" }} href="/questions" size="large" className="fab" variant="extended" onClick={()=>handleClick('not tested')}>
                        <span>NO, I HAVE NOT</span>
                    </Fab>
                </div>

            </div>
            <Fab style={{ background: "#9206FF" }} href="/alert" size="medium" className="fab back-btn" >
                <ArrowLeftIcon />
            </Fab>
        </div>
    )
}