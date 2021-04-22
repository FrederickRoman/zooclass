import zooClassType from "../../../types/unions/zooClassType";

interface IZooResultsSectionProps {
  zooClass: zooClassType;
}

function zooResultsSection(props: IZooResultsSectionProps) {
  const { zooClass } = props;
  return <div>I am at zoo results section {zooClass}</div>;
}

export default zooResultsSection;
