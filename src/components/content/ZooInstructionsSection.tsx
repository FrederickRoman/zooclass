import { Theme } from "@mui/material/styles";

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
      <Grid container justifyContent={"center"} alignItems={"center"}>
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
