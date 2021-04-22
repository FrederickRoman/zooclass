import { useState, useEffect } from "react";

import useZooQnsReducer from "../hooks/zoo/useZooQnsReducer";

import ZooPanelSection from "../components/zoo/input/ZooPanelSection";

import ZooResultsSection from "../components/zoo/output/ZooResultSection";
import HeroBanner from "../components/banner/HeroBanner";

import Container from "@material-ui/core/Container";
// import Grid from "@material-ui/core/Grid";

import Divider from "@material-ui/core/Divider";

import zooClassType from "../types/unions/zooClassType";

import ZooClassification from "../services/ZooClassification";

function Home() {
  // const [zooClass, setZooClass] = useState<zooClass>(1);

  const [zooQnsState, zooQnsDispatch] = useZooQnsReducer();
  const [zooClass, setZooClass] = useState<zooClassType>(1);

  useEffect(() => {
    if (zooQnsState) {
      console.log(zooQnsState);
      const classification = ZooClassification.classify(zooQnsState);
      setZooClass(classification as zooClassType);
    }
  }, [zooQnsState]);

  return (
    <Container disableGutters>
      <HeroBanner />
      <Divider />
      <ZooResultsSection zooClass={zooClass} />
      <Divider />
      <ZooPanelSection
        zooQnsState={zooQnsState}
        zooQnsDispatch={zooQnsDispatch}
      />
    </Container>
  );
}

export default Home;
