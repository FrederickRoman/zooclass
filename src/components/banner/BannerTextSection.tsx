import zcLogo from "../../assets/img/zcLogo.svg";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";

function BannerTextSection(): JSX.Element {
  return (
    <Grid container justify={"center"} alignItems={"center"}>
      <Grid item>
        <Box px={1}>
          <Grid container justify={"center"} alignItems={"center"}>
            <Grid item>
              <img src={zcLogo} alt="zooclass logo" width="40" height="40" />
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
  );
}

export default BannerTextSection;