import { useEffect, useState } from "react";

import zooClassType from "../../types/unions/zooClassType";
import IZooFormResponse from "../../types/interfaces/IZooFormResponse";

import zooNNmodel from "../../services/classification/zooNNmodel";

import { INeuralNetworkJSON, NeuralNetwork } from "brain.js/src/index";
import NNprocessing from "../../services/classification/NNprocessing";

interface IuseZooClassProps {
  zooQnsState: IZooFormResponse;
}

function useZooClass(props: IuseZooClassProps) {
  const { zooQnsState } = props;
  const unclassfiedInput = NNprocessing.preprocessUnclassified(zooQnsState);
  const [netModel, setNetModel] = useState<NeuralNetwork | null>(null);
  const [classOutput, setClassOutput] = useState<zooClassType>(1);

  useEffect(() => {
    const netModelJSON: INeuralNetworkJSON = zooNNmodel as INeuralNetworkJSON;
    const net: NeuralNetwork = new NeuralNetwork();
    net.fromJSON(netModelJSON);
    setNetModel(net);
    return () => setNetModel(null);
  }, []);

  useEffect(() => {
    if (netModel) {
      const encodedInput: Number[] = NNprocessing.encode(unclassfiedInput);
      const encodedOutput: Number[] = netModel.run(encodedInput);
      const indexOfMax: number = NNprocessing.decode(encodedOutput);
      const classOutput: zooClassType = (indexOfMax + 1) as zooClassType;
      setClassOutput(classOutput);
    }
  }, [unclassfiedInput, netModel]);

  return classOutput;
}

export default useZooClass;
