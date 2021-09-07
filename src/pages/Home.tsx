import { useEffect } from "react";

import useZooQnsReducer from "../hooks/zoo/useZooQnsReducer";
import useZooClassifier from "../hooks/zoo/useZooClassifier";

import HeroBanner from "../components/banner/HeroBanner";
import ZooInstructionsSection from "../components/content/ZooInstructionsSection";
import ZooResultsSection from "../components/zoo/output/ZooResultSection";
import ZooPanelSection from "../components/zoo/input/ZooPanelSection";

import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";

import zooQnsReducerPair from "../types/unions/zooQnsReducerPair";
import { ZooFormContextProvider } from "../contexts/ZooFormContext";

function Home(): JSX.Element {
  const [zooQnsState, zooQnsDispatch]: zooQnsReducerPair = useZooQnsReducer();
  const { classOutput, encodedOutput } = useZooClassifier(zooQnsState);

  useEffect(() => {
    console.log(encodedOutput);
  }, [encodedOutput]);

  return (
    <Container disableGutters>
      <HeroBanner />
      <Divider />
      <ZooInstructionsSection />
      <Divider />
      <ZooResultsSection classOutput={classOutput} probClass={encodedOutput} />
      <Divider />
      <ZooFormContextProvider value={[zooQnsState, zooQnsDispatch]}>
        <ZooPanelSection />
      </ZooFormContextProvider>
    </Container>
  );
}

export default Home;
