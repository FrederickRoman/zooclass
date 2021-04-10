import { useReducer } from "react";
import IZooBinaryChoices from "../../types/interfaces/IZooBinaryChoices";
import IZooFormResponse from "../../types/interfaces/IZooFormResponse";
import zooFormActionType from "../../types/unions/zooFormActionType";

const binaryChoices: IZooBinaryChoices = {
  hair: false,
  feathers: false,
  eggs: false,
  milk: false,
  airborne: false,
  aquatic: false,
  predator: false,
  thooted: false,
  backbone: false,
  breath: false,
  venomous: false,
  fins: false,
  tail: false,
  domestic: false,
  catsize: false,
};

function useZooQnsReducer() {
  const INIT_FORM_RESPONSE: IZooFormResponse = {
    multipleChoice: [4],
    binaryChoices,
  };

  function reducer(state: IZooFormResponse, action: zooFormActionType) {
    switch (action.type) {
      case "update multiple choice number":
        return {
          ...state,
          multipleChoice: [action.payload],
        };
      case "toggle binary choice boolean":
        console.log(action.payload)
        return {
          ...state,
          binaryChoices: {
            ...state.binaryChoices,
            [action.payload]: !state.binaryChoices[action.payload],
          },
        };
      default:
        throw new Error();
    }
  }

  return useReducer(reducer, INIT_FORM_RESPONSE);
}

export default useZooQnsReducer;
