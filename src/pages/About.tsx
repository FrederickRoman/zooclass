import { Grid, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LeafPaper from "../components/paper/LeafPaper";
import ExtLink from "../components/link/ExtLink";

function About(): JSX.Element {
  return (
    <Box component="main" my={5}>
      <Grid
        container
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <Typography variant="h1">About</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item sx={{ width: "80%" }}>
          <LeafPaper>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item>
                <Typography variant="h4" component="h2" textAlign="center">
                  What is its purpose?
                </Typography>
              </Grid>
            </Grid>
            <div>
              <p>This web app classifies animals based on its description.</p>
              <p>
                The questions, classes and data all come from the public &nbsp;
                <ExtLink href="https://archive.ics.uci.edu/ml/datasets/zoo">
                  UCI Zoo Data Set.
                </ExtLink>
              </p>
              <p>
                All the &nbsp;
                <ExtLink href="https://github.com/FrederickRoman/zooclass">
                  code
                </ExtLink>
                &nbsp; for this website, including the trained model neural net
                is free and public.
              </p>
            </div>
          </LeafPaper>
        </Grid>
        <Divider />
        <Grid item sx={{ width: "80%" }}>
          <LeafPaper>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item>
                <Typography variant="h4" component="h2" textAlign="center">
                  How does it work?
                </Typography>
              </Grid>
            </Grid>
            <div>
              <p>
                This web app classifies animals using a &nbsp;
                <ExtLink href="https://archive.ics.uci.edu/ml/datasets/zoo">
                  neural network
                </ExtLink>
                &nbsp; with &nbsp;
                <ExtLink href="https://brain.js.org/#/">Brain.js.</ExtLink>
              </p>
              <p>
                It was trained using the public &nbsp;
                <ExtLink href="https://archive.ics.uci.edu/ml/datasets/zoo">
                  UCI Zoo Data Set.
                </ExtLink>
              </p>
              <p>
                Then deployed to run in-browser with &nbsp;
                <ExtLink href="https://reactjs.org/">React.js.</ExtLink>
              </p>
            </div>
          </LeafPaper>
        </Grid>
      </Grid>
    </Box>
  );
}

export default About;
