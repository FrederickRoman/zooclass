import zooBinaryFeatureType from "./zooBinaryFeatureType";

type zooFormActionType =
  | { type: "update multiple choice number"; payload: number }
  | { type: "toggle binary choice boolean"; payload: zooBinaryFeatureType };

export default zooFormActionType;
