import React, { useState } from "react";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import FormLabel from "@material-ui/core/FormLabel";

import Paper from "@material-ui/core/Paper";

import { createStyles, makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() =>
  createStyles({
    form_container: {
      padding: "1em",
      display: "inline-block",
    },
    radio_group: {
      display: "grid",
      gridTemplateColumns: "repeat(2, auto)",
    },
    flex_center: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      margin: "0px 10px",
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
  const [value, setValue] = useState<string>(INIT_VALUE);

  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  return (
    <Paper elevation={3} className={classes.form_container}>
      <FormControl component="fieldset" className={classes.radio_group}>
        <div className={classes.flex_center}>
          <FormLabel component="legend">
            <div className={classes.text}>
              {start}
              <b>{keyword}</b>
              {end}
            </div>
          </FormLabel>
        </div>
        <RadioGroup
          aria-label={keyword}
          name={keyword}
          value={value}
          onChange={handleChange}
          className={classes.radio_group}
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
    </Paper>
  );
}

export default FeatureRadioButton;
