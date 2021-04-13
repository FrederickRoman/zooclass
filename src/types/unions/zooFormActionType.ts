import zooBinaryFeatureType from "./zooBinaryFeatureType";
import zooLegsNumber from "./zooLegsNumber";
import zooMultipleFeatureType from "./zooMultipleFeatureType";
import zooYesNoAnsType from "./zooYesNoAnsType";

type zooFormActionType =
  | {
      type: "update multiple choice number";
      payload: {
        name: zooMultipleFeatureType;
        value: zooLegsNumber;
      };
    }
  | {
      type: "update binary choice";
      payload: {
        name: zooBinaryFeatureType;
        value: zooYesNoAnsType;
      };
    };

export default zooFormActionType;
