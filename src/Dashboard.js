import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import EditIcon from '@material-ui/icons/Edit';
import Text from './text.json';

const useStyles = makeStyles((theme) => ({
    speedDial: {
        '& .MuiFab-label': {
            width: 'max-content'
        }
    },
    button: {
        '&:hover': {
            background: "#EA2027", color: "white"
        },
        background: "#EA2027", color: "white"
    },
    label: {
        width: 'max-content'
    },
    editicon: {
        fontSize: "large",
        marginLeft: '10px',
    }
}));

// const actions = [
//     { icon: "I FELL BETTER", name: 'I FELL BETTER', href: '/donations' },
//     { icon: <SpeedDialIcon />, name: 'I AM RECOVERED', href: '/trails' },
//     { icon: <SpeedDialIcon />, name: 'I feel worse', href: '/status' },
// ];

const status =
{
    positive: { name: 'Tested Positive', color: 'red' },
    sick: { name: 'Sick', color: 'orange' },
    negative: { name: 'Tested Negative', color: 'purple' },
    recovered: { name: 'Recovered', color: 'green' },
    "not sick": { name: 'Not Sick', color: 'gray' },
    "not tested": { name: 'Not Tested', color: 'blue' }
}

let isSick = localStorage.isSick;
let tested = localStorage.tested;
if (isSick === "not sick" && tested === "positive") {
    isSick = "recovered"
}
export default function Dashboard(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [hidden, setHidden] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [data, setData] = React.useState({ confirmed: null, deaths: null, recovered: null });

    React.useEffect(() => {
        fetch("https://covid19api.herokuapp.com/latest")
            .then(res => res.json())
            .then(
                (result) => {
                    setIsLoaded(true);
                    setData(result);
                },
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, [])

    let donate_link = null;
    let trial_link = null;
    if (localStorage.isSick === "not sick" && localStorage.tested === "positive") {
        donate_link = <Link href="#" style={{ color: '#EB5757' }}>Donate your blood to help others</Link>
    }
    else {
        donate_link = null;
    }

    const preventDefault = (event) => event.preventDefault();

    return (
        <div className="Dashboard">
            <Breadcrumbs aria-label="breadcrumb" className="breadcrumbs">
                <Link color="inherit">myTrials</Link>
                <Link color="inherit">myDonations</Link>
                <Link color="inherit" href="/questions">myRecords</Link>
            </Breadcrumbs>
            <div className="row status-wrapper">
                <div className="col">
                    <div className="row">
                        <h3>MY STATUS</h3>
                        <Link className="row status-item" style={{ color: 'white' }}  href="/onboard">
                            <EditIcon className={classes.editicon}/>
                        </Link>
                    </div>

                    <div className="status-list">
                        <div className="row status-item">
                            <span className="dot" style={{ background: status[isSick].color }}></span>
                            {status[isSick].name}
                        </div>
                        <div className="row status-item">
                            <span className="dot" style={{ background: status[tested].color }}></span>
                            {status[tested].name}
                        </div>
                        <div >

                        </div>
                    </div>
                </div>
                <div className="col update-list" style={{ textAlign: 'right' }}>
                    <h3>LATEST UPDATE</h3>
                    <div>
                        <div>COVID-19 Cases: {data.confirmed}</div>
                        <div>Total Deaths: {data.deaths}</div>
                        <div>Total Recovered: {data.recovered}</div>
                    </div>
                </div>

            </div>

            <div className="col suggestions-wrapper">
                <h3>SUGGESTIONS</h3>
                <div style={{color: "gray"}}>Stay at home</div>
                <Link href="https://earth2-covid.ucsd.edu/homebound" style={{ color: '#2D9CDB' }}>Download HomeBound</Link>
                <Link href="#" onClick={preventDefault} style={{ color: '#F2C94C' }}>Join a clinical trial</Link>
                {donate_link}
                <Link onClick={preventDefault} style={{ color: '#FFFFFF' }}>Learn more about COVID-19</Link>
            </div>
        </div>
    );
}
