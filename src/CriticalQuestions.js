import React, { useState } from "react";
import { TextField, MenuItem} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { Fab } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import { DatePicker } from "@material-ui/pickers";
import Pop from './Pop';

const warning = "People you spend more than 15 minutes with.";
const ethnicities = [
    { value: 'White', label: 'White' },
    { value: 'American Indian or Alaska Native', label: 'American Indian or Alaska Native' },
    { value: 'Asian', label: 'Asian' },
    { value: 'Black or African American', label: 'Black or African American' },
    { value: 'Hispanic or Latino', label: 'Hispanic or Latino' },
    { value: 'Native Hawaiian or Other Pacific Islander', label: 'Native Hawaiian or Other Pacific Islander' },
]
const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
        position: 'absolute',
        width: '90vw',
        top: '20%;',
        left: '5vw'
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

function CriticalQuestions(props) {
    const { classes } = props;
    const [sex, setSex] = useState('');
    const [ethnicity, setEthnicity] = useState('');
    const [origin, setOrigin] = useState('');
    const [selectedDate, handleDateChange] = useState(null);
    const [contactCount, setContactCount] = useState(0)
    const [locationCount, setLocationCount] = useState(0)
    const handleSexChange = (event) => {
        setSex(event.target.value);
    };
    const handleEthnicityChange = (event) => {
        setEthnicity(event.target.value);
    };
    const handleOriginChange = (event) => {
        setOrigin(event.target.value);
    };

    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [countries, setCountries] = React.useState([]);

    React.useEffect(() => {
        fetch("https://restcountries.eu/rest/v2/all?fields=name")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setCountries(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])


    const contacts = [];
    for (let i = 0; i < contactCount; i += 1) {
        contacts.push(
            <div key={i}>
                <TextField label="Email" InputProps={{ className: classes.input }}
                    InputLabelProps={{ className: classes.label }} />
                <TextField label="Phone Number" InputProps={{ className: classes.input }}
                    InputLabelProps={{ className: classes.label }} />
            </div>)
    }

    const locations = [];
    for (let i = 0; i < locationCount; i += 1) {
        locations.push(
            <div key={i}>
                <TextField label="Location" InputProps={{ className: classes.input }}
                    InputLabelProps={{ className: classes.label }} />
                <DatePicker
                    autoOk
                    label="Date"
                    clearable
                    disableFuture
                    value={selectedDate}
                    onChange={handleDateChange}
                    InputProps={{ className: classes.input }}
                    InputLabelProps={{ className: classes.label }}
                />
            </div>)
    }

    const pageBottomRef = React.useRef(null)

    const scrollToBottom = () => {
        pageBottomRef.current.scrollIntoView({ behavior: "smooth" })
    }

    React.useEffect(scrollToBottom, [locations]);
    React.useEffect(scrollToBottom, [contacts]);
    let showDatePicker;
    let nextPage;
    if (localStorage.isSick == "not sick" ){
        nextPage="/dashboard";
        if (localStorage.tested == "not tested")
            showDatePicker = "hidden";
        else {
            showDatePicker = "";
        }
    }
    else {
        showDatePicker = "";
        nextPage="/symptoms"
    }

    return (
        <div className="CriticalQuestions">
            <h1 className="title"> MY COVID STORY</h1>
            <div className={classes.root}>
                <form noValidate>
                    <div className={showDatePicker}>

                        <DatePicker
                            autoOk
                            label="When did you first start feeling sick?"
                            clearable
                            disableFuture
                            value={selectedDate}
                            onChange={handleDateChange}
                            InputProps={{ className: classes.input }}
                            InputLabelProps={{ className: classes.label }}
                        />

                    </div>
                    <div className="demographics">
                        <TextField
                            id="standard-number"
                            label="Age"
                            type="number"
                            InputProps={{ className: classes.input }}
                            InputLabelProps={{ className: classes.label }}
                        />

                        <TextField
                            id="standard-select-currency"
                            select
                            label="Sex"
                            value={sex}
                            onChange={handleSexChange}
                            InputProps={{ className: classes.input }}
                            InputLabelProps={{ className: classes.label }}
                        >
                            <MenuItem value={"male"}>Male</MenuItem>
                            <MenuItem value={"female"}>Female</MenuItem>
                            <MenuItem value={"female"}>Non Binary</MenuItem>
                        </TextField>

                        <TextField
                            select
                            label="Ethnicity"
                            value={ethnicity}
                            onChange={handleEthnicityChange}
                            InputProps={{ className: classes.input }}
                            InputLabelProps={{ className: classes.label }}
                        >
                            {ethnicities.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </TextField>
                    </div>
                    <div className="demographics">
                        <TextField
                            select
                            label="Origin"
                            value={origin}
                            onChange={handleOriginChange}
                            InputProps={{ className: classes.input }}
                            InputLabelProps={{ className: classes.label }}
                        >
                            {countries.map((option) => (
                                <MenuItem key={option.name} value={option.name}>
                                    {option.name}
                                </MenuItem>
                            ))}
                        </TextField>
                        <TextField id="standard-required" label="Profession" InputProps={{ className: classes.input }}
                            InputLabelProps={{
                                className: classes.label
                            }} />
                    </div>
                    <div className="form-row">
                        <Fab style={{ background: "#EA2027" }} aria-label="add" size="medium" className="fab" onClick={() => setContactCount(contactCount + 1)}>
                            <AddIcon />
                        </Fab>
                        <p>Close Contacts</p>
                        <Pop text={warning}></Pop>
                    </div>
                    {contacts}
                    <div className="form-row">
                        <Fab style={{ background: "#EA2027" }} aria-label="add" size="medium" className="fab" onClick={() => setLocationCount(locationCount + 1)}>
                            <AddIcon />
                        </Fab>
                        <p>Travel History</p>
                    </div>
                    {locations}
                    <div style={{ height: '100px' }} ref={pageBottomRef}></div>
                </form>
            </div>
            <Fab style={{ background: "#EA2027" }} aria-label="add" href={nextPage} size="medium" className="fab next-btn">
                <ArrowRightIcon />
            </Fab>
            <Fab style={{ background: "#9206FF" }} aria-label="add" href='/confirm' size="medium" className="fab back-btn">
                <ArrowLeftIcon />
            </Fab>
        </div>
    )
}

export default withStyles(styles)(CriticalQuestions);