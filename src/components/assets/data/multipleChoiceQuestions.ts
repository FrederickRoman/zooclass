import IMultipleChoiceQuestion from "../../../types/interfaces/IMultipleChoiceQuestion";

const multipleChoiceQuestions: readonly IMultipleChoiceQuestion[] = [
  {
    label: "legs",
    values: ['0', '2', '4', '5', '6', '8'],
    defaultValue: '4',
    texts: ["0", "2", "4", "5", "6", "8"],
    id: "legs",
  },
];

export default multipleChoiceQuestions;
