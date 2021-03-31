type zooFormActionType =
  | { type: "update multiple choice number"; payload: number }
  | { type: "toggle binary choice boolean"; payload: number };

export default zooFormActionType;
