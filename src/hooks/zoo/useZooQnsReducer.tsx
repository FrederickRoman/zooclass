import { useReducer } from "react";
import IZooBinaryChoices from "../../types/interfaces/IZooBinaryChoices";
import IZooFormResponse from "../../types/interfaces/IZooFormResponse";
import zooFormActionType from "../../types/unions/zooFormActionType";

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
      case "update binary choice":
        console.log(action.payload);
        const { name, value } = action.payload;
        const updatedBinaryChoices = { ...state.binaryChoices, [name]: value };
        return { ...state, binaryChoices: updatedBinaryChoices };
      default:
        throw new Error();
    }
  }

  return useReducer(reducer, INIT_FORM_RESPONSE);
}

export default useZooQnsReducer;
