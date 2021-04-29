import { useEffect, useState } from "react";

// There is no @types/ml-knn available yet, so for now ...
//@ts-ignore
import KNN from "ml-knn";

import zooData from "../../assets/data/ts/zooData";
import zooClassType from "../../types/unions/zooClassType";
import IZooFormResponse from "../../types/interfaces/IZooFormResponse";
import IZooBinaryChoices from "../../types/interfaces/IZooBinaryChoices";
import zooLegsNumber from "../../types/unions/zooLegsNumber";

import zooNNmodel from "../../services/classification/zooNNmodel";

import brain, { INeuralNetworkJSON, NeuralNetwork } from "brain.js/src/index";

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
  const [encodedInput, setEncodedInput] = useState<Number[] | null>(null);
  const [netModel, setNetModel] = useState<NeuralNetwork | null>(null);
  const [encodedOutput, setEncodedOutput] = useState<Number[] | null>(null);
  const [classOutput, setClassOutput] = useState<zooClassType>(INIT_CLASS);

  const input = [
    0,
    1,
    1,
    0,
    1,
    0,
    0,
    0,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
  ];

  useEffect(() => {
    const netModelJSON: INeuralNetworkJSON = zooNNmodel as INeuralNetworkJSON;
    const net: NeuralNetwork = new NeuralNetwork();
    net.fromJSON(netModelJSON);
    setNetModel(net);
    return () => setNetModel(null);
  }, []);

  useEffect(() => {
    function encode(input: Number[]) {
      const MAX_NUM_OF_LEGS = 8;
      const hotEncodeLegsNum = (label: legsNumber): Number[] => {
        const zeroPad = Array(MAX_NUM_OF_LEGS).fill(0);
        zeroPad[label] = 1;
        return zeroPad;
      };
      const encodedInput: Number[] = input
        .map((f, i) => (i === 12 ? hotEncodeLegsNum(f as legsNumber) : f))
        .flat();
      return encodedInput;
    }

    if (unclassfiedInput) {
      const encodedInput = encode(unclassfiedInput);
      setEncodedInput(encodedInput);
    }
  }, [unclassfiedInput]);

  useEffect(() => {
    if (netModel && encodedInput) {
      console.time("inference time");
      const encodedOutput: Number[] = netModel.run(encodedInput);
      setEncodedOutput(encodedOutput);
      console.log("net run input: ", encodedOutput);
      console.timeEnd("inference time");
    }
  }, [encodedInput]);

  interface IMaxVal {
    max: number;
    index: number;
  }

  useEffect(() => {
    console.log("encodedOutput", encodedOutput);
    if (encodedOutput !== null) {
      console.log("encodedOutput is not null");
      let max: number = 0;
      let indexOfMax: number = -1;
      console.log("encodedOutput.length", encodedOutput.length);
      const NUM_OF_CLASSES = 7;
      for (let index = 0; index < NUM_OF_CLASSES; index++) {
        console.log("I am in the loop");
        const cur = encodedOutput[index] as number;
        console.log("cur", cur);
        if (cur > max) {
          console.log("max", max);
          max = cur;
          indexOfMax = index;
        }
      }
      if (0 <= indexOfMax && indexOfMax <= 6) {
        const classOutput: zooClassType = (indexOfMax + 1) as zooClassType;

        console.log(classOutput);
        setClassOutput(classOutput);
      }
    }
  }, [encodedOutput]);

  useEffect(() => {
    if (netModel) {
      console.time("inference time");
      const output = netModel.run(input);
      console.log("net run input: ", output);
      console.timeEnd("inference time");
    }
  }, [unclassfiedInput]);

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
    console.log("errors", errors);
    console.log("num of samples", train_labels.length);
    console.log("perceError", perceError);
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

  /*   useEffect(() => {
    console.log(model);
    if (model.trained) {
      const classOutput = model.predict(unclassfiedInput) as zooClassType;
      setClassOutput(classOutput);
    }
  }, [unclassfiedInput]); */

  // const zooClassification = (Math.floor(Math.random() * 7) + 1) as zooClassType;
  console.log(classOutput);
  return classOutput;
}

export default useZooClass;
