import {
  AppBar,
  Box,
  Button,
  Grid,
  IconButton,
  Toolbar,
  Typography,
} from "@mui/material";
import HelpIcon from "@mui/icons-material/Help";
import zcLogo from "../../assets/img/zcLogo.svg";
import { Link } from "react-router-dom";

function HomeLink(): JSX.Element {
  return (
    <Box>
      <Link to="/" aria-label="home" style={{ textDecoration: "none" }}>
        <Button>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <img src={zcLogo} alt="zooclass logo" width="40" height="40" />
            </Grid>
            <Grid item>
              <Typography variant="h6" sx={{ color: "background.default" }}>
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
      <Link to="/about" aria-label="about">
        <IconButton size="large" aria-label="about">
          <HelpIcon sx={{ color: "background.default" }} />
        </IconButton>
      </Link>
    </Box>
  );
}

function MenuBar(): JSX.Element {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justifyContent="space-between" alignItems="center">
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
