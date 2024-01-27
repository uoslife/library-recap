type Props = {
  name: 'chair' | 'clock' | 'clear';
} & React.HTMLAttributes<HTMLImageElement>;

const Icon = ({ name, ...props }: Props) => {
  return <img src={`/images/icons/${name}.svg`} {...props} />;
};

export default Icon;
