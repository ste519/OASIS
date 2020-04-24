import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import Button from '@material-ui/core/Button';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import AddIcon from '@material-ui/icons/Add';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    root: {
        height: 200,
        transform: 'translateZ(0px)',
        flexGrow: 1,
    },
    speedDial: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    speedDialAction: {
        position: 'relative',
        width: 400,
    }
}));

const actions = [
    { icon: <AddIcon />, name: 'I HAVE COVID', class: "i-have-covid" },
    { icon: <AddIcon />, name: 'DO I HAVE COVID?', class: "do-i-have-covid" },
    { icon: <AddIcon />, name: 'CHECK MY RISK', class: "check-my-risk" }
];

export default function OpenIconSpeedDial() {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [hidden] = React.useState(false);

    // const handleVisibility = () => {
    //     setHidden((prevHidden) => !prevHidden);
    // };

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <div className={classes.root}>
            <SpeedDial
                ariaLabel="SpeedDial openIcon example"
                className={classes.speedDial}
                hidden={hidden}
                icon={<SpeedDialIcon openIcon={<CloseIcon />} />}
                onClose={handleClose}
                onOpen={handleOpen}
                open={open}
            >
                {actions.map((action) => (
                    
                    <SpeedDialAction
                        className={"febmenu"}
                        key={action.name}
                        icon={action.icon}
                        tooltipTitle={action.name}
                        // tooltipOpen
                        onClick={handleClose}
                    ><span>{action.name}</span>
                    </SpeedDialAction>
                ))}
            </SpeedDial>
        </div>
    );
}