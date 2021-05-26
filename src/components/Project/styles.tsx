import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme =>({
    root: {
      backgroundColor: "#323437",
      justifyContent:"center"
  },
    div: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "1rem"
    },
    media: {
      height: 200
    },
    title:{
        color:"white"
    },
    text: {
        color:"white"
    }
  }));

  export default useStyles;