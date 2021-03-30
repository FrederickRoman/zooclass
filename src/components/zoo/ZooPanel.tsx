import FeatureRadioButton from "./FeatureRadioButton";
import FeatureSelectInput from "./FeatureSelectInput";

import multipleChoiceQuestions from "../assets/data/multipleChoiceQuestions";
import binaryChoiceQuestions from "../assets/data/binaryChoiceQuestions";

import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    feature_selectInput_container: {
      display: "grid",
      justifyContent: "center",
    },
    feature_radioButtons_container: {
      display: "grid",
      justifyContent: "stretch",
    },
  })
);

function ZooPanel() {
  const classes = useStyles();

  const FeatureMultipleChoiceList = (): JSX.Element => {
    const FeatureSelectInputs = multipleChoiceQuestions.map((question, i) => (
      <FeatureSelectInput {...question} key={i} />
    ));
    return (
      <div className={classes.feature_selectInput_container}>
        {FeatureSelectInputs}
      </div>
    );
  };

  const FeatureBinaryChoiceList = (): JSX.Element => {
    const FeatureRadioButtons = binaryChoiceQuestions.map((question, i) => (
      <FeatureRadioButton {...question} key={i} />
    ));
    return (
      <div className={classes.feature_radioButtons_container}>
        {FeatureRadioButtons}
      </div>
    );
  };

  return (
    <div>
      <FeatureMultipleChoiceList />
      <div>
        <FeatureBinaryChoiceList />
      </div>
    </div>
  );
}

export default ZooPanel;
