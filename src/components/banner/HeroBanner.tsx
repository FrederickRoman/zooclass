import { useEffect, useState } from "react";

import { Theme } from "@mui/material/styles";

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import hero from "../../assets/img/hero.jpeg";

import BannerTextSection from "./BannerTextSection";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    heroBanner_viewContainer: {
      height: 400,
      overflow: "hidden"
    },
    imageBackground_bottomLayer: {
      position: "relative",
      top: 0,
      left: 0,
      width: "100vw"
    },
    textSection_topLayer: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      background: "rgba(1, 1, 1, 0.5)",
      maxWidth: 500,
      padding: 5,
    },
  })
);

function HeroBanner(): JSX.Element {
  const [offset, setOffset] = useState<number>(0);
  const classes = useStyles();

  useEffect(() => {
    const handleScroll = () => setOffset(window.pageYOffset);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const parallaxTransform = {
    transform: `translateY(${offset * -0.5}px) scaleY(2)`,
  };

  return (
    <Box position={"relative"} left={0} top={0}>
      <section className={classes.heroBanner_viewContainer}>
        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          style={{ background: "black" }}
        >
          <Grid item>
            <img
              src={hero}
              alt="zoo background"
              height="400"
              className={classes.imageBackground_bottomLayer}
              style={{ ...parallaxTransform }}
            />
          </Grid>
        </Grid>
        <div className={classes.textSection_topLayer}>
          <BannerTextSection />
        </div>
      </section>
    </Box>
  );
}
export default HeroBanner;
