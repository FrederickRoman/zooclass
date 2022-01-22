import { AppBar, Grid, Link, Toolbar, Typography } from "@mui/material";

function CopyrightMsg(): JSX.Element {
  const curYear: number = new Date().getFullYear();
  return (
    <Link
      href="https://www.frederickroman.com"
      target="_blank"
      rel="noopener"
      color="#fff"
      underline="none"
    >
      <Typography variant="h6">&#169; Frederick Roman {curYear}</Typography>
    </Link>
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
