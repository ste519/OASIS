import React from 'react'
import { Fab } from '@material-ui/core'
import { Component } from 'react'

export default class Onboard extends Component {
    constructor(props) {
        super(props);
        
    }
        render(){
            function handleClick(selected) {
                localStorage.setItem('isSick', selected);
            }
            return (
                <div className="Onboard">
                    <div className="dark mask"></div>
                    <h1 className="title">MY COVID STORY</h1>
                    <div className="btn-group">
                        <Fab style={{ background: "#EA2027" }} variant="extended" className="fab sick-btn" onClick={() => {handleClick('sick'); this.props.history.push('/alert')}}>
                            <span>I AM SICK</span>
                        </Fab>
                        <Fab style={{ background: "#9206FF" }} variant="extended" className="fab not-sick-btn" onClick={() => {handleClick('not sick');this.props.history.push('/confirm')}}>
                            <span>I AM NOT SICK</span>
                        </Fab>
                        <Fab style={{ background: "#0559FD" }} variant="extended" className="fab not-sick-btn" onClick={() => {handleClick('recovered');this.props.history.push('/confirm')}}>
                            <span>I AM RECOVERED</span>
                        </Fab>
                    </div>
                </div>
            )
        }
    }
