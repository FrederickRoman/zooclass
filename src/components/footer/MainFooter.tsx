import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
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
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <CopyrightMsg />
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  );
}

export default MainFooter;
