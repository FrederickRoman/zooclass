import ZooPanel from "../components/zoo/ZooPanel";

import HeroBanner from "../components/banner/HeroBanner";

import Container from "@material-ui/core/Container";
// import Grid from "@material-ui/core/Grid";

function Home() {
  return (
    <Container>
      <HeroBanner />
      <ZooPanel />
    </Container>
  );
}

export default Home;
