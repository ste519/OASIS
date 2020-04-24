import React from 'react';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';
import FabMenu from './FabMenu';
export default function Onboard(props) {

    return (
        <div className="Onboard">
            {/* <FabMenu></FabMenu> */}
            <p className="title"> MY COVID STORY</p>
            <div className="container">
                <p className="title"> MY COVID STORY</p>
                <div className="btn-group">
                    <div className="i-have-covid-btn btn-n-caption">
                        <Fab style={{ background: "#EA2027" }} aria-label="add" href="/alert" size="large" className="fab">
                            <AddIcon />
                        </Fab>
                        <span className="caption">I HAVE COVID</span>
                    </div>
                    <div className="do-i-have-covid-btn btn-n-caption">
                        <Fab style={{ background: "#0559FD" }} aria-label="add" href="/alert" size="large" className="fab">
                            <AddIcon />
                        </Fab>
                        <span className="caption">DO I HAVE COVID?</span>
                    </div>
                    <div className="check-my-risk-btn btn-n-caption">
                        <Fab style={{ background: "#FFC700" }} aria-label="add" href="/alert" size="large" className="fab">
                            <AddIcon />
                        </Fab>
                        <span className="caption">CHECK MY RISK</span>
                    </div>
                    <div className="cancel-btn">
                        <Fab style={{ background: "#EA2027" }} aria-label="add" size="large" className="fab">
                            <CloseIcon />
                        </Fab>
                    </div>
                </div>
            </div>
        </div>
    )
}
