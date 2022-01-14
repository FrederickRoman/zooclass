import { makeStyles } from "@mui/styles";
import { Grid, Box, Typography } from "@mui/material";

const useStyles = makeStyles({
  container: {
    textAlign: "center",
    color: "black",
    margin: "clamp(5px, 10px, 20px)",
  },
  typography_instructions: {
    fontWeight: "bold",
    textShadow: "2px 2px #1b5e20",
  },
});

function ZooInstructionsSection(): JSX.Element {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Grid container justifyContent="center" alignItems="center">
        <Grid item>
          <Typography variant="h1" className={classes.typography_instructions}>
            Tell me about your animal, and I'll guess it.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ZooInstructionsSection;
