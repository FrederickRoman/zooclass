import { useEffect, useState } from "react";
import hero from "../../assets/img/hero.jpeg";

import BannerTextSection from "./BannerTextSection";

import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";

function HeroBanner(): JSX.Element {
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box position={"relative"} left={0} top={0} mt={10}>
      <section style={{ height: 400, overflow: "hidden" }}>
        <Grid container justify={"center"} alignItems={"center"}>
          <Grid item>
            <img
              src={hero}
              alt="test"
              height="800"
              style={{
                transform: `translateY(${offset * -0.5}px)`,
                position: "relative",
                top: 0,
                left: 0,
              }}
            />
          </Grid>
        </Grid>
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            background: "rgba(1, 1, 1, 0.3)",
            maxWidth: 500,
            padding: 5,
          }}
        >
          <BannerTextSection />
        </div>
      </section>
    </Box>
  );
}
export default HeroBanner;
