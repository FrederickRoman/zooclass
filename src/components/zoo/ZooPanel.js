import FeatureRadioButton from "./FeatureRadioButton.js";
import FeatureSelectInput from "./FeatureSelectInput.js";

import multipleChoiceQuestions from "./multipleChoiceQuestions.js";
import binaryChoiceQuestions from "./binaryChoiceQuestions.js";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  feature_selectInput_container: {
    display: "grid",
    justifyContent: "center",
  },
  feature_radioButtons_container: {
    display: "grid",
    justifyContent: "stretch",
  },
}));

function ZooPanel() {
  const classes = useStyles();
  const FeatureMultipleChoiceList = () => (
    <div className={classes.feature_selectInput_container}>
      {multipleChoiceQuestions.map((question, i) => (
        <FeatureSelectInput {...question} key={i} />
      ))}
    </div>
  );
  const FeatureBinaryChoiceList = () => (
    <div className={classes.feature_radioButtons_container}>
      {binaryChoiceQuestions.map((question, i) => (
        <FeatureRadioButton {...question} key={i} />
      ))}
    </div>
  );

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
