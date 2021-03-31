import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import FeatureMultipleChoiceList from "./FeatureMultipleChoiceList";
import FeatureBinaryChoiceList from "./FeatureBinaryChoiceList";

function ZooPanel(): JSX.Element {
  return (
    <Grid container justify={"center"} alignItems={"center"}>
      <Grid item>
        <FeatureMultipleChoiceList />
      </Grid>
      <Grid item>
        <Container>
          <FeatureBinaryChoiceList />
        </Container>
      </Grid>
    </Grid>
  );
}

export default ZooPanel;
