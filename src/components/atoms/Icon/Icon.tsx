type Props = { name: 'chair' | 'clock' };

const Icon = ({ name }: Props) => {
  return <img src={`/images/icons/${name}.svg`} />;
};

export default Icon;
