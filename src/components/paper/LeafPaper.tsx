import { Paper } from "@mui/material";
import { Box } from "@mui/system";

interface Props {
  children: React.ReactNode;
}

function LeafPaper(props: Props) {
  return (
    <Box mx={1} my={5}>
      <Paper elevation={5}>
        <Box
          component="section"
          p={1}
          sx={{ color: "white", bgcolor: "primary.light" }}
        >
          {props.children}
        </Box>
      </Paper>
    </Box>
  );
}

export default LeafPaper;
