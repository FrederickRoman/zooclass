import Grid from "@material-ui/core/Grid";

import IMultipleChoiceQuestion from "../../types/interfaces/IMultipleChoiceQuestion";
import multipleChoiceQuestions from "../assets/data/multipleChoiceQuestions";

import FeatureSelectInput from "./FeatureSelectInput";

function FeatureMultipleChoiceList(): JSX.Element {
  const FeatureSelectInputs = multipleChoiceQuestions.map(
    (question: IMultipleChoiceQuestion, i: number): JSX.Element => (
      <FeatureSelectInput {...question} key={i} />
    )
  );
  return (
    <Grid container justify={"center"} alignItems={"center"}>
      <Grid item>{FeatureSelectInputs} </Grid>
    </Grid>
  );
}

export default FeatureMultipleChoiceList;
