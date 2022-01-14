import { Grid, Container } from "@mui/material";
import FeatureMultipleChoiceList from "./multiple/FeatureMultipleChoiceList";
import FeatureBinaryChoiceList from "./binary/FeatureBinaryChoiceList";

function ZooPanelSection(): JSX.Element {
  return (
    <Grid container justifyContent="center" alignItems="center">
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
