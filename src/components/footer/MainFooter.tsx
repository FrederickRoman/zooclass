import AppBar from "@material-ui/core/AppBar";
import Grid from "@material-ui/core/Grid";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import ExtLink from "../link/ExtLink";

function CopyrightMsg(): JSX.Element {
  const curYear: number = new Date().getFullYear();
  const copyrightholderSite = "https://www.frederickroman.com";
  return (
    <ExtLink href={copyrightholderSite}>
      <Typography variant="h6">&#169; Frederick Roman {curYear}</Typography>
    </ExtLink>
  );
}

function MainFooter(): JSX.Element {
  return (
    <AppBar position="static">
      <Toolbar>
        <Grid container justify={"center"} alignItems={"center"}>
          <Grid item>
            <CopyrightMsg />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default MainFooter;
