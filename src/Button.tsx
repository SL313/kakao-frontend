type ButtonType = {
  name: string;
};

const Button = (props: ButtonType) => {
  const { name } = props;
  return <button>{name}</button>;
};

export default Button;
