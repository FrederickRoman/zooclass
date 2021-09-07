import React, { useState, useEffect, useContext } from "react";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import zooLegsNumber from "../../../../types/unions/zooLegsNumber";
import zooMultipleFeatureType from "../../../../types/unions/zooMultipleFeatureType";

import ZooFormContext from "../../../../contexts/ZooFormContext";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    container: {
      background: "white",
    },
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },
    button: {
      display: "block",
      marginTop: theme.spacing(2),
    },
  })
);

interface IFeatureSelectInputProps {
  label: string;
  values: zooLegsNumber[];
  defaultValue: zooLegsNumber;
  texts: string[];
  id: string;
}

function FeatureSelectInput(props: IFeatureSelectInputProps): JSX.Element {
  const { label, values, defaultValue, texts, id } = props;
  const [selection, setSelection] = useState<zooLegsNumber>(defaultValue);
  const ZooForm = useContext(ZooFormContext);
  const zooQnsDispatch = (ZooForm && ZooForm[1]) ?? null;
  const classes = useStyles();

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setSelection((event.target as HTMLInputElement).value as zooLegsNumber);
  };

  useEffect(() => {
    if (zooQnsDispatch) {
      zooQnsDispatch({
        type: "update multiple choice number",
        payload: {
          name: label as zooMultipleFeatureType,
          value: selection as zooLegsNumber,
        },
      });
    }
  }, [selection, label, zooQnsDispatch]);

  const toMenuItemMapper = (v: zooLegsNumber, i: number): JSX.Element => (
    <MenuItem value={v} key={i}>
      {texts[i]}
    </MenuItem>
  );

  return (
    <Box m={1} className={classes.container}>
      <Grid container justify={"space-between"} alignItems={"center"}>
        <Grid item>
          <FormControl className={classes.formControl}>
            <InputLabel id={`legNum_${id}}`}>{label}</InputLabel>
            <Select
              labelId={id}
              id={id}
              value={selection}
              onChange={handleChange}
            >
              {values.map(toMenuItemMapper)}
            </Select>
          </FormControl>
        </Grid>
      </Grid>
    </Box>
  );
}

export default FeatureSelectInput;
