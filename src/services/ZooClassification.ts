import IZooFormResponse from "../types/interfaces/IZooFormResponse";

const ZooClassification = {
  classify(zooQnsState: IZooFormResponse) {
    console.log(zooQnsState);
    return Math.floor(Math.random() * 7) + 1;
  },
};

export default ZooClassification;
