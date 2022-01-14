import { useState, useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";
import { Box, Grid, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import zooClassType from "../../../types/unions/zooClassType";

interface IProps {
  classOutput: zooClassType;
  probClass: number[];
}

const LABELS: readonly string[] = Object.freeze([
  "Mammal",
  "Bird",
  "Reptile",
  "Fish",
  "Amphibian",
  "Insect",
  "Molusk",
]);
const DEFAULT_CHART_DATA: number[] = [
  0.29189333319664, 0, 0.08952232450246811, 0, 0.29646316170692444,
  0.15877649188041687,
];
const DEFAULT_CONFIDENCE: number = 35;

const useStyles = makeStyles({
  typography_title: {
    color: "white",
    fontSize: "1.5em",
    padding: 5,
  },
});

function ZooResultsSection(props: IProps): JSX.Element {
  const { classOutput, probClass } = props;
  const [confidence, setConfidence] = useState<number>(DEFAULT_CONFIDENCE);
  const [chartData, setChartData] = useState<number[]>(DEFAULT_CHART_DATA);
  const prevInputRef = useRef<number[]>([1]);
  const classes = useStyles();
  const mostLikelyLabel: string = LABELS[classOutput - 1];

  useEffect(() => {
    function didInputChange(array: number[]): boolean {
      return (
        prevInputRef.current.length !== array.length ||
        prevInputRef.current.some((c, i) => c !== array[i])
      );
    }
    function toPercentage(array: number[]) {
      const sum: number = array.reduce((acc, cur) => acc + cur);
      return array.map((p) => 100 * (p / sum));
    }
    function updateChartData(probNums: number[]): void {
      const newData: number[] = toPercentage(probNums);
      const newConfidence: number = Math.round(newData[classOutput - 1]);
      setChartData(newData);
      setConfidence(newConfidence);
      prevInputRef.current = probClass;
    }
    const probClassVals: number[] = Object.values(probClass);
    if (didInputChange(probClassVals)) updateChartData(probClassVals);
  }, [probClass, classOutput]);

  return (
    <>
      <Box position="sticky" top={0} zIndex="appBar" bgcolor="#1b5e20">
        <Grid container justifyContent="center" alignItems="center">
          <Grid item>
            <Box>
              <Typography
                align="center"
                variant="h2"
                className={classes.typography_title}
              >
                {`${mostLikelyLabel} (~${confidence}% Confident)`}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Box
        position="sticky"
        top={40}
        height="40vh"
        zIndex="appBar"
        bgcolor="white"
        boxShadow={3}
        border={1}
        m={1}
      >
        <Bar
          type={Bar}
          data={{
            labels: LABELS,
            datasets: [
              {
                backgroundColor: "rgba(27, 94, 32, 0.7)",
                borderColor: "rgba(0,0,0,1)",
                borderWidth: 2,
                data: chartData,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: {
                display: false,
              },
            },
            animation: {
              duration: 100,
            },
          }}
        />
      </Box>
    </>
  );
}

export default ZooResultsSection;
