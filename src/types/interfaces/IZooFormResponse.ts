import IZooBinaryChoices from "./IZooBinaryChoices";
import IZooMultipleChoices from "./IZooMultipleChoices";

interface IZooFormResponse {
  multipleChoice: IZooMultipleChoices;
  binaryChoices: IZooBinaryChoices;
}

export default IZooFormResponse;
