import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

import Box from "@material-ui/core/Box";

interface IProps {
  probClass: number[];
}

function ZooResultsSection(props: IProps): JSX.Element {
  const { probClass } = props;

  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7]);
  const serializedprobClass = JSON.stringify(probClass);

  useEffect(() => {
    const probNums: number[] = Object.values(probClass);
    const probSum: number = probNums.reduce((acc, cur) => acc + cur);
    const probData: number[] = probNums.map((p) => 100 * (p / probSum));
    setData(probData.length === 7 ? probData : [0, 0, 0, 0, 0, 0, 0]);
  }, [serializedprobClass, probClass]);

  return (
    <Box
      position="sticky"
      top={60}
      zIndex="appBar"
      bgcolor="white"
      boxShadow={3}
      border={1}
      m={1}
    >
      <Bar
        type={Bar}
        data={{
          labels: [
            "Mammal",
            "Bird",
            "Reptile",
            "Fish",
            "Amphibian",
            "Insect",
            "Molusk",
          ],
          datasets: [
            {
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data,
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
            title: {
              display: true,
              text: "Animal prediction (probablity %)",
              font: "2em",
              padding: {
                top: 10,
                bottom: 30,
              },
            },
          },
          animation: {
            duration: 100,
          },
        }}
      />
    </Box>
  );
}

export default ZooResultsSection;
