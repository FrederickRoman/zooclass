import Grid from "@material-ui/core/Grid";

import IMultipleChoiceQuestion from "../../../../types/interfaces/IMultipleChoiceQuestion";
import multipleChoiceQuestions from "../../../../assets/data/ts/multipleChoiceQuestions";

import FeatureSelectInput from "./FeatureSelectInput";

function FeatureSelectInputList(): JSX.Element {
  return (
    <>
      {multipleChoiceQuestions.map(
        (question: IMultipleChoiceQuestion, i: number): JSX.Element => (
          <FeatureSelectInput {...question} key={i} />
        )
      )}
    </>
  );
}

function FeatureMultipleChoiceList(): JSX.Element {
  return (
    <Grid container justify={"center"} alignItems={"center"}>
      <Grid item>
        <FeatureSelectInputList />
      </Grid>
    </Grid>
  );
}

export default FeatureMultipleChoiceList;
