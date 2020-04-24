import React from 'react'
import { TextField, Fab } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';

const styles = theme => ({
    root: {
        position: 'absolute',
        width: '80vw',
        top: '30%;',
        left: 'calc(10vw - 8px)',
        '& > *': {
            margin: theme.spacing(1),
            width: '100%',
        },
    },
    input: {
        color: 'white',
        '&:before': {
            borderBottom: '1px solid white',
        },

    },
    label: {
        color: 'white',
        width: 'max-content'
    },
});

function HealthMeasurements(props) {
    const { classes } = props;
    return (
        <div className="HealthMeasurements">
            <h1 className="title"> MY COVID STORY</h1>
              <div className={classes.root}>
                <TextField
                    id="HeartRate"
                    label="Heart Rate (BPM)"
                    type="number"
                    InputProps={{ className: classes.input }}
                    InputLabelProps={{
                        className: classes.label
                    }}
                />
        
                <TextField
                    id="standard-number"
                    label="Max Temperature (F)"
                    type="number"
                    InputProps={{ className: classes.input }}
                    InputLabelProps={{
                        className: classes.label
                    }}
                />
                <TextField
                    id="standard-number"
                    label="Pulse Oxygen (%sp02)"
                    type="number"
                    InputProps={{ className: classes.input }}
                    InputLabelProps={{
                        className: classes.label
                    }}
                />
            </div> 
            <Fab style={{ background: "#EA2027" }} aria-label="add" href="/dashboard" size="medium" className="fab next-btn">
                <ArrowRightIcon />
            </Fab>
            <Fab style={{ background: "#9206FF" }} aria-label="add" href="/symptoms" size="medium" className="fab back-btn">
                <ArrowLeftIcon />
            </Fab>
        </div>
    )
}

export default withStyles(styles)(HealthMeasurements);
