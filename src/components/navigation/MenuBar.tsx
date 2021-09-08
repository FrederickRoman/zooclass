import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import HelpIcon from "@material-ui/icons/Help";
import { createStyles, makeStyles } from "@material-ui/core/styles";

import zcLogo from "../../assets/img/zcLogo.svg";

const useStyles = makeStyles(() =>
  createStyles({
    link: {
      color: "white",
      textDecoration: "none",
    },
    title: {
      color: "white",
    },
  })
);

function HomeLink(): JSX.Element {
  const classes = useStyles();
  return (
    <Box>
      <Link to="/" className={classes.link} aria-label="home">
        <Button>
          <Grid container justify={"center"} alignItems={"center"}>
            <Grid item>
              <img src={zcLogo} alt="zooclass logo" width="40" height="40" />
            </Grid>
            <Grid item>
              <Typography variant="h6" className={classes.title}>
                ZooClass
              </Typography>
            </Grid>
          </Grid>
        </Button>
      </Link>
    </Box>
  );
}

function AboutLink(): JSX.Element {
  return (
    <Box>
      <Link to="/about">
        <IconButton size="medium" aria-label="about">
          <HelpIcon color="secondary" />
        </IconButton>
      </Link>
    </Box>
  );
}

function MenuBar(): JSX.Element {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justify={"space-between"} alignItems={"center"}>
          <Grid item>
            <HomeLink />
          </Grid>
          <Grid item>
            <AboutLink />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default MenuBar;
