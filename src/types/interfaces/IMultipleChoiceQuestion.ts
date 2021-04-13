import zooLegsNumber from "../unions/zooLegsNumber";

interface IMultipleChoiceQuestion {
  label: string;
  values: zooLegsNumber[];
  defaultValue: zooLegsNumber;
  texts: string[];
  id: string;
}

export default IMultipleChoiceQuestion;
