import Grid from "@material-ui/core/Grid";

import IZooFormResponse from "../../../../types/interfaces/IZooFormResponse";
import zooFormActionType from "../../../../types/unions/zooFormActionType";

import IMultipleChoiceQuestion from "../../../../types/interfaces/IMultipleChoiceQuestion";
import multipleChoiceQuestions from "../../../../assets/data/ts/multipleChoiceQuestions";

import FeatureSelectInput from "./FeatureSelectInput";

interface IFMCLProps {
  zooQnsState: IZooFormResponse;
  zooQnsDispatch: React.Dispatch<zooFormActionType>;
}

function FeatureMultipleChoiceList(props: IFMCLProps): JSX.Element {
  const { zooQnsState, zooQnsDispatch } = props;
  const FeatureSelectInputs = multipleChoiceQuestions.map(
    (question: IMultipleChoiceQuestion, i: number): JSX.Element => (
      <FeatureSelectInput
        {...question}
        zooQnsState={zooQnsState}
        zooQnsDispatch={zooQnsDispatch}
        key={i}
      />
    )
  );

  return (
    <Grid container justify={"center"} alignItems={"center"}>
      <Grid item>{FeatureSelectInputs} </Grid>
    </Grid>
  );
}

export default FeatureMultipleChoiceList;
