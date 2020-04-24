import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Fab from '@material-ui/core/Fab';
import ArrowLeftIcon from '@material-ui/icons/ArrowLeft';

const status = [
    { color: "rgba(255, 2, 2, 0.8)", text: "You are in high risk  area of sustained covid transmission." },
    { color: "rgba(255, 2, 2, 0.8)", text: "Your symptoms of fever, cough, aches, exhaustion and sore throat are similar to 73% of patients with known COVID and 10% of patients who don't have covid." },
    { color: "rgba(255, 2, 2, 0.8)", text: "You should consider COVID testing." },
    { color: "#B1B4B7", text: "You should Shelter in place and isolate as if you had COVID." },
    { color: "#9206FF", text: "Download the HomeBound App to help you stay well at home." },
    { color: "#08C71B", text: "Join a clinical trial?" },
    { color: "#0559FD", text: "When you are feeling better you can  donate your blood to help others." }
]

export default function Status() {

    return (
        <div className="Status">
            <h1 className="title">Your Status</h1>
            <div className="status-list">
            <List component="nav" aria-label="main mailbox folders">
                {status.map((option) => (
                    <ListItem >
                        <ListItemIcon>
                            <span className="dot" style={{ background: option.color }}></span>
                        </ListItemIcon>
                        <ListItemText primary={option.text} />
                    </ListItem>
                ))}
            </List>
            </div>
            <Fab style={{ background: "#9206FF" }} aria-label="add" href="/dashboard" size="medium" className="fab back-btn">
                <ArrowLeftIcon />
            </Fab>
        </div>
    );
}