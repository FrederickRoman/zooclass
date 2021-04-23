import IBinaryChoiceQuestion from "../../../types/interfaces/IBinaryChoiceQuestion";

const binaryChoiceQuestions: readonly IBinaryChoiceQuestion[] = [
  { start: "Does it have ", keyword: "hair", end: "?" },
  { start: "Does it have ", keyword: "feathers", end: "?" },
  { start: "Does it lay ", keyword: "eggs", end: "?" },
  { start: "Does it make ", keyword: "milk", end: "?" },
  { start: "Can it get ", keyword: "airborne", end: "?" },
  { start: "Is it ", keyword: "aquatic", end: "?" },
  { start: "Is it a ", keyword: "predator", end: "?" },
  { start: "Is it ", keyword: "thooted", end: "?" },
  { start: "Does it have a ", keyword: "backbone", end: "?" },
  { start: "Does it ", keyword: "breath", end: "?" },
  { start: "Is it ", keyword: "venomous", end: "?" },
  { start: "Does it have ", keyword: "fins", end: "?" },
  { start: "Does it have a ", keyword: "tail", end: "?" },
  { start: "Is it ", keyword: "domestic", end: "?" },
  { start: "Is it ", keyword: "catsize", end: "?" },
];

export default binaryChoiceQuestions;
