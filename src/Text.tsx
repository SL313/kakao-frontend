type Texttype = {
  text: string;
  type: string;
};

const Text = (props: Texttype) => {
  const { text, type } = props;
  return (
    <>
      {type === "header" && <h1>{text}</h1>}
      {type === "bold" && <strong>{text}</strong>}
    </>
  );
};

export default Text;
