import { useEffect, useState } from "react";
import hero from "../../assets/img/hero.jpeg";

import zcLogo from "../../assets/img/zcLogo.svg";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

function HeroBanner(): JSX.Element {
  const [offset, setOffset] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ position: "relative", left: 0, top: 0 }}>
      <section style={{ height: 400, overflow: "hidden" }}>
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
          <Grid container justify={"center"} alignItems={"center"}>
            <Grid item>
              <Box px={1}>
                <Grid container justify={"center"} alignItems={"center"}>
                  <Grid item>
                    <img
                      src={zcLogo}
                      alt="zooclass logo"
                      width="40"
                      height="40"
                    />
                  </Grid>
                  <Grid item>
                    <h1 style={{ color: "white" }}>ZooClass</h1>
                  </Grid>
                </Grid>
              </Box>
            </Grid>

            <Grid item>
              <Box px={1}>
                <Grid container justify={"center"} alignItems={"center"}>
                  <Grid item>
                    <h2
                      style={{
                        color: "white",
                        textAlign: "center",
                        verticalAlign: "middle",
                      }}
                    >
                      AI-powered zoo animal classifier
                    </h2>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </div>
      </section>
    </div>
  );
}
export default HeroBanner;
