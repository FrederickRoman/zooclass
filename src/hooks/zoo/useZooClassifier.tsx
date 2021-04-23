import { useEffect, useState } from "react";

// There is no @types/ml-knn available yet, so for now ...
//@ts-ignore
import KNN from "ml-knn";

import zooData from "../../assets/data/ts/zooData";
import zooClassType from "../../types/unions/zooClassType";
import IZooFormResponse from "../../types/interfaces/IZooFormResponse";
import IZooBinaryChoices from "../../types/interfaces/IZooBinaryChoices";
import zooLegsNumber from "../../types/unions/zooLegsNumber";

interface IuseZooClassProps {
  zooQnsState: IZooFormResponse;
}

type binaryDigit = 0 | 1;
interface IBinaryObj {
  [key: string]: binaryDigit;
}
type legsNumber = 0 | 2 | 4 | 5 | 6 | 8;

type zooFeature = binaryDigit | legsNumber;

type preprocessUnclassified = (zooQnsState: IZooFormResponse) => number[];

// function preprocessUnclassified(zooQnsState: IZooFormResponse) {
//   console.log(preprocessUnclassified);
// }

function useZooClass(props: IuseZooClassProps) {
  const { zooQnsState } = props;
  const INIT_MODEL = {
    trained: false,
    predict(x: number[]): number {
      return x[0];
    },
  };
  const [model, setModel] = useState(INIT_MODEL);
  const INIT_UNCLASSIFIED = [0, 0, 0, 0, 0, 0, 0, 0, 0];
  const INIT_CLASS: zooClassType = 1;
  const [unclassfiedInput, setUnclassifiedInput] = useState(INIT_UNCLASSIFIED);
  const [classOutput, setClassOutput] = useState<zooClassType>(INIT_CLASS);

  useEffect(() => {
    const train_dataset: number[][] = [];
    const train_labels: number[] = [];
    Object.entries(zooData).forEach(([, v]) => {
      const [features, label] = [v.slice(0, -1), ...v.slice(-1)];
      train_dataset.push(features);
      train_labels.push(label);
    });

    const knn = new KNN(train_dataset, train_labels, { k: 3 });
    knn.trained = true;

    //// Accuracy metrics
    const dataset_prediction = knn.predict(train_dataset);
    const errors = dataset_prediction
      .map((p: number, i: number) => (p === train_labels[i] ? 0 : 1))
      .reduce((acc: number, cur: number) => acc + cur);
    const perceError = errors / train_labels.length;
    console.log('errors', errors);
    console.log('num of samples', train_labels.length);
    console.log('perceError', perceError);
    ////
    
    setModel(knn);
  }, []);

  useEffect(() => {
    const preprocessUnclassified = (zooQnsState: IZooFormResponse) => {
      console.log(zooQnsState);
      const binaryChoices: IBinaryObj = {
        hair: 1,
        feathers: 1,
        eggs: 1,
        milk: 1,
        airborne: 1,
        aquatic: 1,
        predator: 1,
        toothed: 1,
        backbone: 1,
        breathers: 1,
        venomous: 1,
        fins: 1,
        tail: 1,
        domestic: 1,
        catsize: 1,
      };
      Object.entries(zooQnsState.binaryChoices).forEach(([k, v]) => {
        binaryChoices[k] = v === "yes" ? 1 : 0;
      });
      const {
        hair,
        feathers,
        eggs,
        milk,
        airborne,
        aquatic,
        predator,
        toothed,
        backbone,
        breathers,
        venomous,
        fins,
        tail,
        domestic,
        catsize,
      } = binaryChoices;
      const { legs } = zooQnsState.multipleChoice;
      const unclassified = [
        hair,
        feathers,
        eggs,
        milk,
        airborne,
        aquatic,
        predator,
        toothed,
        backbone,
        breathers,
        venomous,
        fins,
        Number(legs) as legsNumber,
        tail,
        domestic,
        catsize,
      ];
      return unclassified;
    };
    const unclassified = preprocessUnclassified(zooQnsState);

    setUnclassifiedInput(unclassified);
  }, [zooQnsState]);

  useEffect(() => {
    console.log(model);
    if (model.trained) {
      const classOutput = model.predict(unclassfiedInput) as zooClassType;
      setClassOutput(classOutput);
    }
  }, [unclassfiedInput]);

  // const zooClassification = (Math.floor(Math.random() * 7) + 1) as zooClassType;
  console.log(classOutput);
  return classOutput;
}

export default useZooClass;
