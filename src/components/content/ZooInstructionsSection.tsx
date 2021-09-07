import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      textAlign: "center",
      color: "black",
      background: "#d2b48c",
    },
  })
);

function ZooInstructionsSection(): JSX.Element {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Grid container justify={"center"} alignItems={"center"}>
        <Grid item>
          <h1>Tell about me your animal, and I'll guess it.</h1>
        </Grid>
      </Grid>
    </Box>
  );
}

export default ZooInstructionsSection;
