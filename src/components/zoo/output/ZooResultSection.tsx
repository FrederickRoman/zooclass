import { useState, useEffect, useRef } from "react";
import { Bar } from "react-chartjs-2";

import Box from "@material-ui/core/Box";
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

function ZooResultsSection(props: IProps): JSX.Element {
  const { classOutput, probClass } = props;
  const [chartData, setChartData] = useState<number[]>([1, 2, 3, 4, 5, 6, 7]);
  const prevInputRef = useRef<number[]>([0]);

  const mostLikelyLabel: string = LABELS[classOutput - 1];
  const confidenceProb: number = Math.round(probClass[classOutput - 1] * 100);

  useEffect(() => {
    function didInputChange(array: number[]): boolean {
      return (
        prevInputRef.current.length !== array.length ||
        prevInputRef.current.some((c, i) => c !== array[i])
      );
    }
    function updateChartData(probNums: number[]): void {
      const DEFAULT_PROB_DATA = [0, 0, 0, 0, 0, 0, 0];
      const probSum: number = probNums.reduce((acc, cur) => acc + cur);
      const probData: number[] = probNums.map((p) => 100 * (p / probSum));
      const newData: number[] =
        probData.length === LABELS.length ? probData : DEFAULT_PROB_DATA;
      setChartData(newData);
      prevInputRef.current = probClass;
    }
    const probClassVals: number[] = Object.values(probClass);
    if (didInputChange(probClassVals)) updateChartData(probClassVals);
  }, [probClass]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `${mostLikelyLabel} (~${confidenceProb}% Confidence)`,
        font: "6em",
        padding: {
          top: 10,
          bottom: 30,
        },
      },
    },
    animation: {
      duration: 100,
    },
  };

  const data = {
    labels: LABELS,
    datasets: [
      {
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: chartData,
      },
    ],
  };

  return (
    <Box
      position="sticky"
      top={60}
      height={"40vh"}
      zIndex="appBar"
      bgcolor="white"
      boxShadow={3}
      border={1}
      m={1}
    >
      <Bar type={Bar} data={data} options={options} />
    </Box>
  );
}

export default ZooResultsSection;
