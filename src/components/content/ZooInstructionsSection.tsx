import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      textAlign: "center",
      color: "black",
      margin: "clamp(5px, 10px, 20px)",
    },
    typography_instructions: {
      fontWeight: "bold",
      textShadow: "2px 2px #1b5e20"
    },
  })
);

function ZooInstructionsSection(): JSX.Element {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Grid container justify={"center"} alignItems={"center"}>
        <Grid item>
          <Typography
            variant={"h1"}
            className={classes.typography_instructions}
          >
            Tell me about your animal, and I'll guess it.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ZooInstructionsSection;
