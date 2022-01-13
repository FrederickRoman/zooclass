import React, { useContext, useEffect, useState } from "react";

import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import createStyles from '@mui/styles/createStyles';
import makeStyles from '@mui/styles/makeStyles';

import zooBinaryFeatureType from "../../../../types/unions/zooBinaryFeatureType";
import zooYesNoAnsType from "../../../../types/unions/zooYesNoAnsType";

import ZooFormContext from "../../../../contexts/ZooFormContext";

const useStyles = makeStyles(() =>
  createStyles({
    form_container: {
      display: "inline-block",
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
  const INIT_VALUE = "no";
  const choices = ["yes", "no"];
  const [value, setValue] = useState<zooYesNoAnsType>(INIT_VALUE);

  const classes = useStyles();

  const ZooForm = useContext(ZooFormContext);
  const zooQnsDispatch = (ZooForm && ZooForm[1]) ?? null;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(event.target.name);
    setValue((event.target as HTMLInputElement).value as zooYesNoAnsType);
  };

  useEffect(() => {
    if (zooQnsDispatch) {
      zooQnsDispatch({
        type: "update binary choice",
        payload: {
          name: keyword as zooBinaryFeatureType,
          value,
        },
      });
    }
  }, [value, keyword, zooQnsDispatch]);

  const FormQuestion = (): JSX.Element => (
    <div className={classes.text}>
      {start}
      <b>{keyword}</b>
      {end}
    </div>
  );

  const FormQuestionSection = (): JSX.Element => (
    <Grid item container justifyContent={"center"} alignItems={"center"} xs={5}>
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
        justifyContent={"space-between"}
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
          <FormControl component="fieldset">
            <Grid container justifyContent={"space-between"} alignItems={"center"}>
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
