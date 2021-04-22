import Grid from "@material-ui/core/Grid";
// import Container from "@material-ui/core/Container";

import FeatureRadioButton from "./FeatureRadioButton";

import binaryChoiceQuestions from "../../../../assets/data/binaryChoiceQuestions";
import IBinaryChoiceQuestion from "../../../../types/interfaces/IBinaryChoiceQuestion";

import IZooFormResponse from "../../../../types/interfaces/IZooFormResponse";
import zooFormActionType from "../../../../types/unions/zooFormActionType";

interface IFBCLProps {
  zooQnsState: IZooFormResponse;
  zooQnsDispatch: React.Dispatch<zooFormActionType>;
}

function FeatureBinaryChoiceList(props: IFBCLProps): JSX.Element {
  const FeatureRadioButtons = binaryChoiceQuestions.map(
    (question: IBinaryChoiceQuestion, i: number): JSX.Element => (
      <FeatureRadioButton {...question} {...props} key={i} />
    )
  );
  return (
    <Grid container justify={"center"} alignItems={"center"}>
      <Grid
        item
        container
        justify={"space-around"}
        alignItems={"center"}
        wrap={"wrap"}

        // style={{
        //   display: "flex",
        //   flexWrap: "wrap",
        //   justifyContent: "space-around",
        //   alignItems: "center",
        // }}
      >
        {FeatureRadioButtons}
      </Grid>
    </Grid>
  );
}

export default FeatureBinaryChoiceList;
