import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

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
