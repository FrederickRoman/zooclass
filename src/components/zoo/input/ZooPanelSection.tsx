import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";

import FeatureMultipleChoiceList from "./multiple/FeatureMultipleChoiceList";
import FeatureBinaryChoiceList from "./binary/FeatureBinaryChoiceList";

function ZooPanelSection(): JSX.Element {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
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
