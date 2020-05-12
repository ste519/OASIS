import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Fab, FormGroup, FormControlLabel, FormControl, Checkbox, } from '@material-ui/core';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import CheckCircle from '@material-ui/icons/CheckCircle';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import Text from '../text.json';
import { useSelector } from 'react-redux';

const symptoms = Text["Symptoms"]

const useStyles = makeStyles((theme) => ({
    root: {
        width: '90vw',
        overflow: 'scroll',
        height: 'max-content'
    },
    group: {
        '& > *': {
            margin: 0,
            width: '30vw',
        },
        '& .MuiTypography-body1': {
            fontSize: 14,
            fontFamily: 'abel'
        }

    },
    input: {
        color: 'white',
        '&:before': {
            borderBottom: '1px solid white',
        },

    },
    label: {
        color: 'white',
        width: 'max-content',
        fontSize: 16
    },
    numbers: {
        '& > *': {
            margin: theme.spacing(1),
            width: '46%',
        },
        position: 'absolute',
        top: '77%',
        width: '100vw',
        display: 'flex',
        justifyContent: 'space-evenly',
        alignItems: 'center'
    },
}));


export default function Symptoms(props) {
    const [state, setState] = React.useState({});


    const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
    };

    const classes = useStyles();
    const isSick = useSelector(state => state.post.sick)
    const subtitle = isSick==="recovered"? "When you were sick, which of the following symptoms did you have?" : "Are you having now, or did you recently have:"
    return (
        <div className="Symptoms">
            <h1 className="title"> MY COVID STORY</h1>
            <p className="subtitle">{subtitle}</p>
            <FormControl className={classes.root} component="fieldset">
                <FormGroup className={classes.group} aria-label="position" row>
                    {symptoms.map((option) => (
                        <FormControlLabel
                            value={option}
                            control={<Checkbox style={{ color: "white" }} icon={<RadioButtonUncheckedIcon style={{ fontSize: 30 }} />} checkedIcon={<CheckCircle style={{ fontSize: 30 }} />} />}
                            label={option}
                            key={option}
                            labelPlacement="top"
                        />
                    ))}

                </FormGroup>
            </FormControl>
            {/* <div className={classes.numbers} >
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
            </div> */}

            <Fab style={{ background: "#EA2027" }} aria-label="add" onClick={() => props.history.push("/measurements")} size="medium" className="fab next-btn">
                <ArrowRightIcon />
            </Fab>
            <Fab style={{ background: "#9206FF" }} aria-label="add" onClick={() => props.history.push("/questions")} size="medium" className="fab back-btn">
                <ArrowLeftIcon />
            </Fab>
        </div>
    )
}
