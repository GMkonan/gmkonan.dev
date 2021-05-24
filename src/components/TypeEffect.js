import { Typography, makeStyles } from '@material-ui/core';
import { useState, useEffect } from 'react';


const CONSTANTS = {
    DELETING_SPEED: 40,
    TYPING_SPEED: 150
}

const TypeEffect = ({ messages, heading }) => {
    //styles
    const useStyles = makeStyles((theme) => ({
        text: {
            bottom: "2.5rem",
            position: "relative",
            fontSize: "1.5rem",
            color:"white",
            fontFamily: 'monospace'
        },
    }));
    const classes = useStyles();
    
    const [state, setState] = useState({
        text: "",
        message: "",
        isDeleting: false,
        loopNum: 0,
        typingSpeed: CONSTANTS.TYPING_SPEED
    });

    useEffect(() => {
        let timer = "";
        const handleType = () => {
            setState(cs => ({
                ...cs,
                text: getCurrentText(cs),
                typingSpeed: getTypingSpeed(cs) 
            }));
            timer = setTimeout(handleType, state.typingSpeed);
        };
        handleType();
        return () => clearTimeout(timer);
    }, [state.isDeleting]);

    useEffect(() => {
        if (!state.isDeleting && state.text == state.message) {
            setTimeout(() => {
                setState(cs => ({
                    ...cs, //inherits the others as they are but change deleting
                    isDeleting: true
                }))
            }, 500);
        }
        else if(state.isDeleting && state.text === "") {
            setState(cs => ({
                ...cs,
                isDeleting: false,
                loopNum: cs.loopNum + 1,
                message: getMessage(cs, messages)
            }));
        }
    }, [state.text, state.message, state.isDeleting, messages]);

    const getCurrentText = (currentState) => {
        return currentState.isDeleting
        ? currentState.message.substring(0, currentState.text.length - 1)
        : currentState.message.substring(0, currentState.text.length + 1);
    }

    const getMessage = (currentState, data) => {
        return data[Number(currentState.loopNum) % Number(data.length)];
    }

    const getTypingSpeed = (currentState) => {
        return currentState.isDeleting
        ? CONSTANTS.TYPING_SPEED
        : CONSTANTS.DELETING_SPEED;
    }

    return(
        <Typography variant="h6" align="center" className={classes.text}>{state.text}</Typography>
    )
}

export default TypeEffect;