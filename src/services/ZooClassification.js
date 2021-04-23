// import IZooFormResponse from "../types/interfaces/IZooFormResponse";

// import * as csv from "csvtojson";

const ZooClassification = {
  classify(zooQnsState) {
    console.log(zooQnsState);
    return Math.floor(Math.random() * 7) + 1;
  },
};

export default ZooClassification;
