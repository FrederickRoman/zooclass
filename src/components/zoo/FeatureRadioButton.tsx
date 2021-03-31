import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    form_container: {
      display: "inline-block",
    },
    radio_group: {
      // display: "grid",
      // gridTemplateColumns: "repeat(2, auto)",
    },
    text: {
      heigh: "auto",
      width: 100,
    },
  })
);

interface IFeatureRadioButtonProps {
  start: string;
  keyword: string;
  end: string;
}

function FeatureRadioButton(props: IFeatureRadioButtonProps) {
  const { start, keyword, end } = props;
  const INIT_VALUE = "yes";
  const choices = ["yes", "no"];
  const [value, setValue] = useState<string>(INIT_VALUE);

  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const FormQuestion = (): JSX.Element => (
    <div className={classes.text}>
      {start}
      <b>{keyword}</b>
      {end}
    </div>
  );

  const FormQuestionSection = (): JSX.Element => (
    <Grid item container justify={"center"} alignItems={"center"} xs={5}>
      <Grid item>
        <FormLabel component="legend">
          <FormQuestion />
        </FormLabel>
      </Grid>
    </Grid>
  );

  const FormChoices = (): JSX.Element => {
    const FormLabels = choices.map(
      (ans: string, i: number): JSX.Element => (
        <Grid item xs={5} key={i}>
          <FormControlLabel
            value={ans}
            control={<Radio />}
            label={ans}
            labelPlacement="end"
          />
        </Grid>
      )
    );
    return (
      <Grid
        container
        justify={"space-between"}
        alignItems={"center"}
        wrap={"wrap"}
      >
        {FormLabels}
      </Grid>
    );
  };

  const FormChoicesSection = (): JSX.Element => (
    <Grid item xs={6}>
      <RadioGroup
        aria-label={keyword}
        name={keyword}
        value={value}
        onChange={handleChange}
      >
        <FormChoices />
      </RadioGroup>
    </Grid>
  );

  return (
    <Box m={1}>
      <Paper elevation={3} className={classes.form_container}>
        <Box p={2}>
          <FormControl component="fieldset" className={classes.radio_group}>
            <Grid container justify={"space-between"} alignItems={"center"}>
              <FormQuestionSection />
              <FormChoicesSection />
            </Grid>
          </FormControl>
        </Box>
      </Paper>
    </Box>
  );
}

export default FeatureRadioButton;
