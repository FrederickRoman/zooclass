import { useReducer } from "react";
import IZooBinaryChoices from "../../types/interfaces/IZooBinaryChoices";
import IZooFormResponse from "../../types/interfaces/IZooFormResponse";
import IZooMultipleChoices from "../../types/interfaces/IZooMultipleChoices";
import zooFormActionType from "../../types/unions/zooFormActionType";
import zooQnsReducerPair from "../../types/unions/zooQnsReducerPair";

const multipleChoice: IZooMultipleChoices = {
  legs: "4",
};

const binaryChoices: IZooBinaryChoices = {
  hair: "no",
  feathers: "no",
  eggs: "no",
  milk: "no",
  airborne: "no",
  aquatic: "no",
  predator: "no",
  thooted: "no",
  backbone: "no",
  breath: "no",
  venomous: "no",
  fins: "no",
  tail: "no",
  domestic: "no",
  catsize: "no",
};

function useZooQnsReducer(): zooQnsReducerPair {
  const INIT_FORM_RESPONSE: IZooFormResponse = {
    multipleChoice,
    binaryChoices,
  };

  function reducer(state: IZooFormResponse, action: zooFormActionType) {
    switch (action.type) {
      case "update multiple choice number": {
        const { name, value } = action.payload;
        const updatedMultipleChoices = {
          ...state.multipleChoice,
          [name]: value,
        };
        return { ...state, multipleChoice: updatedMultipleChoices };
      }
      case "update binary choice": {
        const { name, value } = action.payload;
        const updatedBinaryChoices = {
          ...state.binaryChoices,
          [name]: value,
        };
        return { ...state, binaryChoices: updatedBinaryChoices };
      }
      default:
        throw new Error();
    }
  }

  return useReducer(reducer, INIT_FORM_RESPONSE);
}

export default useZooQnsReducer;
