import IZooFormResponse from "../../types/interfaces/IZooFormResponse";

type binaryDigit = 0 | 1;
interface IBinaryObj {
  [key: string]: binaryDigit;
}
type legsNumber = 0 | 2 | 4 | 5 | 6 | 8;

const DataProcessing = {
  preprocessUnclassified(zooQnsState: IZooFormResponse): number[] {
    // console.log(zooQnsState);
    const binaryChoices: IBinaryObj = {
      hair: 1,
      feathers: 1,
      eggs: 1,
      milk: 1,
      airborne: 1,
      aquatic: 1,
      predator: 1,
      toothed: 1,
      backbone: 1,
      breathers: 1,
      venomous: 1,
      fins: 1,
      tail: 1,
      domestic: 1,
      catsize: 1,
    };
    Object.entries(zooQnsState.binaryChoices).forEach(([k, v]) => {
      binaryChoices[k] = v === "yes" ? 1 : 0;
    });
    const {
      hair,
      feathers,
      eggs,
      milk,
      airborne,
      aquatic,
      predator,
      toothed,
      backbone,
      breathers,
      venomous,
      fins,
      tail,
      domestic,
      catsize,
    } = binaryChoices;
    const { legs } = zooQnsState.multipleChoice;
    const unclassified = [
      hair,
      feathers,
      eggs,
      milk,
      airborne,
      aquatic,
      predator,
      toothed,
      backbone,
      breathers,
      venomous,
      fins,
      Number(legs) as legsNumber,
      tail,
      domestic,
      catsize,
    ];
    return unclassified;
  },
  encode(input: number[]): number[] {
    const MAX_NUM_OF_LEGS = 8;
    const hotEncodeLegsNum = (label: legsNumber): number[] => {
      const zeroPad = Array(MAX_NUM_OF_LEGS).fill(0);
      zeroPad[label] = 1;
      return zeroPad;
    };
    const encodedInput: number[] = input
      .map((f, i) => (i === 12 ? hotEncodeLegsNum(f as legsNumber) : f))
      .flat();
    return encodedInput;
  },
  decode(encodedOutput: number[]): number {
    let max: number = 0;
    let indexOfMax: number = -1;
    const NUM_OF_CLASSES = 7;
    for (let index = 0; index < NUM_OF_CLASSES; index++) {
      const cur = encodedOutput[index] as number;
      if (cur > max) {
        max = cur;
        indexOfMax = index;
      }
    }
    return indexOfMax ?? -1;
  },
};

export default DataProcessing;
