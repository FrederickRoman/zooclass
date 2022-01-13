import React, { useState, useEffect, useContext } from "react";

import { Theme } from "@mui/material/styles";

import createStyles from "@mui/styles/createStyles";
import makeStyles from "@mui/styles/makeStyles";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

import zooLegsNumber from "../../../../types/unions/zooLegsNumber";
import zooMultipleFeatureType from "../../../../types/unions/zooMultipleFeatureType";

import ZooFormContext from "../../../../contexts/ZooFormContext";

type HandleChange = (
  event: SelectChangeEvent<zooLegsNumber>,
  child: React.ReactNode
) => void;

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

  const handleChange: HandleChange = (event) => {
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
      <Grid container justifyContent={"space-between"} alignItems={"center"}>
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
