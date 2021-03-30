interface IMultipleChoiceQuestion {
  label: string;
  values: number[];
  defaultValue: number;
  texts: string[];
  id: string;
}

export default IMultipleChoiceQuestion;
