import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

function About(): JSX.Element {
  console.log("I am in about");
  return (
    <Container disableGutters>
      <Box>
        <Grid container>
          <Grid item>
            <section>About</section>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default About;
