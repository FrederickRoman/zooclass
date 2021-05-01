import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";

interface IProps {
  probClass: number[];
}

function ZooResultsSection(props: IProps): JSX.Element {
  const { probClass } = props;

  const [data, setData] = useState([1, 2, 3, 4, 5, 6, 7]);
  const serializedprobClass = JSON.stringify(probClass);

  useEffect(() => {
    const probData: number[] = Object.values(probClass).map((p) => 100 * p);
    setData(probData.length === 7 ? probData : [0, 0, 0, 0, 0, 0, 0]);
  }, [serializedprobClass, probClass]);

  console.log("data", data);

  return (
    <div
      style={{
        position: "sticky",
        top: 60,
        zIndex: 1100,
        background: "white",
        boxShadow:
          "0px 2px 4px -1px rgb(0 0 0 / 20%), 0px 4px 5px 0px rgb(0 0 0 / 14%), 0px 1px 10px 0px rgb(0 0 0 / 12%)",
      }}
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
              label: "Classification Probability %",
              backgroundColor: "rgba(75,192,192,1)",
              borderColor: "rgba(0,0,0,1)",
              borderWidth: 2,
              data,
            },
          ],
        }}
        options={{
          // title: {
          //   display: true,
          //   text: "Average Rainfall per month",
          //   fontSize: 20,
          // },
          legend: {
            display: true,
            position: "right",
          },
       
        }}
      />
    </div>
  );
}

export default ZooResultsSection;
