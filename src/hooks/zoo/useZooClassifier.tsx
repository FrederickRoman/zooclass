import { useEffect, useRef, useState } from "react";

import zooClassType from "../../types/unions/zooClassType";
import IZooFormResponse from "../../types/interfaces/IZooFormResponse";

import zooNNmodel from "../../services/classification/zooNNmodel";

import { INeuralNetworkJSON, NeuralNetwork } from "brain.js/src/index";
import DataProcessing from "../../services/classification/DataProcessing";

type netModel = NeuralNetwork | null;

function useZooClass(zooQnsState: IZooFormResponse) {
  const { preprocessUnclassified } = DataProcessing;
  const unclassfiedInput: number[] = preprocessUnclassified(zooQnsState);

  const INI_MODEL: netModel = null;
  const INIT_OUTENCODED: number[] = [1];
  const INIT_OUTCLASS: zooClassType = 5;
  const INIT_INPUT_REF_CUR: number[] = [0];

  const [netModel, setNetModel] = useState<netModel>(INI_MODEL);
  const [encodedOutput, setEncodedOutput] = useState<number[]>(INIT_OUTENCODED);
  const [classOutput, setClassOutput] = useState<zooClassType>(INIT_OUTCLASS);
  const prevInputRef = useRef(INIT_INPUT_REF_CUR);

  useEffect(() => {
    const netModelJSON: INeuralNetworkJSON = zooNNmodel as INeuralNetworkJSON;
    const net: NeuralNetwork = new NeuralNetwork();
    net.fromJSON(netModelJSON);
    setNetModel(net);
    return () => setNetModel(null);
  }, []);

  useEffect(() => {
    const didInputChange = (unclassfiedInput: number[]): boolean =>
      prevInputRef.current.length !== unclassfiedInput.length ||
      prevInputRef.current.some((c, i) => c !== unclassfiedInput[i]);

    if (netModel) {
      if (didInputChange(unclassfiedInput)) {
        const { encode, decode } = DataProcessing;
        const encodedInput: number[] = encode(unclassfiedInput);
        const encodedOutput: number[] = netModel.run(encodedInput);
        const indexOfMax: number = decode(encodedOutput);
        const classOutput: zooClassType = (indexOfMax + 1) as zooClassType;
        setEncodedOutput(encodedOutput);
        setClassOutput(classOutput);
        prevInputRef.current = unclassfiedInput;
      }
    }
  }, [netModel, unclassfiedInput]);

  return { classOutput, encodedOutput };
}

export default useZooClass;
