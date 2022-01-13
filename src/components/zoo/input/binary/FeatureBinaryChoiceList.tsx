import Grid from "@mui/material/Grid";

import FeatureRadioButton from "./FeatureRadioButton";

import binaryChoiceQuestions from "../../../../assets/data/ts/binaryChoiceQuestions";
import IBinaryChoiceQuestion from "../../../../types/interfaces/IBinaryChoiceQuestion";

function FeatureRadioButtons(): JSX.Element {
  return (
    <>
      {binaryChoiceQuestions.map(
        (question: IBinaryChoiceQuestion, i: number): JSX.Element => (
          <FeatureRadioButton {...question} key={i} />
        )
      )}
    </>
  );
}

function FeatureBinaryChoiceList(): JSX.Element {
  return (
    <Grid container justifyContent={"center"} alignItems={"center"}>
      <Grid
        item
        container
        justifyContent={"space-around"}
        alignItems={"center"}
        wrap={"wrap"}
      >
        <FeatureRadioButtons />
      </Grid>
    </Grid>
  );
}

export default FeatureBinaryChoiceList;
