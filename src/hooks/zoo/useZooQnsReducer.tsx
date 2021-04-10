import { useReducer } from "react";
import IZooFormResponse from "../../types/interfaces/IZooFormResponse";
import zooFormActionType from "../../types/unions/zooFormActionType";

function useZooQnsReducer() {
  const INIT_FORM_RESPONSE: IZooFormResponse = {
    multipleChoice: [4],
    binaryChoice: Array(15).fill(false),
  };

  function reducer(state: IZooFormResponse, action: zooFormActionType) {
    switch (action.type) {
      case "update multiple choice number":
        return {
          ...state,
          multipleChoice: [action.payload],
        };
      case "toggle binary choice boolean":
        return {
          ...state,
          binaryChoice: state.binaryChoice.map((b: boolean, i: number) =>
            i === action.payload ? !b : b
          ),
        };
      default:
        throw new Error();
    }
  }

  return useReducer(reducer, INIT_FORM_RESPONSE);
}

export default useZooQnsReducer;
