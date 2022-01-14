import { Grid, Box, Typography } from "@mui/material";
import zcLogo from "../../assets/img/zcLogo.svg";

function BannerTextSection(): JSX.Element {
  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item>
        <Box px={1}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <img src={zcLogo} alt="zooclass logo" width="60" height="60" />
            </Grid>
            <Grid item>
              <Typography
                variant="h3"
                component="h1"
                sx={{ color: "background.default" }}
              >
                ZooClass
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <Grid item>
        <Box px={1}>
          <Grid container justifyContent="center" alignItems="center">
            <Grid item>
              <Typography
                variant="h4"
                component="h2"
                sx={{
                  color: "background.default",
                  textAlign: "center",
                  verticalAlign: "middle",
                }}
              >
                AI-powered zoo animal classifier
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
}

export default BannerTextSection;
