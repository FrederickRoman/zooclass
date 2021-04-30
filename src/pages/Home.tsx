import { useState, useEffect } from "react";

import useZooQnsReducer from "../hooks/zoo/useZooQnsReducer";
import useZooClassifier from "../hooks/zoo/useZooClassifier";

import ZooPanelSection from "../components/zoo/input/ZooPanelSection";

import ZooResultsSection from "../components/zoo/output/ZooResultSection";
import HeroBanner from "../components/banner/HeroBanner";

import Container from "@material-ui/core/Container";
// import Grid from "@material-ui/core/Grid";

import Divider from "@material-ui/core/Divider";

import zooClassType from "../types/unions/zooClassType";

import ZooClassification from "../services/ZooClassification.js";

import zooData from "../assets/data/ts/zooData";
import zooQnsReducerPair from "../types/unions/zooQnsReducerPair";

import { ZooFormContextProvider } from "../contexts/ZooFormContext";

function Home() {
  const [zooQnsState, zooQnsDispatch]: zooQnsReducerPair = useZooQnsReducer();
  const zooClass = useZooClassifier({ zooQnsState });

  useEffect(() => {
    console.log(zooQnsState);
  }, [zooQnsState]);

  return (
    <Container disableGutters>
      <HeroBanner />
      <Divider />
      <ZooResultsSection zooClass={zooClass} />
      <Divider />
      <ZooFormContextProvider value={[zooQnsState, zooQnsDispatch]}>
        <ZooPanelSection />
      </ZooFormContextProvider>
    </Container>
  );
}

export default Home;
