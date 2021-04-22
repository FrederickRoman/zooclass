import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import FeatureMultipleChoiceList from "./multiple/FeatureMultipleChoiceList";
import FeatureBinaryChoiceList from "./binary/FeatureBinaryChoiceList";

import zooFormActionType from "../../../types/unions/zooFormActionType";
import IZooFormResponse from "../../../types/interfaces/IZooFormResponse";

interface IZooPanelSectionProps {
  zooQnsState: IZooFormResponse;
  zooQnsDispatch: React.Dispatch<zooFormActionType>;
}

function ZooPanelSection(props: IZooPanelSectionProps): JSX.Element {
  const { zooQnsState, zooQnsDispatch } = props;

  return (
    <Grid container justify={"center"} alignItems={"center"}>
      <Grid item>
        <FeatureMultipleChoiceList
          zooQnsState={zooQnsState}
          zooQnsDispatch={zooQnsDispatch}
        />
      </Grid>
      <Grid item>
        <Container>
          <FeatureBinaryChoiceList
            zooQnsState={zooQnsState}
            zooQnsDispatch={zooQnsDispatch}
          />
        </Container>
      </Grid>
    </Grid>
  );
}

export default ZooPanelSection;
