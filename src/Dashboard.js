import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import Fab from '@material-ui/core/Fab';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Link from '@material-ui/core/Link';
import Breadcrumbs from '@material-ui/core/Breadcrumbs'
import EditIcon from '@material-ui/icons/Edit';

const useStyles = makeStyles((theme) => ({
    speedDial: {
        // position: 'absolute',
        // bottom: theme.spacing(2),
        // right: theme.spacing(2),
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

const actions = [
    { icon: "I FELL BETTER", name: 'I FELL BETTER', href: '/donations' },
    { icon: <SpeedDialIcon />, name: 'I AM RECOVERED', href: '/trails' },
    { icon: <SpeedDialIcon />, name: 'I feel worse', href: '/status' },
];

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
if (isSick == "not sick" && tested == "positive") {
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
    if (localStorage.isSick == "not sick" && localStorage.tested == "positive") {
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

                    {/* <div>
                        <SpeedDial
                            ariaLabel="SpeedDial tooltip example"
                            className={classes.speedDial}
                            hidden={hidden}
                            icon={<SpeedDialIcon />}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            direction="down"
                            open={open}
                            FabProps={{ className: classes.button }}
                        >
                            {actions.map((action) => (
                                <SpeedDialAction
                                    key={action.name}
                                    icon={action.name}
                                    display={{ background: action.color }}
                                    tooltipTitle={action.name}
                                    className={"MuiFab-extended"}
                                    // tooltipOpen

                                    onClick={() => props.history.push(action.href)}
                                ></SpeedDialAction>
                            ))}
                        </SpeedDial>

                    </div> */}
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
                <Link href="#" onClick={preventDefault} style={{ color: '#FFFFFF' }}>Stay at home</Link>
                <Link href="#" onClick={preventDefault} style={{ color: '#2D9CDB' }}>Download HomeBound</Link>
                <Link href="#" onClick={preventDefault} style={{ color: '#F2C94C' }}>Join a clinical trial</Link>
                {donate_link}
            </div>

            {/* <Fab style={{ background: "#9206FF" }} aria-label="add" href="/symptoms" size="medium" className="back-btn">
                <ArrowLeftIcon />
            </Fab> */}
        </div>
    );
}
