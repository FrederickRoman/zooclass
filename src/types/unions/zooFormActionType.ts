import zooBinaryFeatureType from "./zooBinaryFeatureType";
import zooYesNoAnsType from "./zooYesNoAnsType";

type zooFormActionType =
  | { type: "update multiple choice number"; payload: number }
  | {
      type: "update binary choice";
      payload: {
        name: zooBinaryFeatureType;
        value: zooYesNoAnsType;
      };
    };

export default zooFormActionType;
