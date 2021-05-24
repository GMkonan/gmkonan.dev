import {makeStyles} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    hideButtons: {
        [theme.breakpoints.down('xs')]:{
            display:"none"
        }
      },
      hideIconMenu: {
        [theme.breakpoints.up('sm')]:{
            display: "none"
        }
      },
    button:{
        background: "inherit",
        fontSize: "0.9rem",
        height: 40,
        padding: "0 1rem",
        color: "black",
    },
    title: {
      color: "Black"
    },
    link: {
        textDecoration: 'none',
        flex: 1,
        '&:hover':{
          cursor: 'pointer',
          textDecoration: "none",
        }
    },
    appbar: {
        background: "#ffffff"
    }
}));

export default useStyles;