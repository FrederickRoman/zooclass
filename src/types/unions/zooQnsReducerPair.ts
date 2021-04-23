import IZooFormResponse from "../interfaces/IZooFormResponse";
import zooFormActionType from "./zooFormActionType";

type zooQnsReducerPair = [IZooFormResponse, React.Dispatch<zooFormActionType>];

export default zooQnsReducerPair;