import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import FeatureMultipleChoiceList from "./multiple/FeatureMultipleChoiceList";
import FeatureBinaryChoiceList from "./binary/FeatureBinaryChoiceList";

function ZooPanelSection(): JSX.Element {
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

export default ZooPanelSection;
