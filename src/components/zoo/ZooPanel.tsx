import { useEffect } from "react";

import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import useZooQnsReducer from "../../hooks/zoo/useZooQnsReducer";

import FeatureMultipleChoiceList from "./FeatureMultipleChoiceList";
import FeatureBinaryChoiceList from "./FeatureBinaryChoiceList";


function ZooPanel(): JSX.Element {
  const [zooQnsState, zooQnsDispatch] = useZooQnsReducer();

  useEffect(() => {
    console.log(zooQnsState);
  }, [zooQnsState]);

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
          <FeatureBinaryChoiceList />
        </Container>
      </Grid>
    </Grid>
  );
}

export default ZooPanel;
