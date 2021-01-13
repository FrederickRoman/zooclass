// import React from "react";
// import Radio from "@material-ui/core/Radio";
// import RadioGroup from "@material-ui/core/RadioGroup";
// import FormControlLabel from "@material-ui/core/FormControlLabel";
// import FormControl from "@material-ui/core/FormControl";
// import FormLabel from "@material-ui/core/FormLabel";

import FeatureRadioButton from "./FeatureRadioButton.js";
import FeatureSelectInput from "./FeatureSelectInput.js";
// import { makeStyles } from "@material-ui/core/styles";
// import Paper from "@material-ui/core/Paper";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     "& > *": {
//       margin: theme.spacing(1),
//       width: theme.spacing(16),
//       height: theme.spacing(16),
//     },
//   },
//   form_container: {
//     padding: "1em",
//   },
// }));

function ZooPanel() {
  //   const [value, setValue] = React.useState("yes");

  // const classes = useStyles();

  //   const handleChange = (event) => {
  //     setValue(event.target.value);
  //   };

  const yesNoQuestions = [
    { question: "Does it have hair?" },
    { question: "Does it have feathers?" },
    { question: "Does it lay eggs?" },
    { question: "Does it make milk?" },
    { question: "Can it get airborne?" },
    { question: "Is it aquatic?" },
    { question: "Is it a predator?" },
    { question: "Is it thooted?" },
    { question: "Does it have a backbone?" },
    { question: "Does it breath?" },
    { question: "Is it venomous?" },
    { question: "Does it have fins?" },
    { question: "Does it have a tail?" },
    { question: "Does it have hair?" },
    { question: "Is it domestic?" },
    { question: "Is it catsize?" },
  ];

  return (
    // <div /* className={classes.root} */>
    <div>
      <div style={{ display: "grid", justifyContent: "center" }}>
        <FeatureSelectInput />
      </div>
      <div>
        <div style={{ display: "grid", justifyContent: "stretch" }}>
          {yesNoQuestions.map((q, i) => (
            <FeatureRadioButton question={q.question} key={i} />
          ))}
        </div>
      </div>
    </div>

    /* <Paper elevation={3} className={classes.form_container}>
                              <FormControl component="fieldset">
                                <FormLabel component="legend">
                                  Does it have <b>hair</b> ?
                                </FormLabel>
                                <RadioGroup
                                  row
                                  aria-label="gender"
                                  name="gender1"
                                  value={value}
                                  onChange={handleChange}
                                >
                                  <FormControlLabel
                                    value="yes"
                                    control={<Radio />}
                                    label="yes"
                                    labelPlacement="end"
                                  />
                                  <FormControlLabel
                                    value="no"
                                    control={<Radio />}
                                    label="no"
                                    labelPlacement="end"
                                  />
                                </RadioGroup>
                              </FormControl>
                              <div>{value}</div>
                            </Paper> */
    // </div>
  );
}

export default ZooPanel;
